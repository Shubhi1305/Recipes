import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import { useState, useEffect } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [recipes, setRecipes] = useState([]); 

  const {
    data: recipe = [],
    loading,
    error,
  } = useFetch("http://localhost:3005/recipes");


  useEffect(() => {
    setRecipes(recipe);
  }, [recipe]);

  const handleSearch = () => {
    setIsSearchActive(true);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setIsSearchActive(false);
  };

  // Function to delete a recipe
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    try {
      const response = await fetch(`http://localhost:3005/recipes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete recipe");
      }

      // Remove the deleted recipe from state
      setRecipes((prevRecipes) => prevRecipes.filter((r) => r._id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!recipes.length) return <p>No recipes found.</p>;

  return (
    <div className="bg-dark pt-4 pb-5">
      <div className="container">
        <div className="d-flex">
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
                <div className="card bg-dark-subtle" style={{ cursor: "pointer" }}>
                  <Link to={`/recipeDetails/${recipe._id}`}>
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
                  </Link>
                  <div className="card-text p-3">
                    <h4>{recipe.name}</h4>
                    <p>
                      <strong>Cuisine: </strong>
                      {recipe.cuisine}
                    </p>
                  </div>

                  <div className="mx-3 mb-3">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handleDelete(recipe._id)}
                    >
                      Delete
                    </button>
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
