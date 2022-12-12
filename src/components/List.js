import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import "./List.css";

export default function List({ onClick, categoriesArray }) {
  async function deleteCategory(e) {
    const listItem = e.target.closest("li").id;

    const modelToDelete = await DataStore.query(Categories, listItem);
    DataStore.delete(modelToDelete);
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
            >
              {category.name}

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
