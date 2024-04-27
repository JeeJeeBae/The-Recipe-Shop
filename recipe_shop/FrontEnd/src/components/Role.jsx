import React, { useContext, useState } from "react";
import UserContext from "../context/user";

const Role = (props) => {
  const userCtx = useContext(UserContext);
  const [isUserDropDown, setIsUserDropDown] = useState(false);

  const toggleUserDropDown = () => {
    setIsUserDropDown(!isUserDropDown);
  };

  const signOut = () => {
    userCtx.setAccessToken("");
    // logic to reset any states to default if necessary
    window.location.reload();
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.userRole}>
          <button
            onClick={toggleUserDropDown}
            className={`${styles.role} ${isUserDropDown ? styles.active : ""}`}
          >
            {userCtx.activeStaffId}
          </button>
        </div>

        {isUserDropDown && (
          <div className={styles.dropdownContent}>
            <button onClick={signOut} className={styles.dropdownItem}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Role;
