import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom"
import PATHS from "../../routes/Paths";

const ThommasGroupeLogo: string = require("../../assets/images/logo/Group.svg").default;

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [isEmailFilled, setIsEmailFilled] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setIsEmailFilled(e.target.value !== "");
    };

    return (
        <>
            <div className="forgot-password">
                <form className="form">

                    <div className="form__logo">
                        <img src={ThommasGroupeLogo} alt="ThommasGroupe"/>
                    </div>
                    <span className="forgot-password__title body-normal__semibold">
                        Passwort vergessen?
                    </span>
                    <div className="form__field forgot-password__username ">
                        <label
                            htmlFor="username"
                            className={`form__label caption__regular ${isEmailFilled ? "filled" : ""}`}>
                            E-Mail
                            <span className="form__label-mandatory">*</span>
                        </label>

                        <input
                            id="username"
                            className="form__input body-normal__regular"
                            type="email"
                            name="username"
                            placeholder="Geben Sie Ihre E-Mail-Adresse ein."
                            onChange={handleEmailChange}
                            required/>
                        <span className="error-message caption__regular">Error message</span>
                    </div>

                    <div className="forgot-password__button">
                        <Link to={PATHS.login}
                              className="button button--big button-gost button--grey ">
                            <i className="button__icon icon-arrow-left"></i>
                            <span className="button__text">Zurück</span>
                        </Link>

                        <button id="forgot-password"
                                className="forgot-password__button-forgot button button--big button--green"
                                type="submit" name="forgot-password">
                            <span className="button__text">Passwort Link anfordern</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default ForgotPassword;