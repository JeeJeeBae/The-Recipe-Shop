import React, { useState, useEffect } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
      fetch(`https://api.spoonacular.com/recipes/complexSearch=${searchTerm}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch recipes");
          }
          return response.json();
        })
        .then((data) => {
          setRecipes(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.elements.search.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input name="search" type="text" placeholder="Search for recipes..." />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {recipes.length > 0 && (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
