import React from "react";
import Home from "../../components/Home";
import Files from "../../components/Files";
import Deleted from "../../components/Deleted";
import Recent from "../../components/Recent";
import Settings from "../../components/Settings";
import Starred from "../../components/Starred";
import Sidebar from "../common/Sidebar";

export const Dashboard = () => {
  const [componentVisibility, setComponentVisibility] = React.useState({
    home: true,
    files: false,
    deleted: false,
    starred: false,
    settings: false,
    recent: false,
  });

  return (
    <div className="dashBoardDiv">
      <div className="sideBarDiv">
        <Sidebar setComponentVisibility={setComponentVisibility} />
        {componentVisibility.home && <Home />}
        {componentVisibility.files && <Files />}
        {componentVisibility.deleted && <Deleted />}
        {componentVisibility.recent && <Recent />}
        {componentVisibility.starred && <Starred />}
        {componentVisibility.settings && <Settings />}
      </div>
    </div>
  );
};
