import React, { Fragment, useState, useRef, useEffect } from "react";
import PATHS from "src/routes/Paths";
interface HeaderProps {
  sidebarStatus: boolean;
  toggleSidebar: (status: boolean) => void;
}

const ThommasGroupeLogo: string =
  require("../../../assets/images/logo/Logo.svg").default;

const Header: React.FC<HeaderProps> = ({ sidebarStatus, toggleSidebar }) => {
  // const userData = useUserdata((state: any) => state.userData);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const userBoxRef = useRef<HTMLDivElement | null>(null);
  const handleToggle = () => {
    toggleSidebar(!sidebarStatus);
  };

  const handleUserBoxClick = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      userBoxRef.current &&
      !userBoxRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

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
            <div className="navbar-header__action-box">
              <div className="navbar-header__notification">
                <i className="icon-notification"></i>
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
                {isDropdownOpen && <div className="overlay" />}
                {isDropdownOpen && (
                  <div className="user-info-dropdown">
                    <div className="user-info-dropdown__header heading__semibold">
                      <span>Benutzer Informationen</span>
                      <button className="button button-gost button--big button--grey">
                        <i className="button__icon icon-x"></i>
                      </button>
                    </div>
                    <div className="user-info-dropdown__body">
                      <p className="user-info-dropdown__user caption__regular">
                        Eingeloggt als:
                      </p>
                      <p className="user-info-dropdown__user-name body-big__medium">
                        Vorname Nachname{" "}
                        <span className="user-info-dropdown__user-email body-normal__regular">
                          vorname.nachname@firma.de
                        </span>
                      </p>
                      <p className="user-info-dropdown__date body-small__regular">
                        Registriert: 10.09.2024
                      </p>
                      <hr />
                      <span
                        className="user-info-dropdown__change-password-link body-normal__regular"
                      >
                        Passwort ändern
                      </span>
                    </div>
                  </div>
                )}
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
