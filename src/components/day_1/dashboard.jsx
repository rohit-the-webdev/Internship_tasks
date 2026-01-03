import React from 'react'
import './style/dashboard.css';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("loggedinUser"));

  if (!user) {
    return <h3 className="no-user">No user logged in</h3>;
  }

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-card">
        <h2>Welcome, {user.Uname} 👋</h2>

        <div className="info">
          <p><span>Age</span> {user.age}</p>
          <p><span>Email</span> {user.email}</p>
          <p><span>Phone</span> {user.phoneNo}</p>
          <p><span>Address</span> {user.address}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;