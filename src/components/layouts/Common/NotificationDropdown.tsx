import React, { Fragment, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { makeApiCall } from "src/api/apiRequests";
import PATHS from "src/routes/Paths";
import API_HEADERS from "src/api/apiConfig";
import API_PATHS from "src/api/apiPaths";
import SearchFilter from "src/helpers/SearchFilter";
import Loading from "src/helpers/Loading";
import moment from "moment";
interface Notification {
    id: number;
    text: string;
    time: string;
}
interface NotificationDropdownProps {
    isOpen: boolean;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ isOpen }) => {
    const navigate = useNavigate();
    const [toggleHandle, setToggleHandle] = useState<boolean>(false);
    const [hasOpened, setHasOpened] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [notificationsList, setNotificationsList] = useState<any[]>([]);
    const [pagination, setPagination] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const getNotifications = async (): Promise<void> => {
        setLoading(true);
        const searchParams: any = {
            pagination: pagination,
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

    const handleClickInside = (event: React.MouseEvent) => {
        const isButtonClick = (event.target as HTMLElement).closest(".button-gost");
        if (!isButtonClick) {
            event.stopPropagation();
        }
    };

    if (isOpen && !hasOpened) {
        setHasOpened(true);
    }

    return (
        <div
            ref={dropdownRef}
            onClick={handleClickInside}
            className={`headerdropdown headerdropdown__notifications ${isOpen ? "open notification" : hasOpened ? "close" : ""}`}
        >
            <div className="headerdropdown__header heading__semibold">
                <span>Systemnachrichten</span>
                <button className="button button-gost button--big button--grey" onClick={() => setToggleHandle(true)}>
                    <i className="button__icon icon-x"></i>
                </button>
            </div>
            <div className="headerdropdown__body">
                <div className="headerdropdown__body--notification overflow">
                    {loading ? (
                        <div className="text-center">
                            <Loading />
                        </div>
                    ) : (
                        notificationsList.map((notification, index) => (
                            <div className="headerdropdown__notification" key={notification.id}>
                                <span className="headerdropdown__subtitle caption__regular">
                                    {notification.created_at
                                        ? moment(notification.created_at).format("DD. MM. yyyy")
                                        : "-"}
                                </span>
                                <span className="headerdropdown__title body-big__medium">Auftrag 80700</span>
                                <p className="headerdropdown__message body-normal__regular">
                                    {notification.message.length > 50
                                        ? `${notification.message.substring(0, 50)}...`
                                        : notification.message}
                                </p>
                            </div>
                        ))
                    )}
                </div>
                <button
                    className="button button--big button--green headerdropdown__button-end"
                    onClick={() => navigate(PATHS.messages)}
                >
                    <span className="button__text">Alle Systemnachrichten ansehen</span>
                </button>
            </div>
        </div>
    );
};

export default NotificationDropdown;
