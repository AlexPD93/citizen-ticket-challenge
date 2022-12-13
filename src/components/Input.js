import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useState } from "react";

import ColourPicker from "../components/ColourPicker.js";
import Icon from "../components/Icon.js";

import "./Input.css";

export default function Input({ categoryValue, setCategoryValue, theme }) {
  const [color, setColor] = useState("#ffffff");
  const [chosenIcon, setChosenIcon] = useState();
  const [textError, setTextError] = useState(false);
  const [iconError, setIconError] = useState(false);

  function getValue(e) {
    setCategoryValue(e.target.value);
  }

  function checkValidity() {
    //Check category input
    categoryValue.length === 0 ? setTextError(true) : setTextError(false);

    //Check an icon has been chosen
    chosenIcon === undefined ? setIconError(true) : setIconError(false);

    if (categoryValue.length === 0 || chosenIcon === undefined) {
      return false;
    }
    return true;
  }

  async function handleClick(e) {
    e.preventDefault();
    const valid = checkValidity();

    if (valid) {
      await DataStore.save(
        new Categories({
          name: categoryValue,
          icon: chosenIcon,
          colour: color,
        })
      );
      setCategoryValue("");
    }
  }

  return (
    <div className="input">
      <form>
        <label For="category" className={theme === "light" ? "" : "label-dark"}>
          Type a category
        </label>
        <input
          id="category"
          type="text"
          onChange={getValue}
          value={categoryValue}
          maxLength="25"
        />
        {textError && <p className="error">You need to add a category!</p>}
        <ColourPicker onChange={setColor} />
        <Icon chosenIcon={chosenIcon} setChosenIcon={setChosenIcon} />
        {iconError && <p className="error">You need to add an icon!</p>}
        <button type="submit" onClick={handleClick}>
          Create Category
        </button>
      </form>
    </div>
  );
}
