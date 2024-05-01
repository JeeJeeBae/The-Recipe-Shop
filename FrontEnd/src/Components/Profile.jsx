import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth/profile");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Profile</h2>
      {user ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Email: {user.email}</h5>
            <p className="card-text">Role: {user.role}</p>
          </div>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default Profile;
