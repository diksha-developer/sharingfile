//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './pages/login/Style.css';
import { Login } from './pages/login/Login';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Dashboardcontent } from './pages/dashboard/Dashboardcontent';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={ <Login /> }
                />
                  <Route
                    path="/dashboard"
                    element={ <Dashboardcontent /> }
                />
                </Routes>
                </BrowserRouter>
    </div>
  );
}

export default App;
