import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Home from "./Home";
import Nav from "./Components/Nav";
import CreateRecipe from "./Components/CreateRecipe";
import SavedRecipe from "./Components/SavedRecipe";
import ReadRecipe from "./Components/ReadRecipe";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true on successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set isLoggedIn to false on logout
  };

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
