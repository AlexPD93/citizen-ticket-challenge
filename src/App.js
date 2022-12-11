import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./Pages/Homepage";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/category-page/:id" element={<CategoryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
