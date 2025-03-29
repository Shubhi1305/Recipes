import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import RecipeDetails from "./Pages/RecipeDetails"
import AddRecipes from "./Pages/AddRecipe";


const App = () => {

  return(
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipeDetails/:recipeId" element={<RecipeDetails />} />
        <Route path="/addRecipe" element={<AddRecipes />} />
      </Routes>
    </div>
  </Router>
   
  )
}

export default App;