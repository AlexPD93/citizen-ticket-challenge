import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Icons
import LightBulb from "./Icons/lightbulb.png";
import Entertainment from "./Icons/entertainment.png";
import Home from "./Icons/home.png";
import Money from "./Icons/money.png";

//Pages
import HomePage from "./Pages/Homepage";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/category-page" element={<CategoryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
