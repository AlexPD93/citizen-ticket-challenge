import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useEffect, useState } from "react";

export default function List() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function retrieveCategories() {
      setCategories(await DataStore.query(Categories));
    }
    retrieveCategories();
  });

  async function deleteCategory(e) {
    const listItem = e.target.id;

    const modelToDelete = await DataStore.query(Categories, listItem);
    DataStore.delete(modelToDelete);
  }

  return (
    <div className="List">
      <ul>
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <li>{category.name}</li>
              <img src={category.icon} alt="" />
              <p>{category.colour}</p>
              <button id={category.id} onClick={deleteCategory}>
                X
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
