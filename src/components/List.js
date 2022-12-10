import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useEffect, useState } from "react";

export default function List() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function retrieveCategories() {
      setCategories(await DataStore.query(Categories));
      return;
    }
    retrieveCategories();
  });

  return (
    <div className="List">
      <ul>
        {categories.map((category, index) => {
          return <li key={index}>{category.name}</li>;
        })}
      </ul>
    </div>
  );
}
