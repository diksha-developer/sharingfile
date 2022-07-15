import React from "react";

import Home from "../../components/Home";
import Files from "../../components/Files";
import SharedWithMe from "../../components/SharedWithMe";

import Sidebar from "../common/Sidebar";

export const Dashboard = () => {
  const [componentVisibility, setComponentVisibility] = React.useState({
    home: true,
    files: false,
    shared: false,
  });

  return (
    <div className="dashBoardDiv">
      <div className="sideBarDiv">
        <Sidebar setComponentVisibility={setComponentVisibility} />
        {componentVisibility.home && <Home />}
        {componentVisibility.files && <Files />}
        {componentVisibility.shared && <SharedWithMe />}
      </div>
    </div>
  );
};
