import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Internship Tasks</h1>
      <p className="subtitle">
        User Registration & Login System
      </p>

      <div className="action-card">
        <Link to="/register" className="btn primary">
          Go to Registration
        </Link>

        <p className="login-text">
          Already registered?{" "}
          <Link to="/login" className="login-link">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
