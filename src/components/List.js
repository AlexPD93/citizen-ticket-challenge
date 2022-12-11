import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useEffect, useState } from "react";

export default function List({ onClick, setLastCategoryId }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function retrieveCategories() {
      setCategories(await DataStore.query(Categories));
    }
    retrieveCategories();
  }, [categories]);

  async function deleteCategory(e) {
    const listItem = e.target.parentElement.id;

    const modelToDelete = await DataStore.query(Categories, listItem);
    DataStore.delete(modelToDelete);
  }

  return (
    <div className="List">
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index} onClick={onClick} id={category.id}>
              {category.name}
              <img src={category.icon} alt={category.name} />
              <p>{category.colour}</p>
              <button onClick={deleteCategory}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
