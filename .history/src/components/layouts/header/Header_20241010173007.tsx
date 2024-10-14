import React, { Fragment } from "react";

const ThommasGroupeLogo: string =
  require("../../../assets/images/logo/Logo.svg").default;
// const ThommasGroupeSmallLogo: string =
//   require("../../../assets/images/logo/smck-small-logo.svg").default;

const Header: React.FC = () => {
  // const userData = useUserdata((state: any) => state.userData);
  // const addSidebarStatus = SidebarStatus((state: any) => state.addSidebar);
  // const sidebarStatus = SidebarStatus((state: any) => state.sidebar);

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
              <button className="button button-gost button--big button--grey">
                <i className="button__icon icon-squares-four"></i>
              </button>
            </div>
          </div>
          <div className="d-flex navbar-header__main-navbar">
            <a
              // href={PATHS.homepage}
              className="logo"
              rel="noreferrer"
            >
              <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
            </a>
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
              {/* <NotificationDropdown /> */}
              {/* <button
                className="button-transparent px-2 menu-hamburger"
                // onClick={() => addSidebarStatus(!sidebarStatus)}
              >
                <i className="icon bars-icon"></i>
              </button> */}
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
