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
            <div className="__navbar-brand-box">
              <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
            </div>
          </div>
          <div className="d-flex __main-navbar">
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
            <div className="d-flex justify-content-end">
              <div> 
                <i className="icon-notification" />
              </div>
              <div>
                dggdgfgd gdfdgdgdg
              </div>
              <div>
                
              </div>
              {/* <NotificationDropdown /> */}
               <button
                className="button-transparent px-2 menu-hamburger"
                // onClick={() => addSidebarStatus(!sidebarStatus)}
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
