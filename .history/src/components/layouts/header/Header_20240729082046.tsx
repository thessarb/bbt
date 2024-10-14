import React, { Fragment } from "react";
import { useUserdata } from "src/store/UserData";
import LanguageDropdown from "../Common/LanguageDropdown";
import NotificationDropdown from "../Common/NotificationDropdown";
import UserDropdown from "../Common/UserDropdown";
import PATHS from "src/routes/Paths";
import { SidebarStatus } from "src/store/sidebar/SidebarStatus";

const KindergartenLogo: string =
  require("../../../assets/images/logo/smck-logo.svg").default;
const KindergartenSmallLogo: string =
  require("../../../assets/images/logo/smck-small-logo.svg").default;

const Header: React.FC = () => {
  const userData = useUserdata((state: any) => state.userData);
  const addSidebarStatus = SidebarStatus((state: any) => state.addSidebar);
  const sidebarStatus = SidebarStatus((state: any) => state.sidebar);

  return (
    <Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <img
                src={KindergartenLogo}
                alt="KindergartenLogo"
                height="40px"
              />
            </div>
          </div>
          <div className="d-flex main-navbar">
            <a
              href={PATHS.homepage}
              className="logo"
              rel="noreferrer"
            >
              <img src={KindergartenLogo} alt="Kindergarten" height="40px" />
            </a>
            <a
              href={PATHS.homepage}
              className="small-logo"
              rel="noreferrer"
            >
              <img
                src={KindergartenSmallLogo}
                alt="Kindergarten"
                height="40px"
              />
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
