import React from "react";
import { Content } from "../common/Content";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";

export const Dashboardcontent = () => {
  return (
    <div className="contentcls">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
