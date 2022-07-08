import "./App.css";
import "./components/signUp/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/signUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
