import React from "react";

import Home from "../../components/Home";
import Files from "../../components/Files";
import SharedWithMe from "../../components/SharedWithMe";
import Sidebar from "../common/Sidebar";
import { Header } from "../common/Header";

export const Dashboard = () => {
  const [componentVisibility, setComponentVisibility] = React.useState({
    home: true,
    files: false,
    shared: false,
  });

  return (
    <div className="dashBoardDiv">
      <div className="sideBarDiv">
        <Header />
        <Sidebar setComponentVisibility={setComponentVisibility} />
      </div>
      <div className="DashBoardContentSection">
        {componentVisibility.home && <Home />}
        {componentVisibility.files && <Files />}
        {componentVisibility.shared && <SharedWithMe />}
      </div>
    </div>
  );
};
