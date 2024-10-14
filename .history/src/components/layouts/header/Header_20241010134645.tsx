import React, { Fragment } from "react";

const ThommasGroupeLogo: string =
  require("../../../assets/images/logo/Group.png").default;
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
            <div className="navbar-brand-box">
              <img
                src={ThommasGroupeLogo}
                alt="ThommasGroupe"
                height="40px"
              />
            </div>
          </div>
          <div className="d-flex main-navbar">
            <a
              // href={PATHS.homepage}
              className="logo"
              rel="noreferrer"
            >
              <img src={ThommasGroupeLogo} alt="ThommasGroupe" height="40px" />
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
            <div className="d-flex align-items-center ms-auto gap-3">
              <LanguageDropdown />
              <NotificationDropdown />
              <UserDropdown userData={userData} />
              <button
                className="button-transparent px-2 menu-hamburger"
                onClick={() => addSidebarStatus(!sidebarStatus)}
              >
                <i className="icon bars-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
