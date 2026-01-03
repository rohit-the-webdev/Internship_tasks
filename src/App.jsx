import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RegistrationForm from "./components/day_1/RegistrationForm";
import LoginForm from "./components/day_1/LoginForm";
import Dashboard from "./components/day_1/dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
