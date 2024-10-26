import React, { Fragment, useState, useRef, useEffect } from "react";
import ChangePassword from "./ChangePassword";
interface UserDropdownProps {
    isOpen: boolean;
}
const UserDropdown: React.FC<UserDropdownProps> = ({ isOpen }) => {
    const [toggleHandle, setToggleHandle] = useState<boolean>(false);
    const [hasOpened, setHasOpened] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

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
            className={`user-info-dropdown ${isOpen ? "open" : hasOpened ? "close" : ""}`}
            ref={dropdownRef}
            onClick={handleClickInside}
        >
            <div className="user-info-dropdown__header heading__semibold">
                <span>Benutzer Informationen</span>
                <button className="button button-gost button--big button--grey" onClick={() => setToggleHandle(true)}>
                    <i className="button__icon icon-x"></i>
                </button>
            </div>
            <div className="user-info-dropdown__body">
                <p className="user-info-dropdown__user caption__regular">Eingeloggt als:</p>
                <p className="user-info-dropdown__user-name body-big__medium">
                    Vorname Nachname{" "}
                    <span className="user-info-dropdown__user-email body-normal__regular">
                        vorname.nachname@firma.de
                    </span>
                </p>
                <p className="user-info-dropdown__date body-small__regular">Registriert: 10.09.2024</p>
                <hr />
                <span
                    className="user-info-dropdown__change-password-link body-normal__regular"
                    onClick={() => setModalVisible(true)}
                >
                    Passwort ändern
                </span>
                {modalVisible && (
                  <ChangePassword
                    onShowModal={modalVisible}
                    setShowModal={(e) => setModalVisible(e)}
                  />
                )}
            </div>
        </div>
    );
};

export default UserDropdown;


