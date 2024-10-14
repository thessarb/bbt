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
  const addSidebarStatus = SidebarStatus((state: any) => state.addSidebar); // Get the toggle function

  return (
    <>
      <Header />
      <div
        className={`vertical-menu ${
          sidebarStatus ? " vertical-menu__open" : "sidebar"
        }`}
      >
        <div data-simplebar>
          <div className="vertical-menu__logo">
            <div className="navbar-header__navbar-brand-box">
              <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
            </div>
            <div>
              <button
                className="button button-secondary button--big button--light-grey"
                onClick={() => addSidebarStatus(false)}
              >
                <i className="button__icon icon-x"></i>
              </button>
            </div>
          </div>
          <div className="caption__medium vertical-menu__caption-color">
            <span>Menu</span>
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
