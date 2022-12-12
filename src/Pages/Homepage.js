import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input.js";
import List from "../components/List.js";

import "./HomePage.css";

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
      });
    }
    setLastCategoryId(categoriesArray[categoriesArray.length - 1]);

    retrieveCategories();
  }, [lastCategoryId, categoriesArray]);

  async function handleClick(e) {
    const categoryId = e.target.closest("li").id;
    setChosenItem(await DataStore.query(Categories, categoryId));
  }

  return (
    <div className="Homepage">
      <h1>Citizen Ticket Challenge</h1>
      <Input
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />
      {categoriesArray.length > 0 ? (
        <div className="link-container">
          <Link
            className="next-link"
            to={`/category-page/${chosenItemId}`}
            state={{ id: chosenItemId }}
          >
            Next
          </Link>
        </div>
      ) : (
        <p className="submit-p">Submit a category</p>
      )}
      <List onClick={handleClick} categoriesArray={categoriesArray} />
    </div>
  );
}
