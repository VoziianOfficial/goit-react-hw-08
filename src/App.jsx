import "./css/App.css";

import { lazy, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
function App() {
  const Home = lazy(() => import("./pages/HomePage/HomePage"));
  const Register = lazy(() => import("./pages/RegisterPage/RegisterPage"));
  const Login = lazy(() => import("./pages/LoginPage/LoginPage"));
  const Contacts = lazy(() => import("./pages/ContactsPage/ContactsPage"));

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <div className="loader">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#6a1aff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
