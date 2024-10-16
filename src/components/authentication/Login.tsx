import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom"
import PATHS from "../../routes/Paths";

const ThommasGroupeLogo: string = require("../../assets/images/logo/Group.svg").default;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailFilled, setIsEmailFilled] = useState(false);
    const [isPasswordFilled, setIsPasswordFilled] = useState(false);
    const navigate = useNavigate();

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
                <form className="form" method="post">

                    <div className="form__logo">
                        <img src={ThommasGroupeLogo} alt="ThommasGroupe"/>
                    </div>

                    <div className="form__field login__username">
                        <label
                            htmlFor="username-login"
                            className={`form__label caption__regular ${isEmailFilled ? "filled" : ""}`}>
                            Login
                            <span className="form__label-mandatory">*</span>
                        </label>

                        <input
                            id="username-login"
                            className="form__input body-normal__regular"
                            type="email"
                            name="login"
                            placeholder="Geben Sie Ihre E-Mail-Adresse ein."
                            onChange={handleEmailChange}
                            required/>
                        <span className="error-message caption__regular">Error message</span>
                    </div>

                    <div className="form__field login__password">
                        <label
                            htmlFor="password-login"
                            className={`form__label caption__regular ${isPasswordFilled ? "filled" : ""}`}>
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
                            required/>
                        <span className="error-message caption__regular">Error message</span>
                    </div>

                    <div className="login__forgot-pasword caption__regular">
                        Sie haben Ihr Passwort vergessen?
                        <Link to={PATHS.forgotPassword} className="login__forgot-pasword-link caption__regular">Klicken
                            Sie hier.</Link>
                    </div>

                    <div className="login__button">
                        <Link to={PATHS.inviteRequest} className="login__button-register caption__regular">
                            Sie haben noch keinen Zugang?
                            <span className="login__button-register-link">Zugang anfragen</span>
                        </Link>

                        <button id="logIn" className="login__button-login button button--big button--green"
                                type="submit" name="login">
                            <span className="button__text">Button text</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;