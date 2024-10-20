import { useState } from "react";
import { changeFilter } from "../../redux/filters/slice";
import { useDispatch } from "react-redux";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(
    localStorage.getItem("filter-value") || ""
  );

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    dispatch(changeFilter(newValue));
    localStorage.setItem("filter-value", newValue);
  };

  return (
    <div>
      <label className={css.search} htmlFor="search">
        Search Your Contacts
        <input
          placeholder="Filter your Contacts..."
          onChange={handleChange}
          className={css.input}
          type="text"
          id="search"
          value={inputValue}
        />
      </label>
    </div>
  );
}
