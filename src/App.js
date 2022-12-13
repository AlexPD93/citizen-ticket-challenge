import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
//Pages
import HomePage from "./Pages/Homepage";
import CategoryPage from "./Pages/CategoryPage";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  console.log(theme);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage theme={theme} setTheme={setTheme} />}
          ></Route>
          <Route
            path="/category-page/:id"
            element={<CategoryPage theme={theme} setTheme={setTheme} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
