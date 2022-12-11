import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input.js";
import List from "../components/List.js";

export default function HomePage() {
  const [categoryValue, setCategoryValue] = useState("");
  const [lastCategoryId, setLastCategoryId] = useState("");
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [chosenItem, setChosenItem] = useState();

  let chosenItemId;

  useEffect(() => {
    async function retrieveCategories() {
      await DataStore.query(Categories).then((data) => {
        setCategoriesArray(data);
        setLastCategoryId(categoriesArray[categoriesArray.length - 1]);
      });
    }
    retrieveCategories();
  });

  async function handleClick(e) {
    const categoryId = e.target.closest("li").id;
    setChosenItem(await DataStore.query(Categories, categoryId));
  }

  chosenItem ? (chosenItemId = chosenItem.id) : (chosenItemId = lastCategoryId);
  return (
    <div className="Homepage">
      <h1>Citizen Ticket Challenge</h1>
      <h2>Create a new category</h2>
      <Input
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />
      <List onClick={handleClick} categoriesArray={categoriesArray} />
      {categoriesArray.length > 0 ? (
        <Link
          to={`/category-page/${chosenItemId}`}
          state={{ id: chosenItemId }}
        >
          Next
        </Link>
      ) : (
        <p>Please submit a category.</p>
      )}
    </div>
  );
}
