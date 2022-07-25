import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages/signUp/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SignUp from "./pages/signUp/SignUp";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Dashboardcontent } from "./pages/dashboard/Dashboardcontent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../src/pages/login/Login";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard2" element={<Dashboardcontent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
