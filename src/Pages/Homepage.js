import { useState } from "react";

import Input from "../components/Input.js";
import List from "../components/List.js";

export default function HomePage() {
  const [category, setCategory] = useState("");
  return (
    <div className="Homepage">
      <h1>Citizen Ticket Challenge</h1>
      <Input category={category} setCategory={setCategory} />
      <List />
    </div>
  );
}
