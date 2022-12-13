import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input.js";
import List from "../components/List.js";
import SwitchMode from "../components/SwitchMode.js";

import "./HomePage.css";

export default function HomePage({ theme, setTheme }) {
  const [categoryValue, setCategoryValue] = useState("");
  const [lastCategory, setLastCategory] = useState("");
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [chosenItem, setChosenItem] = useState();

  let chosenItemId;

  useEffect(() => {
    async function retrieveCategories() {
      const categoryData = await DataStore.query(Categories);
      setCategoriesArray(categoryData);
      const lastCategory = categoriesArray[categoriesArray.length - 1];
      setLastCategory(lastCategory);
    }
    retrieveCategories();
  }, [categoriesArray, lastCategory]);

  async function handleClick(e) {
    const categoryId = e.target.closest("li").id;

    const selected = await DataStore.query(Categories, categoryId);

    setChosenItem(selected.id);
  }

  !chosenItem ? (chosenItemId = lastCategory) : (chosenItemId = chosenItem);

  return (
    <div className="Homepage">
      <SwitchMode theme={theme} setTheme={setTheme} />
      {theme === "light" ? (
        <h1 style={{ color: "black" }}>Citizen Ticket Challenge</h1>
      ) : (
        <h1 style={{ color: "white" }}>Citizen Ticket Challenge</h1>
      )}
      <Input
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />
      {categoriesArray.length > 0 ? (
        <div className="link-container">
          <Link
            className="next-link"
            to={`/category-page/${chosenItemId}`}
            state={{
              id: chosenItemId,
              theme: theme,
            }}
          >
            Next
          </Link>
        </div>
      ) : (
        <div className="submit-p">
          <p>Submit a category</p>
        </div>
      )}
      <List
        onClick={handleClick}
        categoriesArray={categoriesArray}
        setChosenItem={setChosenItem}
        chosenItem={chosenItem}
      />
    </div>
  );
}
