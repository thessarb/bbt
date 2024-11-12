import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PATHS from "../../routes/Paths";
import { makeApiCall } from "src/api/apiRequests";
import API_PATHS from "src/api/apiPaths";
import API_HEADERS from "src/api/apiConfig";
import * as AppConfig from "../../helpers/AppConfig";
import ValidationMessage from "src/helpers/ValidationMessage";
const ThommasGroupeLogo: string = require("../../assets/images/logo/Group.svg").default;

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailFilled, setIsEmailFilled] = useState(false);
    const [isPasswordFilled, setIsPasswordFilled] = useState(false);
    const [validations, setValidations] = useState<Record<string, string>>({});

    const userLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const loginData = {
            email: email,
            password: password,
        };

        try {
            const response: any = await makeApiCall<ResponseType>(
                API_PATHS.login,
                "POST",
                API_HEADERS.unauthenticated,
                loginData
            );

            const userData = {
                token: response.response.token,
                roleId: response.response.user.role_id,
            };

            AppConfig.setAuth(userData);

            switch (response.response.user.role_id) {
                case 1:
                    window.location.replace(PATHS.userManagement);
                    break;
                case 3:
                case 4:
                    window.location.replace(PATHS.dashboard);
                    break;
            }
        } catch (error: any) {
            if (error.response && error.response.status === 422) {
                setValidations(error.response.data);
            }
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setIsEmailFilled(e.target.value !== "");
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setIsPasswordFilled(e.target.value !== "");
    };

    return (
        <>
            <div className="login">
                <form className="form" method="post" onSubmit={(e) => userLogin(e)}>
                    <div className="form__logo">
                        <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
                    </div>

                    <div className={`form__field login__username ${validations.email ? "error" : ""}`}>
                        <label
                            htmlFor="username-login"
                            className={`form__label caption__regular ${isEmailFilled ? "filled" : ""}`}
                        >
                            Login
                            <span className="form__label-mandatory">*</span>
                        </label>

                        <input
                            id="username-login"
                            className="form__input body-normal__regular"
                            // type="email"
                            name="login"
                            placeholder="Geben Sie Ihre E-Mail-Adresse ein."
                            value={email}
                            onChange={handleEmailChange}
                            // required
                        />
                        {(validations.email || validations.error) && (
                            <ValidationMessage message={validations.email ? validations.email[0] : validations.error} />
                        )}
                    </div>

                    <div className={`form__field login__password ${validations.email ? "error" : ""}`}>
                        <label
                            htmlFor="password-login"
                            className={`form__label caption__regular ${isPasswordFilled ? "filled" : ""}`}
                        >
                            Passwort
                            <span className="form__label-mandatory">*</span>
                        </label>
                        <input
                            id="password-login"
                            className="form__input body-normal__regular"
                            onChange={handlePasswordChange}
                            // type="password"
                            name="password"
                            placeholder="Geben Sie Ihr Passwort ein."
                            // required
                        />
                        {validations.password && (
                            <span className="error-message caption__regular">{validations.password[0]}</span>
                        )}
                    </div>

                    <div className="login__forgot-pasword caption__regular">
                        Sie haben Ihr Passwort vergessen?
                        <Link to={PATHS.forgotPassword} className="login__forgot-pasword-link caption__regular">
                            Klicken Sie hier.
                        </Link>
                    </div>

                    <div className="login__button">
                        <Link to={PATHS.inviteRequest} className="login__button-register caption__regular">
                            <span className="login__button-register-text">Sie haben noch keinen Zugang?</span>
                            <span className="login__button-register-link">Zugang anfragen</span>
                        </Link>

                        <button
                            id="logIn"
                            className="login__button-login button button--big button--green"
                            type="submit"
                            name="login"
                        >
                            <span className="button__text">Jetzt einloggen</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
