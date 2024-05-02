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
      // console.log(response);
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    // const fetchUserProfile = async () => {
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:3001/auth/profile",
    //       {
    //         userId,
    //       }
    //     );
    //     // console.log(response);
    //     setProfile(response.data);
    //   } catch (error) {
    //     console.error("Error fetching user profile:", error);
    //   }
    // };

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
      //   setUser({ ...profile, email: newEmail });
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
            <h5 className="card-title">Email: {profile.email}</h5>
            {isEditing ? (
              <div className="mb-3">
                <label htmlFor="newEmail" className="form-label">
                  New Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="newEmail"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
              >
                Edit Email
              </button>
            )}
            {isEditing && (
              <button className="btn btn-success" onClick={handleEditEmail}>
                Save
              </button>
            )}

            <h5 className="card-title">Role: {profile.role}</h5>
          </div>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default Profile;
