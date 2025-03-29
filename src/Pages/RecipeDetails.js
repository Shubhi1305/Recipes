import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import recipes from "./RecipeData";

const RecipeDetails = () => {
    const navigate = useNavigate()
    const { recipeId }  = useParams()
    const { data: recipe, loading, error } = useFetch(
        `http://localhost:3005/recipes/${recipeId}`
      );
      console.log("Recipe ID from URL:", recipeId);

    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;
      if (!recipe) return <p>Recipe not found</p>;
      console.log("Recipe Data:", recipe);

    
    return (
        <div className =" bg-dark py-5">
            <div className="container text-light">
                <h1 className= "text-light">{recipe.name}</h1>
                <div className="card bg-black text-light mb-3">
                    <div className="row g-0">
                        
                        <div className="col-md-4">
                            <img src={recipe.imgUrl} 
                            className="img-fluid"
                            style={{
                              width: "400px",
                              height: "600px",
                              objectFit: "cover",
                            }}
                            alt={recipe.name}
                            />
                        </div>

                        <div className="col-md-8 p-4">
                            <div className="card-body">
                                <h3 className="card-text pb-3">Cuisine: {recipe.cuisine}</h3>
                                <h5 className="card-text pb-3">Preparation Time: {recipe.prepTime}</h5>
                                <h5 className="card-text pb-3">Cooking Time: {recipe.cookTime}</h5>
                                <h5 className="card-text pb-3">Servings: {recipe.servings}</h5>
                                
                                <h4 className="card-text pb-2">Ingredients: </h4>
                                <p className="card-text pb-3 fs-5">{recipe.ingredients}</p>
                                <h4 className="card-text pb-2">Instructions: </h4>
                                <ol>
                                {recipe.instructions?.map((step, index) => (
                                <li key={index} className="fs-5">{step}</li>
                                ))}
                                </ol>                                

                            </div>
                        </div>
                    </div>
                </div>
            

        <div className="text-center mt-4 d-flex">
          <button className="btn btn-outline-success" onClick={() => navigate(-1)}>
            Back to Recipes
          </button>
          </div>


        </div>
        </div>
    )

  };
  
  export default RecipeDetails; 
  