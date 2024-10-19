import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { TailSpin } from "react-loader-spinner";

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <main>
        <Suspense
          fallback={
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
          }
        >
          {children}
        </Suspense>
      </main>
    </>
  );
}
