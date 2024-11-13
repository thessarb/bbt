import {Link} from "react-router-dom"
import PATHS from "../../routes/Paths";

const ThommasGroupeLogo: string = require("../../assets/images/logo/Group.svg").default;

const RegisterConfirmation = () => {

    return (
        <>
            <div className="register-confirmation">
                <form className="form">
                    <div className="form__logo">
                        <img src={ThommasGroupeLogo} alt="ThommasGroupe"/>
                    </div>
                    <div className="register-confirmation__content">
                        <span className="register-confirmation__title body-normal__semibold">
                            Vielen Dank
                        </span>

                        <span className="register-confirmation__description body-small__regular">
                            Vielen Dank für Ihre Anfrage. Wir haben Ihren zugehörigen Ansprechpartner informiert.
                        </span>

                        <span className="register-confirmation__description body-small__regular">
                            Dieser wird sich zeitnah bei Ihnen melden.
                        </span>

                        <div className="register-confirmation__author body-small__regular">
                            Grüße
                            <span className="register-confirmation__author-team">
                                Ihr thomas team
                            </span>
                        </div>

                    </div>

                    <Link to={PATHS.login}
                          className="button button--big button-gost button--grey ">
                        <i className="button__icon icon-arrow-left"></i>
                        <span className="button__text">Zurück zum Login</span>
                    </Link>
                </form>
            </div>
        </>
    )
};

export default RegisterConfirmation;