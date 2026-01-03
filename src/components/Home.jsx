import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Internship Tasks</h1>

      <div className="task-card">
        <h3>Day 1</h3>
        <p>Registration & Login using LocalStorage</p>

        <div className="btn-group">
          <Link to="/register" className="btn">Register</Link>
          <Link to="/login" className="btn outline">Login</Link>
        </div>
      </div>

      {/* Later */}
      <div className="task-card disabled">
        <h3>Day 2</h3>
        <p>Coming soon 🚧</p>
      </div>
    </div>
  );
}

export default Home;
