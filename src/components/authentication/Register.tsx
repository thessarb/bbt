import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import PATHS from "../../routes/Paths";

const options = [
    { value: 'chocolate', label: 'Chocolate with love ' },
    { value: 'strawberry', label: 'Strawberry with test' },
    { value: 'vanilla', label: 'Vanilla test' },
    { value: 'chocolate', label: 'Chocolate with love ' },
    { value: 'strawberry', label: 'Strawberry with test' },
    { value: 'vanilla', label: 'Vanilla test' },
    { value: 'chocolate', label: 'Chocolate with love ' },
    { value: 'strawberry', label: 'Strawberry with test' },
    { value: 'vanilla', label: 'Vanilla test' },
];

const ThommasGroupeLogo = require("../../assets/images/logo/Group.svg").default;

const Register = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(null);

    const navigate = useNavigate();

    // Input change handlers
    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    };

    const handleSelectChange = (newValue: SingleValue<{ value: string; label: string }>) => {
        setSelectedOption(newValue);
    };

    // Utility function to check if a field is filled
    const isFilled = (value: string) => value !== "";

    return (
        <div className="register">
            <form className="form" method="post">
                <div className="form__logo">
                    <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
                </div>

                <span className="register__title body-normal__semibold">
                    Zugang anfragen
                </span>

                <div className="register__box">
                    <div className="form__field error">
                        <label
                            htmlFor="name"
                            className={`form__label caption__regular ${isFilled(firstName) ? "filled" : ""}`}>
                            Vorname
                            <span className="form__label-mandatory">*</span>
                        </label>

                        <input
                            id="name"
                            className="form__input body-normal__regular"
                            type="text"
                            name="name"
                            placeholder="Geben Sie Ihren Vornamen an."
                            onChange={handleInputChange(setFirstName)}
                            required />
                        <span className="error-message caption__regular">Error message</span>
                    </div>

                    <div className="form__field">
                        <label
                            htmlFor="surname"
                            className={`form__label caption__regular ${isFilled(lastName) ? "filled" : ""}`}>
                            Nachname
                            <span className="form__label-mandatory">*</span>
                        </label>

                        <input
                            id="surname"
                            className="form__input body-normal__regular"
                            type="text"
                            name="surname"
                            placeholder="Geben Sie Ihren Nachnamen ein."
                            onChange={handleInputChange(setLastName)}
                            required />
                        <span className="error-message caption__regular">Error message</span>
                    </div>

                    <div className="form__field">
                        <label
                            htmlFor="email"
                            className={`form__label caption__regular ${isFilled(email) ? "filled" : ""}`}>
                            E-Mail
                            <span className="form__label-mandatory">*</span>
                        </label>

                        <input
                            id="email"
                            className="form__input body-normal__regular"
                            type="email"
                            name="email"
                            placeholder="Geben Sie Ihre E-Mail-Adresse ein."
                            onChange={handleInputChange(setEmail)}
                            required />
                        <span className="error-message caption__regular">Error message</span>
                    </div>

                    <div className="form__field">
                        <label
                            htmlFor="company"
                            className={`form__label caption__regular ${isFilled(company) ? "filled" : ""}`}>
                            Unternehmen
                            <span className="form__label-mandatory">*</span>
                        </label>

                        <input
                            id="company"
                            className="form__input body-normal__regular"
                            type="text"
                            name="company"
                            placeholder="Nennen Sie Ihr Unternehmen"
                            onChange={handleInputChange(setCompany)}
                            required />
                        <span className="error-message caption__regular">Error message</span>
                    </div>

                    <div className="form__field error">
                        <label
                            htmlFor="position"
                            className={`form__label caption__regular ${isFilled(position) ? "filled" : ""}`}>
                            Position
                            <span className="form__label-mandatory">*</span>
                        </label>

                        <input
                            id="position"
                            className="form__input body-normal__regular"
                            type="text"
                            name="position"
                            placeholder="Ihre Position im Unternehmen"
                            onChange={handleInputChange(setPosition)}
                            required />
                        <span className="error-message caption__regular">Error message</span>
                    </div>

                    <div className="form__field-select error">
                        <label
                            htmlFor="company-type"
                            className={`form__label caption__regular ${selectedOption ? "filled" : ""}`}>
                            Art des Unternehmen
                            <span className="form__label-mandatory">*</span>
                        </label>

                        <Select
                            id="company-type"
                            classNamePrefix="react-select"
                            className={`form__select body-normal__regular ${selectedOption ? "filled" : ""}`}
                            placeholder="Nählen Sie Ihre Branche"
                            value={selectedOption}
                            onChange={handleSelectChange}
                            options={options}
                            isClearable={true}
                            closeMenuOnSelect={true}
                            name="company-type"
                            isSearchable={true}
                            required
                        />
                        <span className="error-message caption__regular">Error message</span>
                    </div>
                </div>

                <div className="forgot-password__button">
                    <Link to={PATHS.login}
                          className="button button--big button-gost button--grey">
                        <i className="button__icon icon-arrow-left"></i>
                        <span className="button__text">Zurück</span>
                    </Link>
                    <button id="forgot-password"
                            className="register__button-register button button--big button--green"
                            type="submit" name="forgot-password">
                        <span className="button__text">Zugang anfragen</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
