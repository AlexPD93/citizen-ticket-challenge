import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useNavigate } from "react-router-dom";

export default function Input({ category, setCategory }) {
  const navigate = useNavigate();

  function getValue(e) {
    setCategory(e.target.value);
  }

  async function handleClick(e) {
    e.preventDefault();
    await DataStore.save(
      new Categories({
        name: category,
        // icon: "hello",
        // colour: "red",
      })
    );
  }
  return (
    <div className="input">
      <form action="">
        <input type="text" onChange={getValue} />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
