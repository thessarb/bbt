import React, { Fragment, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import PATHS from "src/routes/Paths";
interface Notification {
  id: number;
  text: string;
  time: string;
}
interface NotificationDropdownProps {
  isOpen: boolean;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({
  isOpen,
}) => {
  const navigate = useNavigate();
  const [toggleHandle, setToggleHandle] = useState<boolean>(false);
  const [hasOpened, setHasOpened] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [notificationsList, setNotificationsList] = useState<Notification[]>([
    {
      id: 1,
      text: "Lieferung der Massivwand XY verzögert sich um X Tage.",
      time: "2024-05-12",
    },
    {
      id: 2,
      text: "Ihre Lieferung des Bauabschnitts 2.1 kommt voraussichtlich am 03.05.2024",
      time: "2024-05-12",
    },
  ]);

  const handleClickInside = (event: React.MouseEvent) => {
    const isButtonClick = (event.target as HTMLElement).closest(
      ".button-gost"
    );
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
            className={`headerdropdown headerdropdown__notifications ${
                isOpen ? "open" : hasOpened ? "close" : ""
            }`}
        >
            <div className="headerdropdown__header heading__semibold">
                <span>Systemnachrichten</span>
                <button className="button button-gost button--big button--grey" onClick={() => setToggleHandle(true)}>
                    <i className="button__icon icon-x"></i>
                </button>
            </div>
            <div className="headerdropdown__body">
              {notificationsList.map((notification, index) => (
                  <div className="headerdropdown__notification" key={notification.id}>
                      <span className="headerdropdown__subtitle caption__regular">
                        {notification.time}
                      </span>
                    <span className="headerdropdown__title body-big__medium">Auftrag 80700</span>
                    <p className="headerdropdown__message body-normal__regular">
                      {notification.text}
                    </p>
                    {index < notificationsList.length - 1}
                  </div>
              ))}
                <button className="button button--big button--green headerdropdown__button-end" onClick={() => navigate(PATHS.messages)}>
                    <span className="button__text">Alle Systemnachrichten ansehen</span>
                </button>
            </div>
        </div>
    );
};

export default NotificationDropdown;
