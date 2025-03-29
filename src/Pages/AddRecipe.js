import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const AddRecipes = () => {
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    imgUrl: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    ingredients: "",
    instructions: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) {
        throw new Error("Failed to add recipe");
      }

      alert("Recipe added successfully!");
      navigate("/"); //Back to home page
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-dark pt-4 text-light">
      <div className="container border bg-black p-4">
        <h1>Add Recipe</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="nameInput">Name: </label>
          <input
            id="nameInput"
            type="text"
            className="form-control"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <label htmlFor="cuisineInput">Cuisine: </label>
          <input
            id="cuisineInput"
            type="text"
            className="form-control"
            name="cuisine"
            value={recipe.cuisine}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="imgUrlInput">Image URL: </label>
          <input
            id="imgUrlInput"
            type="text"
            className="form-control"
            name="imgUrl"
            value={recipe.imgUrl}
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <label htmlFor="prepTimeInput">Prep Time: </label>
          <input
            id="prepTimeInput"
            type="text"
            className="form-control"
            name="prepTime"
            value={recipe.prepTime}
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <label htmlFor="cookTimeInput">Cooking Time: </label>
          <input
            id="cookTimeInput"
            type="text"
            className="form-control"
            name="cookTime"
            value={recipe.cookTime}
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <label htmlFor="servingsInput">Servings: </label>
          <input
            id="servingsInput"
            type="text"
            className="form-control"
            name="servings"
            value={recipe.servings}
            onChange={handleChange}
            required
          />

          <br />
          <br />

          <label htmlFor="ingredientsInput">Ingredients:</label>
          <br />
          <textarea 
          id="ingredientsInput" 
          className="form-control"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          required
          ></textarea>
          <br />
          <br />

          <label htmlFor="instructionsInput">Instructions:</label>
          <br />
          <textarea 
          id= "instructionsInput"
          className="form-control"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          required
          ></textarea>
          <br />
          <br />
        

        <button type="submit" className="btn btn-success">Submit</button>

        </form>
      </div>
    </div>
  );
};

export default AddRecipes;
