import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import SwitchMode from "../components/SwitchMode.js";
import capitaliseFirstLetter from "../helperFunctions.js";

import "./CategoryPage.css";

export default function CategoryPage({ theme, setTheme }) {
  const [selectedCategory, setSelectedCategory] = useState({});
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    async function fetchCategory() {
      await DataStore.query(Categories, id);
      setSelectedCategory(await DataStore.query(Categories, id));
    }
    fetchCategory();
  }, [id]);
  const categoryName = capitaliseFirstLetter(selectedCategory.name);

  return (
    <div className="CategoryPage">
      <SwitchMode theme={theme} setTheme={setTheme} />
      {theme === "light" ? (
        <h1 style={{ color: "black" }}>Citizen Ticket Challenge</h1>
      ) : (
        <h1 style={{ color: "white" }}>Citizen Ticket Challenge</h1>
      )}
      <div className="back-link-container">
        <Link className="back-link" to="/">
          Back
        </Link>
      </div>
      <div
        className="category-container"
        style={{ backgroundColor: selectedCategory.colour }}
      >
        <p>{categoryName}</p>
        <img src={selectedCategory.icon} alt={selectedCategory.name} />
      </div>
    </div>
  );
}
