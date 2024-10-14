import React, { Fragment } from "react";
import { SidebarStatus } from "src/store/sidebar/SidebarStatus";

interface HeaderProps {
  sidebarStatus: boolean;
  toggleSidebar: (status: boolean) => void;
}

const ThommasGroupeLogo: string =
  require("../../../assets/images/logo/Logo.svg").default;

const Header: React.FC<HeaderProps> = ({ sidebarStatus, toggleSidebar }) => {
  // const userData = useUserdata((state: any) => state.userData);

  const handleToggle = () => {
    toggleSidebar(!sidebarStatus); 
  };

  return (
    <Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-header__navbar-brand-box">
              <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
            </div>
          </div>
          <div>
            <div>
              <button
                className="button button--big button--green"
                onClick={handleToggle}
              >
                <i className="button__icon icon-list"></i>
              </button>
            </div>
          </div>
          <div className="d-flex navbar-header__main-navbar">
            
            <a
              // href={PATHS.homepage}
              className="small-logo"
              rel="noreferrer"
            >
              {/* <img
                src={KindergartenSmallLogo}
                alt="Kindergarten"
                height="40px"
              /> */}
            </a>
            <div className="navbar-header__action-box">
              <div className="navbar-header-notification">
                <button className="button button-gost button--big button--grey">
                  <i className="button__icon icon-notification"></i>
                </button>
              </div>
              <div className="navbar-header__user-box">
                <span className="caption__regular navbar-header__user-text">
                  Eingeloggt als:
                </span>
                <span className="body-normal__regular">Vorname Nachname</span>
              </div>
              <div>
                <button className="button button--big button--light-grey">
                  <i className="button__icon icon-sign-out"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
