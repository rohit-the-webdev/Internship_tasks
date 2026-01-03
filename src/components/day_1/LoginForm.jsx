import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const currentEmail = localStorage.getItem("loginEmail");
  const [email, setEmail] = useState(currentEmail || "");
  const navigate = useNavigate();

  if (currentEmail) {
    localStorage.removeItem("loginEmail");
  }

  const handlelogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("FormData")) || [];

    const loggedUser = users.find(
        (user)=>user.email===email
    );

    if(loggedUser){
        localStorage.setItem(
            "loggedinUser", JSON.stringify(loggedUser)
        );

        console.log("login successful");

        navigate("/dashboard");
    }
    else{
        alert("User not found");
        
    }

    // const emailcheck = users.some((user) => user.email === email);

    // if (emailcheck) {
    //   console.log("email found");
    // } else {
    //   console.log("email not found");
    // }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <form onSubmit={handlelogin} className="bg-white p-4 rounded shadow-sm">
        <h4 className="text-center mb-4 fw-bold">Login</h4>

        <div className="ipgroup mb-3">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Enter Email</label>
        </div>

        <div className="ipgroup mb-3">
          <input type="text" className="form-control" required />
          <label>Enter password</label>
        </div>

        <button className="btn btn-primary w-100 fw-semibold">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
