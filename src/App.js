import "./App.css";
import "./pages/signUp/style.css";
//import "bootstap/dist/css/bootstrap.min.css";
import SignUp from "./pages/signUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
