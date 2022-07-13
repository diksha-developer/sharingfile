import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import {
  AiOutlineHome,
  AiOutlineFolderAdd,
  AiOutlineUserAdd,
} from "react-icons/ai";

const SideBar = ({ setComponentVisibility }) => {
  return (
    <div className="sideBar">
      <Button
        className="sidebarBtn"
        variant="outline-primary"
        onClick={() => {
          setComponentVisibility({
            home: true,
            files: false,
            deleted: false,
            starred: false,
            settings: false,
            recent: false,
          });
        }}
      >
        <AiOutlineHome />
        <br />
        Home
      </Button>
      <Button
        className="sidebarBtn"
        variant="outline-primary"
        onClick={() => {
          setComponentVisibility({
            home: false,
            files: true,
            deleted: false,
            starred: false,
            settings: false,
            recent: false,
          });
        }}
      >
        <AiOutlineFolderAdd />
        <br />
        Files
      </Button>

      <Button
        className="sidebarBtn"
        variant="outline-primary"
        onClick={() => {
          setComponentVisibility({
            home: false,
            files: false,
            deleted: false,
            starred: false,
            settings: false,
            recent: true,
          });
        }}
      >
        <AiOutlineUserAdd />
        <br />
        Shared with me
      </Button>
    </div>
  );
};
export default SideBar;
