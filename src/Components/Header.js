import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="navbar navbar-dark bg-black p-2">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand text-light fw-bold fs-1">
            Recipe Organiser
          </Link>
          <div>
          <Link to="/" className="text-light fw-bold mx-4">
            Recipes
          </Link>
          <Link to="/addRecipe" className="text-light fw-bold">
            Add Recipe
          </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
