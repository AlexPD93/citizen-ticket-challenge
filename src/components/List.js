import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import capitaliseFirstLetter from "../helperFunctions.js";

import "./List.css";

export default function List({
  onClick,
  categoriesArray,
  setChosenItem,
  chosenItem,
}) {
  async function deleteCategory(e) {
    const listItem = e.target.closest("li").id;

    const modelToDelete = await DataStore.query(Categories, listItem);
    DataStore.delete(modelToDelete);
    const last = await DataStore.query(Categories);
    setChosenItem(last[last.length - 1]);
  }

  return (
    <div className="List">
      <ul className="list-container">
        {categoriesArray.map((category, index) => {
          return (
            <li
              key={index}
              onClick={onClick}
              id={category.id}
              style={{ backgroundColor: category.colour }}
              className={chosenItem === category.id ? "selected-item" : ""}
            >
              {capitaliseFirstLetter(category.name)}
              <button
                onClick={deleteCategory}
                style={{ backgroundColor: category.colour }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
