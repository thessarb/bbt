import React, { Fragment, useState, useRef, useEffect } from "react";
import PATHS from "src/routes/Paths";
import NotificationDropdown from "../Common/NotificationDropdown";
import UserDropdown from "../Common/UserDropdown";
import { Tooltip } from "react-tooltip";
import { makeApiCall } from "src/api/apiRequests";
import API_PATHS from "src/api/apiPaths";
import API_HEADERS from "src/api/apiConfig";
import * as AppConfig from "../../../helpers/AppConfig";
import { useUserdata } from "src/store/UserData";
import SearchFilter from "src/helpers/SearchFilter";
interface HeaderProps {
    sidebarStatus: boolean;
    toggleSidebar: (status: boolean) => void;
}

const ThommasGroupeLogo: string = require("../../../assets/images/logo/Logo.svg").default;

const Header: React.FC<HeaderProps> = ({ sidebarStatus, toggleSidebar }) => {
    const userData = useUserdata((state: any) => state.userData);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(isUserDropdownOpen);
    const [notificationsList, setNotificationsList] = useState<any[]>([]);
    const [pagination, setPagination] = useState<boolean>(false);
    const [status, setStatus] = useState("0");
    const [loading, setLoading] = useState<boolean>(false);

    const [isNotificationDropdownOpen, setNotificationDropdownOpen] = useState(false);

    const userBoxRef = useRef<HTMLDivElement | null>(null);
    const notificationRef = useRef<HTMLDivElement | null>(null);

    const logout = async () => {
        try {
            await makeApiCall<ResponseType>(API_PATHS.logout, "POST", API_HEADERS.authenticated);
            AppConfig.deleteAccessToken();
        } catch (error: any) {
            AppConfig.deleteAccessToken();
        }
    };

    const getNotifications = async (): Promise<void> => {
        setLoading(true);
        const searchParams: any = {
            pagination: pagination,
            status: status,
        };

        const request: any = SearchFilter(searchParams, API_PATHS.notificationList);

        try {
            const response: any = await makeApiCall<ResponseType>(request, "GET", API_HEADERS.authenticated);
            setNotificationsList(response.response);
            setLoading(false);
        } catch (error: any) {}
    };

    useEffect(() => {
        getNotifications();
    }, []);

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
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setNotificationDropdownOpen(false);
            }

            if (userBoxRef.current && !userBoxRef.current.contains(event.target as Node)) {
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
                    <div className="navbar-header__brand">
                        <a href={PATHS.dashboard} className="logo" rel="noreferrer">
                            <img src={ThommasGroupeLogo} alt="ThommasGroupe"/>
                        </a>
                        <div className="navbar-header__hamburger">
                            <div>
                                <button
                                    data-tooltip-id="tooltip"
                                    data-tooltip-content="Menü öffnen"
                                    data-tooltip-place="top"
                                    data-tooltip-offset={5}
                                    className="button button--big button--green"
                                    onClick={handleToggle}
                                >
                                    <i className="button__icon icon-list"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-header__user">
                        <div
                            className="navbar-header__notification"
                            ref={notificationRef}
                            onClick={handleNotificationClick}
                        >
                            <i className="icon-notification"
                               data-tooltip-id="tooltip"
                               data-tooltip-content="Benachrichtigungen öffnen"
                               data-tooltip-place="top"
                               data-tooltip-offset={10}>
                            </i>
                            {notificationsList.length > 0 ? (
                                <span className="navbar-header__notification--notification-badge"></span>
                            ) : (
                                ""
                            )}
                            {isNotificationDropdownOpen && <div className="overlay" />}
                            <NotificationDropdown isOpen={isNotificationDropdownOpen} />
                        </div>
                        <div className="navbar-header__user-data" ref={userBoxRef} onClick={handleUserBoxClick}>
                            <span className="caption__regular navbar-header__user-text">Eingeloggt als:</span>
                            <span className="body-normal__regular">
                                {(userData.firstname ? userData.firstname : "-") +
                                    " " +
                                    (userData.lastname ? userData.lastname : "-")}
                            </span>
                            {isUserDropdownOpen && <div className="overlay" />}
                            <UserDropdown isOpen={isUserDropdownOpen} />
                        </div>
                        <div>
                            <button
                                data-tooltip-id="tooltip"
                                data-tooltip-content="Abmelden"
                                data-tooltip-place="top"
                                data-tooltip-offset={5}
                                className="button button--big button--light-grey"
                                onClick={() => logout()}
                            >
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
