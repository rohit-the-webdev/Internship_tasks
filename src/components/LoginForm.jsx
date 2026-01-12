import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style/registration.css'

function LoginForm() {
  const currentEmail = localStorage.getItem("loginEmail");
  const [email, setEmail] = useState(currentEmail || "");
  const [password, setPassword] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  if (currentEmail) {
    localStorage.removeItem("loginEmail");
  }

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (!response.ok){
      alert(data.message);
      return;
    } 
    localStorage.setItem(
      "loggedinUser",
      JSON.stringify(data.user)
    );
    navigate("/dashboard");
  } catch (error){
    alert("server error. please fix erros");
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
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Enter password</label>
        </div>

        <button className="btn btn-primary w-100 fw-semibold">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
