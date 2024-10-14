import React, { Fragment, ReactNode } from "react";
import { SidebarStatus } from "src/store/sidebar/SidebarStatus";
import Header from "../header/Header";
import SidebarContent from "./SidebarContent";
import Footer from "../footer/Footer";
interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const sidebarStatus = SidebarStatus((state: any) => state.sidebar);

  return (
    <>
      <Header />
      {/* <div className={`vertical-menu ${sidebarStatus ? " open" : ""}`}> */}
      <div className="vertical-menu open">
        <div data-simplebar>
          tgegwtgw
          <SidebarContent />
        </div>
      </div>
      <div className="main-content">
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Sidebar;
