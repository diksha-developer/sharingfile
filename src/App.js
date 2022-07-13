import "./App.css";
import "./pages/signUp/style.css";
//import "bootstap/dist/css/bootstrap.min.css";
import React from "react";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import SignUp from "./pages/signUp/SignUp";
import { Dashboard } from "./pages/dashboard/Dashboard";
const location = new ReactLocation();

function App() {
  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <SignUp /> },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ]}
    >
      <Outlet />
    </Router>
  );
}

export default App;
