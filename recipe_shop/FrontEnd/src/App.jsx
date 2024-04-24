import React, { useState } from "react";
import UserContext from "./context/user";
import Login from "./components/Login";
import Registration from "./components/Registration";
import RecipeMain from "./RecipeMain";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [role, setRole] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [userCtx, setUserCtx] = useState({});
  const [activeStaffId, setActiveStaffId] = useState("");

  return (
    <div>
      <UserContext.Provider
        value={{
          accessToken,
          setAccessToken,
          role,
          setRole,
          userCtx,
          showLogin,
          setShowLogin,
          setUserCtx,

          activeStaffId,
          setActiveStaffId,
        }}
      >
        {accessToken.length > 0 && <RecipeMain></RecipeMain>}
        {accessToken.length === 0 && showLogin && (
          <Login setShowLogin={setShowLogin}></Login>
        )}
        {accessToken.length === 0 && !showLogin && (
          <Registration setShowLogin={setShowLogin}></Registration>
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
