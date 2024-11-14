import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PATHS from "../../routes/Paths";
import { makeApiCall } from "src/api/apiRequests";
import API_PATHS from "src/api/apiPaths";
import API_HEADERS from "src/api/apiConfig";
import * as AppConfig from "../../helpers/AppConfig";
import ValidationMessage from "src/helpers/ValidationMessage";
import ValidationMessageInvalid from "src/helpers/ValidationMessageInvalid";

const ThommasGroupeLogo: string = require("../../assets/images/logo/Group.svg").default;

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
    const [password, setPassword] = useState("");
    const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
    const [passwordIsRequired, setPasswordIsRequired] = useState("Password is required!");
    const [emaildIsRequired, setEmailIsRequired] = useState("Email is required!");

    const isInputRequired = true;
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
            if (error.response.status === 404 || error.response.status === 401 || error.response.status === 422) {
                setValidations(error.response.data);
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
            <div className="login">
                <form className="form" method="post" onSubmit={(e) => userLogin(e)}>
                    <div className="form__logo">
                        <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
                    </div>

                    <div className="input-field login__username">
                        <label
                            htmlFor={`email`}
                            className={`input-field__label caption__regular 
                                           ${
                                               isEmailError
                                                   ? "input-field__label--error"
                                                   : isEmailFocused
                                                   ? "input-field__label--focused"
                                                   : ""
                                           }
                                           `}
                        >
                            Login
                            {isInputRequired ? <span className="input-field__label--required">*</span> : ""}
                        </label>
                        <input
                            id={`email`}
                            className={`input-field__content body-normal__regular ${
                                isEmailError ? "input-field__content--error" : ""
                            }`}
                            type="text"
                            name={`email`}
                            placeholder="Geben Sie Ihre E-Mail-Adresse ein."
                            value={email}
                            onChange={handleInputChange(setEmail, setIsEmailError)}
                            onFocus={handleInputFocus(setIsEmailFocused)}
                            onBlur={handleInputBlur(email, setIsEmailError, setIsEmailFocused)}
                        />
                        {validations.email || validations.error ? (
                            <ValidationMessage message={validations.email ? validations.email[0] : validations.error} />
                        ) : isEmailError ? (
                            <ValidationMessage message={emaildIsRequired} />
                        ) : ("")}
                    </div>

                    <div className="input-field login__password">
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
                        ) : ("")}
                        {validations.message && <ValidationMessageInvalid message={validations.message} />}
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
