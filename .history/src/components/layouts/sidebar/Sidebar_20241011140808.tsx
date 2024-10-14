import React, { Fragment, ReactNode } from "react";
import { SidebarStatus } from "src/store/sidebar/SidebarStatus";
import Header from "../header/Header";
import SidebarContent from "./SidebarContent";
import Footer from "../footer/Footer";
const ThommasGroupeLogo: string =
  require("../../../assets/images/logo/Logo.svg").default;
interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const sidebarStatus = SidebarStatus((state: any) => state.sidebar);

  return (
    <>
      <Header />
      <div className={`vertical-menu ${sidebarStatus ? " open" : " "}`}>
        <div data-simplebar>
          <div><span className="caption__medium vertical-menu__caption-color">Menu</span></div>
          <div>
        <div className="navbar-header__navbar-brand-box">
          <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
        </div>
      </div>
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
