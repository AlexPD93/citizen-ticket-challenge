import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useState } from "react";

import ColourPicker from "../components/ColourPicker.js";
import Icon from "../components/Icon.js";

export default function Input({ category, setCategory }) {
  const [color, setColor] = useState("#aabbcc");
  const [chosenIcon, setChosenIcon] = useState("");

  function getValue(e) {
    setCategory(e.target.value);
  }

  async function handleClick(e) {
    e.preventDefault();
    await DataStore.save(
      new Categories({
        name: category,
        icon: chosenIcon,
        colour: color,
      })
    );
  }

  return (
    <div className="input">
      <form action="">
        <input type="text" onChange={getValue} />
        <ColourPicker onChange={setColor} />
        <Icon setChosenIcon={setChosenIcon} />
        <button type="submit" onClick={handleClick}>
          Create Category
        </button>
      </form>
    </div>
  );
}
