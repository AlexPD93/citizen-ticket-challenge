import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useNavigate } from "react-router-dom";

export default function Button({ category }) {
  const navigate = useNavigate();
  async function handleClick() {
    await DataStore.save(
      new Categories({
        name: category,
        icon: "hello",
        colour: "red",
      })
    );

    // navigate("/category-page");
  }
  return (
    <div className="Button">
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
