import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../models";

import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import SwitchMode from "../components/SwitchMode.js";

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

  return (
    <div className="CategoryPage">
      <SwitchMode theme={theme} setTheme={setTheme} />
      <h1>Citizen Ticket Challenge</h1>
      <Link to="/">Back</Link>
      <div style={{ backgroundColor: selectedCategory.colour }}>
        <p>{selectedCategory.name}</p>
        <img src={selectedCategory.icon} alt={selectedCategory.name} />
      </div>
    </div>
  );
}
