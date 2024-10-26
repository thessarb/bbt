import React, { Fragment, ReactNode, useRef, useEffect } from "react";
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
  const addSidebarStatus = SidebarStatus((state: any) => state.addSidebar);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      addSidebarStatus(false);
    }
  };

  useEffect(() => {
    if (sidebarStatus) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    if (sidebarStatus) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarStatus]);

  return (
    <Fragment>
      <Header sidebarStatus={sidebarStatus} toggleSidebar={addSidebarStatus} />
      {sidebarStatus && <div className="overlay" />}
      <div
        ref={sidebarRef}
        className={`vertical-menu ${sidebarStatus ? "vertical-menu__open" : "vertical-menu__closed"}`}
      >
        <div data-simplebar>
          <div className="vertical-menu__logo">
            <div className="navbar-header__navbar-brand-box">
              <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
            </div>
            <div>
              <button
                className="button button-secondary button--big button--light-grey"
                onClick={() => addSidebarStatus(!sidebarStatus)}
              >
                <i className="button__icon icon-x"></i>
              </button>
            </div>
          </div>
          <div className="caption__medium vertical-menu__caption-color">
            <span>Menu</span>
            {/* <span>Adminbereich</span> */}
          </div>
          <SidebarContent />
        </div>
      </div>
      <div className="main-content">
        <div className="page-content">{children}</div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Sidebar;
