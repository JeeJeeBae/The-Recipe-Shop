import React, { useState } from "react";
import UserContext from "./context/user";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./Home";
// import { BrowserRouter } from "react-router-dom";

function App() {
  const [accessToken, setAccessToken] = useState("");
  // const [role, setRole] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const [userCtx, setUserCtx] = useState({});

  return (
    <div>
      <UserContext.Provider
        value={{
          accessToken,
          setAccessToken,
          // role,
          // setRole,
          userCtx,
          showLogin,
          setShowLogin,
          setUserCtx,
        }}
      >
        {accessToken && <Home></Home>}
        {String(accessToken).length === 0 && showLogin && (
          <Login setShowLogin={setShowLogin}></Login>
        )}
        {String(accessToken).length === 0 && !showLogin && (
          <Registration setShowLogin={setShowLogin}></Registration>
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
