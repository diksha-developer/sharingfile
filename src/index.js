import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import axios from "axios";

// axios.interceptors.request.use((req) => {
//   console.log(req);
//   req.headers.channnelname = "nothing";
//   return req;
// });

// axios.interceptors.response.use((res) => {
//   console.log(res);
//   return res;
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
