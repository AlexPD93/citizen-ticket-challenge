import { useState } from "react";

import Input from "../components/Input.js";
import Button from "../components/Button.js";

export default function HomePage() {
  const [category, setCategory] = useState("");
  return (
    <div className="Homepage">
      <h1>Citizen Ticket Challenge</h1>
      <Input category={category} setCategory={setCategory} />
      <Button category={category} />
    </div>
  );
}
