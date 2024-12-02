import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { makeApiCall } from "src/api/apiRequests";
import API_PATHS from "src/api/apiPaths";
import API_HEADERS from "src/api/apiConfig";
import PATHS from "src/routes/Paths";
import ValidationMessage from "src/helpers/ValidationMessage";
import ValidationMessageInvalid from "src/helpers/ValidationMessageInvalid";

const ThommasGroupeLogo = require("../../assets/images/logo/Group.svg").default;

const ResetPassword: React.FC = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState<boolean>(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
    const [isConfirmPasswordError, setIsConfirmPasswordError] = useState<boolean>(false);
    const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
    const [passwordIsRequired, setPasswordIsRequired] = useState("Password is required!");
    const [confirmPasswordIsRequired, setConfirmPasswordIsRequired] = useState("Password is required!");
    const [validations, setValidations] = useState<Record<string, string>>({});
    const [resetToken, setResetToken] = useState("");
    const [loading, setLoading] = useState(false);
    const isInputRequired = true;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: any = await makeApiCall<ResponseType>(
                    API_PATHS.getPasswordData(token),
                    "GET",
                    API_HEADERS.unauthenticated
                );

                setResetToken(response.response);
            } catch (error: any) {
                navigate(PATHS.login);
            }
        };

        fetchData();
    }, []);

    const resetPassword = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        const passwordData = {
            password: password,
            password_confirmation: confirmPassword,
        };

        try {
            const response: any = await makeApiCall<ResponseType>(
                API_PATHS.updatePassword(resetToken),
                "PUT",
                API_HEADERS.unauthenticated,
                passwordData
            );
            setLoading(false);
            navigate(PATHS.login);
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
        <div className="reset-password">
            <form className="form" method="post" onSubmit={(e) => resetPassword(e)}>
                <div className="form__logo">
                    <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
                </div>

                <span className="reset-password__title body-normal__semibold">Passwort zurücksetzen</span>

                <div className="input-field reset-password__password">
                    <label
                        htmlFor={`password`}
                        className={`input-field__label caption__regular 
                                           ${
                                               isPasswordError
                                                   ? "input-field__label--error"
                                                   : isPasswordFocused
                                                   ? "input-field__label--focused"
                                                   : ""
                                           }
                                           `}
                    >
                        Passwort
                        {isInputRequired ? <span className="input-field__label--required">*</span> : ""}
                    </label>
                    <input
                        id={`password`}
                        className={`input-field__content body-normal__regular ${
                            isPasswordError ? "input-field__content--error" : ""
                        }`}
                        type="text"
                        name={`password`}
                        placeholder="Geben Sie Ihr Passwort ein."
                        value={password}
                        onChange={handleInputChange(setPassword, setIsPasswordError)}
                        onFocus={handleInputFocus(setIsPasswordFocused)}
                        onBlur={handleInputBlur(password, setIsPasswordError, setIsPasswordFocused)}
                    />
                    {validations.password ? (
                        <ValidationMessage
                            message={validations.password ? validations.password[0] : validations.error}
                        />
                    ) : isPasswordError ? (
                        <ValidationMessage message={passwordIsRequired} />
                    ) : (
                        ""
                    )}
                </div>

                <div className="input-field reset-password__password-repeat">
                    <label
                        htmlFor={`reset-password`}
                        className={`input-field__label caption__regular 
                                           ${
                                               isConfirmPasswordError
                                                   ? "input-field__label--error"
                                                   : isConfirmPasswordFocused
                                                   ? "input-field__label--focused"
                                                   : ""
                                           }
                                           `}
                    >
                        Passwort wiederholen
                        {isInputRequired ? <span className="input-field__label--required">*</span> : ""}
                    </label>
                    <input
                        id={`reset-password`}
                        className={`input-field__content body-normal__regular ${
                            isConfirmPasswordError ? "input-field__content--error" : ""
                        }`}
                        type="text"
                        name="reset-password"
                        placeholder="Geben Sie Ihr Passwort ein."
                        value={confirmPassword}
                        onChange={handleInputChange(setConfirmPassword, setIsConfirmPasswordError)}
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
                    {validations.message && <ValidationMessageInvalid message={validations.message} />}
                </div>

                <p className="reset-password__content-title body-small__regular">
                    Folgende Kriterien müssen erfüllt sein:
                </p>

                <div className="reset-password__content">
                    <div className={`reset-password__content-item ${password.length >= 8 ? "valid" : ""}`}>
                        <i
                            className={`reset-password__content-icon ${password.length >= 8 ? "icon-check" : "icon-x"}`}
                        ></i>
                        <p className="reset-password__content-amount caption__regular">Mindestlänge 8 Zeichen</p>
                    </div>
                    <div
                        className={`reset-password__content-item ${
                            /[A-Z]/.test(password) && /[a-z]/.test(password) ? "valid" : ""
                        }`}
                    >
                        <i
                            className={`reset-password__content-icon ${
                                /[A-Z]/.test(password) && /[a-z]/.test(password) ? "icon-check" : "icon-x"
                            }`}
                        ></i>
                        <p className="reset-password__content-amount caption__regular">Groß- und Kleinbuchstaben</p>
                    </div>
                    <div className={`reset-password__content-item ${/[§$%&@+?]/.test(password) ? "valid" : ""}`}>
                        <i
                            className={`reset-password__content-icon ${
                                /[§$%&@+?]/.test(password) ? "icon-check" : "icon-x"
                            }`}
                        ></i>
                        <p className="reset-password__content-amount caption__regular">
                            Verwenden Sie ein Sonderzeichen: <strong>§$%&@+?</strong>
                        </p>
                    </div>
                </div>

                <div className="reset-password__button">
                    <Link to={PATHS.login} className="button button--big button-gost button--grey">
                        <span className="button__text">Abbrechen</span>
                    </Link>
                    {loading ? (
                        <button className="reset-password__button-reset button button--big button--green" type="button">
                            <span className="button__text">Passwort ändern</span>
                        </button>
                    ) : (
                        <button className="reset-password__button-reset button button--big button--green" type="submit">
                            <span className="button__text">Passwort ändern</span>
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
