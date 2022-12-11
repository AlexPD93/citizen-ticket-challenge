import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useState } from "react";

import ColourPicker from "../components/ColourPicker.js";
import Icon from "../components/Icon.js";

export default function Input({ categoryValue, setCategoryValue }) {
  const [color, setColor] = useState("#aabbcc");
  const [chosenIcon, setChosenIcon] = useState();
  const [textError, setTextError] = useState(false);
  const [iconError, setIconError] = useState(false);

  function getValue(e) {
    setCategoryValue(e.target.value.trim());
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
      <form action="">
        <input type="text" onChange={getValue} value={categoryValue} />
        {textError && <p>You need to add a category!</p>}
        <ColourPicker onChange={setColor} />
        <Icon chosenIcon={chosenIcon} setChosenIcon={setChosenIcon} />
        {iconError && <p>You need to add an icon!</p>}
        <button type="submit" onClick={handleClick}>
          Create Category
        </button>
      </form>
    </div>
  );
}
