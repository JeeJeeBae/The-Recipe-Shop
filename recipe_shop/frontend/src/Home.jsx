import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
// import Recipe from "./Pages/Recipe";
import Search from "./Pages/Search";
import Favourites from "./Pages/Favourites";
import Create from "./Pages/Create";

function Home() {
  // const [savedRecipe, setSavedRecipe] = useState(null);
  const [searchRecipe, setSearchRecipe] = useState(null);
  const [favourites, setFavourites] = useState(null);
  const [createRecipe, setCreateRecipe] = useState(null);

  // const handleSaveRecipe = (recipe) => {
  //   setSavedRecipe(recipe);
  // };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="search" element={<Search searchRecipe={searchRecipe} />} />
        <Route
          path="favourites"
          element={<Favourites facvourites={favourites} />}
        />
        <Route path="create" element={<Create createRecipe={createRecipe} />} />
      </Routes>
    </>
  );
}

export default Home;
