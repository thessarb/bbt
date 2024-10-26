import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface ChangePasswordProps {
    onShowModal: boolean;
    setShowModal: (visible: boolean) => void;
}

const ChangePassword = ({ onShowModal, setShowModal }: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState("");
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [animateClose, setAnimateClose] = useState(false);

    const onClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShowModal(false);
            setAnimateClose(false);
        }, 350);
    };

    return (
        <>
            <Modal
                isOpen={onShowModal}
                toggle={() => onClose()}
                centered
                className={`modal file-viewer ${animateClose ? "slide-up" : ""}`}
                fade={true}
                backdrop="static"
            >
                <ModalHeader toggle={() => onClose()}>
                    <span className="heading__semibold">Passwort ändern</span>
                </ModalHeader>
                <ModalBody>
                    <div className="change-password">
                        <div className="password">
                            <div className="form__field reset-password__password">
                                <label
                                    htmlFor="password-login"
                                    className={`form__label caption__regular ${password ? "filled" : ""}`}
                                >
                                    Passwort
                                    <span className="form__label-mandatory">*</span>
                                </label>
                                <input
                                    id="password-login"
                                    className="form__input body-normal__regular"
                                    // onChange={handlePasswordChange}
                                    type="password"
                                    name="password"
                                    placeholder="Geben Sie Ihr Passwort ein."
                                    required
                                />
                                {/* {!isPasswordValid && <span className="error-message caption__regular">Ungültiges Passwort</span>} */}
                            </div>

                            <div className="form__field reset-password__password-repeat">
                                <label
                                    htmlFor="password-repeat"
                                    // className={`form__label caption__regular
                                    //      ${repeatPassword ? "filled" : ""}
                                    //      `}
                                >
                                    Passwort wiederholen
                                    <span className="form__label-mandatory">*</span>
                                </label>
                                <input
                                    id="password-repeat"
                                    className="form__input body-normal__regular"
                                    // onChange={handleRepeatPasswordChange}
                                    placeholder="Geben Sie Ihr Passwort ein."
                                    name="passwordVerify"
                                    type="password"
                                    required
                                />
                                {/* {!isRepeatPasswordValid && <span className="error-message caption__regular">Passwörter stimmen nicht überein</span>} */}
                            </div>
                        </div>

                        <div className="validate-password">
                            <span className="body-small__regular">Folgende Kriterien müssen erfüllt sein:</span>
                            <div className={`title item ${password.length >= 8 ? "valid" : ""}`}>
                                <i className={`content-icon ${password.length >= 8 ? "icon-check" : "icon-x"}`} />
                                <span className="content-amount caption__regular">Mindestlänge 8 Zeichen</span>
                            </div>
                            <div
                                className={`item ${
                                    /[A-Z]/.test(password) && /[a-z]/.test(password) ? "valid" : ""
                                }`}
                            >
                                <i
                                    className={`content-icon ${
                                        /[A-Z]/.test(password) && /[a-z]/.test(password) ? "icon-check" : "icon-x"
                                    }`}
                                />
                                <span className="content-amount caption__regular">Groß- und Kleinbuchstaben</span>
                            </div>
                            <div className={`item ${/[§$%&@+?]/.test(password) ? "valid" : ""}`}>
                                <i className={`content-icon ${/[§$%&@+?]/.test(password) ? "icon-check" : "icon-x"}`} />
                                <span className="content-amount caption__regular">
                                    Verwenden Sie ein Sonderzeichen:
                                </span>
                                <span className="caption__semibold"> §$%&@+?</span>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="no-background">
                    <button
                        className="button button-secondary button--big button--grey"
                        type="button"
                        onClick={() => onClose()}
                    >
                        <span className="button__text">Schließen</span>
                    </button>
                    <button className="button button--big button--green" type="button" onClick={() => onClose()}>
                        <span className="button__text">Passwort ändern</span>
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default ChangePassword;
