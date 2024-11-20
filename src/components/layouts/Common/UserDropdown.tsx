import React, { Fragment, useState, useRef, useEffect } from "react";
import ChangePassword from "./ChangePassword";
import { useUserdata } from "src/store/UserData";
import moment from "moment";
interface UserDropdownProps {
    isOpen: boolean;
}
const UserDropdown: React.FC<UserDropdownProps> = ({ isOpen }) => {
    const userData = useUserdata((state: any) => state.userData);
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
            className={`headerdropdown ${isOpen ? "open" : hasOpened ? "close" : ""}`}
            ref={dropdownRef}
            onClick={handleClickInside}
        >
            <div className="headerdropdown__header heading__semibold">
                <span>Benutzer Informationen</span>
                <button className="button button-gost button--big button--grey" onClick={() => setToggleHandle(true)}>
                    <i className="button__icon icon-x"></i>
                </button>
            </div>
            <div className="headerdropdown__body">
                <p className="headerdropdown__subtitle caption__regular">Eingeloggt als:</p>
                <span className="headerdropdown__title body-big__medium">
                    {(userData.firstname ? userData.firstname : "-") +
                        " " +
                        (userData.lastname ? userData.lastname : "-")}{" "}
                </span>
                <span className="headerdropdown__email body-normal__regular">
                    {"<"}{userData.email ? userData.email : "-"}{">"}
                </span>
                <p className="headerdropdown__date body-small__regular">
                    Registriert: {userData.created_at ? moment(userData.created_at).format("DD.MM.yyyy") : "-"}
                </p>
                <span className="headerdropdown__password body-normal__regular" onClick={() => setModalVisible(true)}>Passwort ändern</span>
                {modalVisible && <ChangePassword onShowModal={modalVisible} setShowModal={(e) => setModalVisible(e)} />}
            </div>
        </div>
    );
};

export default UserDropdown;
