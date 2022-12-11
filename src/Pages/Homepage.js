import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../components/Input.js";
import List from "../components/List.js";

export default function HomePage() {
  const [category, setCategory] = useState("");

  return (
    <div className="Homepage">
      <h1>Citizen Ticket Challenge</h1>
      <h2>Create a new category</h2>
      <Input category={category} setCategory={setCategory} />
      <List />
      <Link to="/category-page">Next</Link>
    </div>
  );
}
