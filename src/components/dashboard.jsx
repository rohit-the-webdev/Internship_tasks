import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("loggedinUser"));
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [editableUser, setEditableUser] = useState(user);

  const [showPassField, setshowPassField] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmCheck, setConfirmCheck] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const user = localStorage.getItem("loggedinUser");
    if (!user) {
      navigate("/login");
    }
  }, []);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedinUser");
    alert("log out successful");
    navigate("/login");
  };
  const handleUpdateProfile = async () => {
    try {
      const response = await fetch(`${API_URL}/api/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: editableUser.email,
          Uname: editableUser.Uname,
          age: editableUser.age,
          phoneNo: editableUser.phoneNo,
          address: editableUser.address,
          pincode: editableUser.pincode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      // update local session user
      localStorage.setItem("loggedinUser", JSON.stringify(data.user));

      setEditMode(false);
      alert("Profile updated successfully");
    } catch (error) {
      alert("Server error while updating profile");
    }
  };

  const handlePasswordChange = async () => {
    if (!confirmCheck) {
      alert("Please confirm password change");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
       `${API_URL}/api/user/change-password`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            newPassword: newPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Password updated successfully");

      // reset modal state
      setShowModal(false);
      setNewPassword("");
      setConfirmPassword("");
      setConfirmCheck(false);
    } catch (error) {
      alert("Server error while updating password");
    }
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-card user-info">
        <h2>Welcome, {user.Uname} 👋</h2>

        <div className="info">
          <p>
            <span>Age</span> {user.age}
          </p>
          <p>
            <span>Email</span> {user.email}
          </p>
          <p>
            <span>Phone</span> {user.phoneNo}
          </p>
          <p>
            <span>Address</span> {user.address}
          </p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        {!editMode && (
          <button className="logout-btn" onClick={() => setEditMode(true)}>
            Update Profile
          </button>
        )}
        {!editMode && (
          <button
            className="change-pass-btn"
            onClick={() => setshowPassField(true)}
          >
            Change Password
          </button>
        )}
        {showPassField && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h3>Change Password</h3>

              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={confirmCheck}
                  onChange={() => setConfirmCheck(!confirmCheck)}
                />
                I confirm to change my password
              </label>

              <div className="modal-actions">
                <button type="button" onClick={handlePasswordChange}>Update Password</button>
                <button onClick={() => setshowPassField(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {editMode && (
          <div className="edit-section">
            <div className="edit-group">
              <label>Name</label>
              <input
                value={editableUser.Uname}
                onChange={(e) =>
                  setEditableUser({ ...editableUser, Uname: e.target.value })
                }
              />
            </div>

            <div className="edit-group">
              <label>Age</label>
              <input
                value={editableUser.age}
                onChange={(e) =>
                  setEditableUser({ ...editableUser, age: e.target.value })
                }
              />
            </div>

            <div className="edit-group">
              <label>Phone</label>
              <input
                value={editableUser.phoneNo}
                onChange={(e) =>
                  setEditableUser({ ...editableUser, phoneNo: e.target.value })
                }
              />
            </div>

            <div className="edit-group">
              <label>Address</label>
              <textarea
                value={editableUser.address}
                onChange={(e) =>
                  setEditableUser({ ...editableUser, address: e.target.value })
                }
              />
            </div>

            <button className="save-btn" onClick={handleUpdateProfile}>
              Update the Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
