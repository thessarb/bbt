import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { makeApiCall } from "src/api/apiRequests";
import API_HEADERS from "src/api/apiConfig";
import API_PATHS from "src/api/apiPaths";
import ValidationMessage from "src/helpers/ValidationMessage";
import ValidationMessageInvalid from "src/helpers/ValidationMessageInvalid";
import Loading from "src/helpers/Loading";
interface ChangePasswordProps {
    onShowModal: boolean;
    setShowModal: (visible: boolean) => void;
}

const ChangePassword = ({ onShowModal, setShowModal }: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState<boolean>(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
    const [isOldPasswordFocused, setIsOldPasswordFocused] = useState<boolean>(false);

    const [isConfirmPasswordError, setIsConfirmPasswordError] = useState<boolean>(false);
    const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
    const [isOldPasswordError, setIsOldPasswordError] = useState<boolean>(false);

    const [passwordIsRequired, setPasswordIsRequired] = useState("Password is required!");
    const [confirmPasswordIsRequired, setConfirmPasswordIsRequired] = useState("Password is required!");
    const [oldPasswordIsRequired, setOldPasswordIsRequired] = useState("Password is required!");

    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [animateClose, setAnimateClose] = useState(false);
    const [validations, setValidations] = useState<Record<string, string>>({});
    const isInputRequired = true;

    const onClose = () => {
        setAnimateClose(true);
        setTimeout(() => {
            setShowModal(false);
            setAnimateClose(false);
        }, 350);
    };

    const changePassword = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        const newPasswordData = {
            current_password: oldPassword,
            password: password,
            password_confirmation: confirmPassword,
        };

        try {
            const response: any = await makeApiCall<ResponseType>(
                API_PATHS.updateProfile,
                "PUT",
                API_HEADERS.authenticated,
                newPasswordData
            );
            setLoading(false);
            setShowSuccessMessage(true);
        } catch (error: any) {
            if (error.response.status === 404 || error.response.status === 422) {
                setValidations(error.response.data);
                setLoading(false);
            }
        }
    };

    const handleInputChange =
        (
            setter: React.Dispatch<React.SetStateAction<string>>,
            setError: React.Dispatch<React.SetStateAction<boolean>>
        ) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setter(e.target.value);
            if (isInputRequired && e.target.value.trim() === "") {
                setError(true);
            } else {
                setError(false);
            }
        };
    const handleInputFocus = (setFocus: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setFocus(true);
    };
    const handleInputBlur =
        (
            value: string,
            setError: React.Dispatch<React.SetStateAction<boolean>>,
            setFocus: React.Dispatch<React.SetStateAction<boolean>>
        ) =>
        () => {
            setFocus(false);
            if (isInputRequired && value.trim() === "") {
                setError(true);
            }
        };

    return (
        <>
            <Modal
                isOpen={onShowModal}
                toggle={() => onClose()}
                centered
                className={`modal ${animateClose ? "slide-up" : ""}`}
                fade={true}
                backdrop="static"
            >
                <ModalHeader className="header-no-background" toggle={() => onClose()}>
                    <span className="heading__semibold">Passwort ändern</span>
                </ModalHeader>
                <form onSubmit={(e) => changePassword(e)}>
                    <ModalBody>
                        {!showSuccessMessage ? (
                            <>
                                {loading ? (
                                    <div className="text-center">
                                        <Loading />
                                    </div>
                                ) : (
                                    <div className="change-password">
                                        <div className="password">
                                            <div className="input-field reset-password__password">
                                                <label
                                                    htmlFor={`current_password`}
                                                    className={`form__label caption__regular 
                                           ${
                                               isOldPasswordError
                                                   ? "input-field__label--error"
                                                   : isOldPasswordFocused
                                                   ? "input-field__label--focused"
                                                   : ""
                                           }
                                           `}
                                                >
                                                    Bisheriges Passwort
                                                    {isInputRequired ? (
                                                        <span className="input-field__label--required">*</span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </label>

                                                <input
                                                    id={`current_password`}
                                                    className={`input-field__content body-normal__regular ${
                                                        isOldPasswordError ? "input-field__content--error" : ""
                                                    }`}
                                                    type="text"
                                                    name={`current_password`}
                                                    placeholder="Geben Sie Ihr Passwort ein."
                                                    value={oldPassword}
                                                    onChange={handleInputChange(setOldPassword, setIsOldPasswordError)}
                                                    onFocus={handleInputFocus(setIsOldPasswordFocused)}
                                                    onBlur={handleInputBlur(
                                                        oldPassword,
                                                        setIsOldPasswordError,
                                                        setIsOldPasswordFocused
                                                    )}
                                                />
                                                {validations.current_password ? (
                                                    <ValidationMessage
                                                        message={
                                                            validations.current_password
                                                                ? validations.current_password[0]
                                                                : validations.error
                                                        }
                                                    />
                                                ) : isOldPasswordError ? (
                                                    <ValidationMessage message={oldPasswordIsRequired} />
                                                ) : (
                                                    ""
                                                )}
                                            </div>

                                            <div className="input-field reset-password__password">
                                                <label
                                                    htmlFor={`current_password`}
                                                    className={`form__label caption__regular 
                                           ${
                                               isPasswordError
                                                   ? "input-field__label--error"
                                                   : isPasswordFocused
                                                   ? "input-field__label--focused"
                                                   : ""
                                           }
                                           `}
                                                >
                                                    Bisheriges Passwort
                                                    {isInputRequired ? (
                                                        <span className="input-field__label--required">*</span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </label>

                                                <input
                                                    id={`password`}
                                                    className={`input-field__content body-normal__regular ${
                                                        isPasswordError ? "input-field__content--error" : ""
                                                    }`}
                                                    type="text"
                                                    name={`current_password`}
                                                    placeholder="Geben Sie Ihr Passwort ein."
                                                    value={password}
                                                    onChange={handleInputChange(setPassword, setIsPasswordError)}
                                                    onFocus={handleInputFocus(setIsPasswordFocused)}
                                                    onBlur={handleInputBlur(
                                                        password,
                                                        setIsPasswordError,
                                                        setIsPasswordFocused
                                                    )}
                                                />
                                                {validations.password ? (
                                                    <ValidationMessage
                                                        message={
                                                            validations.password
                                                                ? validations.password[0]
                                                                : validations.error
                                                        }
                                                    />
                                                ) : isPasswordError ? (
                                                    <ValidationMessage message={passwordIsRequired} />
                                                ) : (
                                                    ""
                                                )}
                                            </div>

                                            <div className="input-field reset-password__password">
                                                <label
                                                    htmlFor={`current_password`}
                                                    className={`form__label caption__regular 
                                           ${
                                               isConfirmPasswordError
                                                   ? "input-field__label--error"
                                                   : isConfirmPasswordFocused
                                                   ? "input-field__label--focused"
                                                   : ""
                                           }
                                           `}
                                                >
                                                    Bisheriges Passwort
                                                    {isInputRequired ? (
                                                        <span className="input-field__label--required">*</span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </label>

                                                <input
                                                    id={`password`}
                                                    className={`input-field__content body-normal__regular ${
                                                        isConfirmPasswordError ? "input-field__content--error" : ""
                                                    }`}
                                                    type="text"
                                                    name={`current_password`}
                                                    placeholder="Geben Sie Ihr Passwort ein."
                                                    value={confirmPassword}
                                                    onChange={handleInputChange(
                                                        setConfirmPassword,
                                                        setIsConfirmPasswordError
                                                    )}
                                                    onFocus={handleInputFocus(setIsConfirmPasswordFocused)}
                                                    onBlur={handleInputBlur(
                                                        confirmPassword,
                                                        setIsConfirmPasswordError,
                                                        setIsConfirmPasswordFocused
                                                    )}
                                                />
                                                {validations.password_confirmation ? (
                                                    <ValidationMessage
                                                        message={
                                                            validations.password_confirmation
                                                                ? validations.password_confirmation[0]
                                                                : validations.error
                                                        }
                                                    />
                                                ) : isConfirmPasswordError ? (
                                                    <ValidationMessage message={confirmPasswordIsRequired} />
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>

                                        <div className="validate-password">
                                            <span className="body-small__regular">
                                                Folgende Kriterien müssen erfüllt sein:
                                            </span>
                                            <div className={`title item ${password.length >= 8 ? "valid" : ""}`}>
                                                <i
                                                    className={`content-icon ${
                                                        password.length >= 8 ? "icon-check" : "icon-x"
                                                    }`}
                                                />
                                                <span className="content-amount caption__regular">
                                                    Mindestlänge 8 Zeichen
                                                </span>
                                            </div>
                                            <div
                                                className={`item ${
                                                    /[A-Z]/.test(password) && /[a-z]/.test(password) ? "valid" : ""
                                                }`}
                                            >
                                                <i
                                                    className={`content-icon ${
                                                        /[A-Z]/.test(password) && /[a-z]/.test(password)
                                                            ? "icon-check"
                                                            : "icon-x"
                                                    }`}
                                                />
                                                <span className="content-amount caption__regular">
                                                    Groß- und Kleinbuchstaben
                                                </span>
                                            </div>
                                            <div className={`item ${/[§$%&@+?]/.test(password) ? "valid" : ""}`}>
                                                <i
                                                    className={`content-icon ${
                                                        /[§$%&@+?]/.test(password) ? "icon-check" : "icon-x"
                                                    }`}
                                                />
                                                <span className="content-amount caption__regular">
                                                    Verwenden Sie ein Sonderzeichen:{" "}
                                                    <span className="caption__semibold">§$%&@+?</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="success-message">
                                <div className="success-message__success-text body-normal__semibold">
                                    <i className="icon-check" />
                                    Ihr Passwort wurde erfolgreich geändert.
                                </div>
                                <div className="body-normal__regular">
                                    Sie werden zur Login Seite weitergeleitet, um sich erneut anzumelden.
                                </div>
                            </div>
                        )}
                    </ModalBody>
                    <ModalFooter className="no-background">
                        <button
                            className="button button-secondary button--big button--grey"
                            type="button"
                            onClick={() => onClose()}
                        >
                            <span className="button__text">Schließen</span>
                        </button>
                        {!showSuccessMessage ? (
                            <>
                                {loading ? (
                                    <button className="button button--big button--green" type="button">
                                        <span className="button__text">Passwort ändern</span>
                                    </button>
                                ) : (
                                    <button className="button button--big button--green" type="submit">
                                        <span className="button__text">Passwort ändern</span>
                                    </button>
                                )}
                            </>
                        ) : (
                            ""
                        )}
                    </ModalFooter>
                </form>
            </Modal>
        </>
    );
};

export default ChangePassword;
