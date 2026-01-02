import React from 'react'

function dashboard() {
    const user = JSON.parse(localStorage.getItem("loggedinUser"));

    if(!user){
        return <h3>no user logged in</h3>;
    }
  return (
    <div className="container mt-5">
      <h2>Welcome, {user.Uname} 👋</h2>

      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phoneNo}</p>
      <p><strong>Address:</strong> {user.address}</p>
    </div>
  )
}

export default dashboard
