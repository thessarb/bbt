import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PATHS from "../../routes/Paths";
import { makeApiCall } from "src/api/apiRequests";
import API_PATHS from "src/api/apiPaths";
import API_HEADERS from "src/api/apiConfig";
import ValidationMessage from "src/helpers/ValidationMessage";

const ThommasGroupeLogo: string = require("../../assets/images/logo/Group.svg").default;

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isEmailFilled, setIsEmailFilled] = useState(false);
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
            navigate(PATHS.thankYou)
        } catch (error: any) {
            if (error.response.status === 422) {
                setValidations(error.response.data);
            }
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setIsEmailFilled(e.target.value !== "");
    };

    return (
        <>
            <div className="forgot-password">
                <form className="form" onSubmit={(e) => forgotPassword(e)}>
                    <div className="form__logo">
                        <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
                    </div>
                    <span className="forgot-password__title body-normal__semibold">Passwort vergessen?</span>
                    <div className={`form__field forgot-password__username ${validations.email ? "error" : ""}`}>
                        <label
                            htmlFor="username"
                            className={`form__label caption__regular ${isEmailFilled ? "filled" : ""}`}
                        >
                            E-Mail
                            <span className="form__label-mandatory">*</span>
                        </label>

                        <input
                            id="email"
                            className="form__input body-normal__regular"
                            name="email"
                            value={email}
                            placeholder="Geben Sie Ihre E-Mail-Adresse ein."
                            onChange={handleEmailChange}
                        />
                        {(validations.email || validations.error) && (
                            <ValidationMessage message={validations.email ? validations.email[0] : validations.error} />
                        )}
                    </div>

                    <div className="form-error-message body-small__regular">
                        Es existiert kein Konto mit dieser E-Mail-Adresse.
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

                        <button
                            id="forgot-password"
                            className="forgot-password__button-forgot button button--big button--green"
                            type="submit"
                            name="forgot-password"
                        >
                            <span className="button__text">Passwort Link anfordern</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ForgotPassword;
