import React from "react";
import "./sidebar.css";
import "./w3style.min.css";
const SideBar = ({ setComponentVisibility }) => {
  return (
    <div className="mainDiv">
      <div
        className="w3-sidebar w3-bar-block w3-border-right"
        style={{ display: "block" }}
        id="mySidebar"
      >
        <div className="sidebarButtonDiv">
          <button
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
          </button>
          <button
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
          </button>
          <button
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
          </button>
        </div>
      </div>

      <div className="w3-teal"></div>
    </div>
  );
};
export default SideBar;
