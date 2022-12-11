import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input.js";
import List from "../components/List.js";

export default function HomePage() {
  const [category, setCategory] = useState("");
  const [chosenItem, setChosenItem] = useState();
  let chosenItemId;
  async function handleClick(e) {
    const categoryId = e.target.closest("li").id;
    setChosenItem(await DataStore.query(Categories, categoryId));
  }
  chosenItem ? (chosenItemId = chosenItem.id) : (chosenItemId = "");
  return (
    <div className="Homepage">
      <h1>Citizen Ticket Challenge</h1>
      <h2>Create a new category</h2>
      <Input category={category} setCategory={setCategory} />
      <List onClick={handleClick} />
      <Link to={`/category-page/${chosenItemId}`} state={{ id: chosenItemId }}>
        Next
      </Link>
    </div>
  );
}
