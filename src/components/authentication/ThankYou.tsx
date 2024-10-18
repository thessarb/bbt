import {Link} from "react-router-dom"
import PATHS from "../../routes/Paths";

const ThommasGroupeLogo: string = require("../../assets/images/logo/Group.svg").default;

const ThankYou = () => {

    return (
        <>
            <div className="thank-you">
                <form className="form">
                    <div className="form__logo">
                        <img src={ThommasGroupeLogo} alt="ThommasGroupe"/>
                    </div>
                    <div className="thank-you__content">
                        <span className="thank-you__title body-normal__semibold">
                            Vielen Dank
                        </span>
                        <span className="thank-you__description body-small__regular">
                            Wir haben an Ihre hinterlegte E-Mail-Adresse einen Link zum Zurücksetzen Ihres Passworts geschickt.
                        </span>

                        <div className="thank-you__author body-small__regular">
                            Grüße
                            <span className="thank-you__author-team">
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

export default ThankYou;