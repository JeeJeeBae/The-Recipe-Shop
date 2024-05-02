import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [newEmail, setNewEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const userId = window.localStorage.getItem("id");
  const [profile, setProfile] = useState("");

  const fetchUserProfile = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_SERVER + "/auth/profile",
        {
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleEditEmail = async () => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_SERVER + "/auth/update-email",
        {
          userId,
          newEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setIsEditing(false);
      setNewEmail("");
      fetchUserProfile();
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Profile</h2>
      {profile ? (
        <div className="card">
          <div className="card-body">
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <h5 className="card-title">Email: {profile.email}</h5>
              {isEditing ? (
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                  <button
                    className="btn btn-success ms-2"
                    onClick={handleEditEmail}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Email
                </button>
              )}
            </div>
            <div className="mt-3">
              <h5 className="card-title">Role: {profile.role}</h5>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default Profile;
