import recipes from "./RecipeData";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchActive, setIsSearchActive] = useState(false);

    const {
        data: recipe = [],
        loading,
        error,
      } = useFetch("http://localhost:3005/recipes");

    const handleSearch = () => {
        setIsSearchActive(true)
    }

    const handleClearSearch = () => {
        setSearchQuery("")
        setIsSearchActive(false)
    }

      // Filter recipes based on name
    const filteredRecipes = recipe.filter((recipe) => 
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
)

  // function to fetch data

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!recipe) return <p>No recipes found.</p>;

  return (

    <div className="bg-dark pt-4 pb-5">
    <div className="container">

    <div className="d-flex ">
            <input
              className="m-3 form-control"
              type="search"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {!isSearchActive ? (
              <button
                className="btn btn-outline-success m-3"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            ) : (
              <button
                className="btn btn-outline-success m-3"
                type="button"
                onClick={handleClearSearch}
              >
                Back
              </button>
            )}
          </div>

   
        <div className="border rounded-4 p-4 bg-black">
          <h2 className="text-light">All Recipes</h2>

          <div className="row">
            {filteredRecipes.map((recipe) => (
              <div key={recipe._id} className="col-12 col-md-3 my-4">
                {/* Img on top card as link for details */}
                <div
                  className="card bg-dark-subtle"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={recipe.imgUrl}
                    alt={recipe.name}
                    className="card-img-top img-fluid"
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-text p-3">
                    <h4>{recipe.name}</h4>
                    <p>
                      <strong>Cuisine: </strong>
                      {recipe.cuisine}
                    </p>
                  </div>

                  <div className="mx-3 mb-3">
                    <Link
                      to={`/recipeDetails/${recipe._id}`}
                      className="btn btn-outline-dark"
                      onClick={() => console.log("Navigating to:", `/recipeDetails/${recipe._id}`)}
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
