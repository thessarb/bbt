import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { makeApiCall } from "src/api/apiRequests";
import API_PATHS from "src/api/apiPaths";
import API_HEADERS from "src/api/apiConfig";
import PATHS from "src/routes/Paths";
import ValidationMessage from "src/helpers/ValidationMessage";

const ThommasGroupeLogo = require("../../assets/images/logo/Group.svg").default;

const ResetPassword: React.FC = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [isRepeatPasswordValid, setIsRepeatPasswordValid] = useState<boolean>(false);
    const [userName, setUserName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [validations, setValidations] = useState<Record<string, string>>({});

    // Function to validate the password based on specified criteria
    const validatePassword = (password: string): boolean => {
        const minLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasSpecialChar = /[§$%&@+?]/.test(password);
        return minLength && hasUpperCase && hasLowerCase && hasSpecialChar;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: any = await makeApiCall<ResponseType>(
                    API_PATHS.resetPassword(token),
                    "GET",
                    API_HEADERS.unauthenticated
                );

                setUserName(response.user.email);
            } catch (error: any) {
                navigate(PATHS.login);
            }
        };

        fetchData();
    }, []);

    const resetPassword = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const passwordData = {
            password: password,
            password_confirmation: confirmPassword,
        };

        try {
            const response: any = await makeApiCall<ResponseType>(
                API_PATHS.resetPassword(token),
                "POST",
                API_HEADERS.unauthenticated,
                passwordData
            );
            navigate(PATHS.login);
        } catch (error: any) {
            if (error.response.status === 404 || error.response.status === 422) {
                setValidations(error.response.data);
            }
        }
    };

    // Handler for password input change
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setIsPasswordValid(validatePassword(newPassword));
        setIsRepeatPasswordValid(newPassword === repeatPassword);
    };

    // Handler for repeat password input change
    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newRepeatPassword = e.target.value;
        setRepeatPassword(newRepeatPassword);
        setIsRepeatPasswordValid(newRepeatPassword === password);
    };

    // Check if the form is valid for submission
    const isFormValid = isPasswordValid && isRepeatPasswordValid;

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (isFormValid) {
            // Add form submission logic here (e.g., API call)
            console.log("Password reset successfully.");
            // Optionally navigate to another page after successful reset
            // navigate(PATHS.login);
        }
    };

    return (
        <div className="reset-password">
            <form className="form" method="post" onSubmit={handleSubmit}>
                <div className="form__logo">
                    <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
                </div>

                <span className="reset-password__title body-normal__semibold">Passwort zurücksetzen</span>

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
                        onChange={handlePasswordChange}
                        type="password"
                        name="password"
                        placeholder="Geben Sie Ihr Passwort ein."
                        required
                    />
                    {!isPasswordValid && <span className="error-message caption__regular">Ungültiges Passwort</span>}
                </div>

                <div className="form__field reset-password__password-repeat">
                    <label
                        htmlFor="password-repeat"
                        className={`form__label caption__regular ${repeatPassword ? "filled" : ""}`}
                    >
                        Passwort wiederholen
                        <span className="form__label-mandatory">*</span>
                    </label>
                    <input
                        id="password-repeat"
                        className="form__input body-normal__regular"
                        onChange={handleRepeatPasswordChange}
                        placeholder="Geben Sie Ihr Passwort ein."
                        name="passwordVerify"
                        type="password"
                        required
                    />
                    {!isRepeatPasswordValid && (
                        <span className="error-message caption__regular">Passwörter stimmen nicht überein</span>
                    )}
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
                            Verwenden Sie ein Sonderzeichen: §$%&@+?
                        </p>
                    </div>
                </div>

                <div className="reset-password__button">
                    <Link to={PATHS.login} className="button button--big button-gost button--grey">
                        <span className="button__text">Abbrechen</span>
                    </Link>

                    <button
                        id="reset-password"
                        className="reset-password__button-reset button button--big button--green"
                        type="submit"
                        name="reset-password"
                    >
                        <span className="button__text">Passwort ändern</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
