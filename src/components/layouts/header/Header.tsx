import React, { Fragment, useState, useRef, useEffect } from "react";
import PATHS from "src/routes/Paths";
import NotificationDropdown from "../Common/NotificationDropdown";
import UserDropdown from "../Common/UserDropdown";

import { makeApiCall } from "src/api/apiRequests";
import API_PATHS from "src/api/apiPaths";
import API_HEADERS from "src/api/apiConfig";
import * as AppConfig from "../../../helpers/AppConfig";
interface HeaderProps {
  sidebarStatus: boolean;
  toggleSidebar: (status: boolean) => void;
}

const ThommasGroupeLogo: string =
  require("../../../assets/images/logo/Logo.svg").default;

const Header: React.FC<HeaderProps> = ({ sidebarStatus, toggleSidebar }) => {
  // const userData = useUserdata((state: any) => state.userData);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(isUserDropdownOpen);

  const [isNotificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);

  const userBoxRef = useRef<HTMLDivElement | null>(null);
  const notificationRef = useRef<HTMLDivElement | null>(null);

  const logout = async () => {
    try {
      await makeApiCall<ResponseType>(
        API_PATHS.logout,
        "POST",
        API_HEADERS.authenticated
      );
      AppConfig.deleteAccessToken();
    } catch (error: any) {
      AppConfig.deleteAccessToken();
    }
  };

  const handleToggle = () => {
    toggleSidebar(!sidebarStatus);
  };

  const handleUserBoxClick = () => {
    setUserDropdownOpen((prevState) => !prevState);
  };

  const handleNotificationClick = () => {
    setNotificationDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (!isNotificationDropdownOpen) {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 3000);
    } else {
      setShouldRender(true);
    }

    if (isNotificationDropdownOpen || isUserDropdownOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setNotificationDropdownOpen(false);
      }

      if (
        userBoxRef.current &&
        !userBoxRef.current.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false);
      }
    };

    if (isNotificationDropdownOpen || isUserDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeoutId);
    };
  }, [isNotificationDropdownOpen, isUserDropdownOpen]);

  return (
    <Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div>
            <div className="navbar-header__navbar-brand-box navbar-header__logo">
              <a href={PATHS.dashboard} className="logo" rel="noreferrer">
                <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
              </a>
            </div>
          </div>
          <div className="navbar-header__hamburger">
            <div>
              <button
                className="button button--big button--green"
                onClick={handleToggle}
              >
                <i className="button__icon icon-list"></i>
              </button>
            </div>
          </div>
          <div className="navbar-header__main-navbar">
            <div
              className="navbar-header__notification"
              ref={notificationRef}
              onClick={handleNotificationClick}
            >
              <i className="icon-notification"></i>
              {isNotificationDropdownOpen && <div className="overlay" />}
              <NotificationDropdown isOpen={isNotificationDropdownOpen} />
            </div>
            <div
              className="navbar-header__user-box"
              ref={userBoxRef}
              onClick={handleUserBoxClick}
            >
              <span className="caption__regular navbar-header__user-text">
                Eingeloggt als:
              </span>
              <span className="body-normal__regular">Vorname Nachname</span>
              {isUserDropdownOpen && <div className="overlay" />}
              <UserDropdown isOpen={isUserDropdownOpen} />
            </div>
            <div>
              <button className="button button--big button--light-grey" onClick={() => logout()}>
                <i className="button__icon icon-sign-out"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
