import React from "react";
import "./sidebar.css";
import "./w3style.min.css";
import { Link } from "@tanstack/react-location";

const SideBar = ({ setComponentVisibility }) => {
  let buttonClasses = "w3-button w3-teal w3-xlarge openSideBar";
  return (
    <div className="mainDiv">
      <div
        className="w3-sidebar w3-bar-block w3-border-right"
        style={{ display: "block" }}
        id="mySidebar"
      >
        <button
          id="closebtn"
          className={buttonClasses}
          onClick={() => {
            document.getElementById("mySidebar").style.display = "none";
          }}
        >
          ☰
        </button>

        <div className="sidebarButtonDiv">
          <Link
            to="/dashboard/home"
            className="sidebarBtn firstbtn"
            onClick={() => {
              setComponentVisibility({
                home: true,
                files: false,
                shared: false,
              });
            }}
          >
            Home
          </Link>
          <Link
            to="/dashboard/files"
            className="sidebarBtn"
            onClick={() => {
              setComponentVisibility({
                home: false,
                files: true,
                shared: false,
              });
            }}
          >
            Files
          </Link>
          <Link
            to="/dashboard/sharedwithme"
            className="sidebarBtn"
            onClick={() => {
              setComponentVisibility({
                home: false,
                files: false,
                shared: true,
              });
            }}
          >
            Shared with me
          </Link>
        </div>
      </div>

      <div className="w3-teal">
        <button
          className={buttonClasses}
          onClick={() => {
            document.getElementById("mySidebar").style.display = "block";
          }}
        >
          ☰
        </button>
      </div>
    </div>
  );
};
export default SideBar;
