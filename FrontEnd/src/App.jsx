import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Home from "./Home";
import Nav from "./Components/Nav";
import CreateRecipe from "./Components/CreateRecipe";
import SavedRecipe from "./Components/SavedRecipe";
import ReadRecipe from "./Components/ReadRecipe";
import Profile from "./Components/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn) {
      setIsLoggedIn(true);
    }
  });

  return (
    <BrowserRouter>
      {isLoggedIn && <Nav onLogout={handleLogout} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<Registration />} />
        <Route path="/auth/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/recipe/create-recipe" element={<CreateRecipe />} />
        <Route path="/recipe/saved-recipe" element={<SavedRecipe />} />
        <Route path="/read-recipe/:id" element={<ReadRecipe />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
