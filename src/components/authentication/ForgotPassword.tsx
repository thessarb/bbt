import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PATHS from "../../routes/Paths";
import { makeApiCall } from "src/api/apiRequests";
import API_PATHS from "src/api/apiPaths";
import API_HEADERS from "src/api/apiConfig";
import ValidationMessage from "src/helpers/ValidationMessage";
import ValidationMessageInvalid from "src/helpers/ValidationMessageInvalid";

const ThommasGroupeLogo: string = require("../../assets/images/logo/Group.svg").default;

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const [emaildIsRequired, setEmailIsRequired] = useState("Email is required!");
    const [loading, setLoading] = useState(false);
    const isInputRequired = true;
    const [validations, setValidations] = useState<Record<string, string>>({});

    const forgotPassword = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const userData = {
            email: email,
        };

        try {
            const response: any = await makeApiCall<ResponseType>(
                API_PATHS.forgotPassword,
                "POST",
                API_HEADERS.unauthenticated,
                userData
            );

            setEmail("");
            setValidations({});
            navigate(PATHS.thankYou);
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
            <div className="forgot-password">
                <form className="form" onSubmit={(e) => forgotPassword(e)}>
                    <div className="form__logo">
                        <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
                    </div>
                    <span className="forgot-password__title body-normal__semibold">Passwort vergessen?</span>

                    <div className="input-field forgot-password__username">
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
                            E-Mail
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
                        ) : (
                            ""
                        )}
                        {validations.message && <ValidationMessageInvalid message={validations.message} />}
                    </div>

                    <Link to={PATHS.inviteRequest} className="forgot-password__button-register caption__regular">
                        <span className="forgot-password__button-register-text">Sie haben noch keinen Zugang?</span>
                        <span className="forgot-password__button-register-link">Zugang anfragen</span>
                    </Link>

                    <div className="forgot-password__button">
                        <Link to={PATHS.login} className="button button--big button-gost button--grey ">
                            <i className="button__icon icon-arrow-left"></i>
                            <span className="button__text">Zurück</span>
                        </Link>
                        {loading ? (
                            <button
                                id="forgot-password"
                                className="forgot-password__button-forgot button button--big button--green"
                                type="button"
                                name="forgot-password"
                            >
                                <span className="button__text">Passwort Link anfordern</span>
                            </button>
                        ) : (
                            <button
                                id="forgot-password"
                                className="forgot-password__button-forgot button button--big button--green"
                                type="submit"
                                name="forgot-password"
                            >
                                <span className="button__text">Passwort Link anfordern</span>
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default ForgotPassword;
