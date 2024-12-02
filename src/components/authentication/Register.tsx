import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import PATHS from "../../routes/Paths";
import { makeApiCall } from "../../api/apiRequests";
import API_PATHS from "../../api/apiPaths";
import API_HEADERS from "../../api/apiConfig";

const options = [{ value: "BBT", label: "BBT" }];

const ThommasGroupeLogo = require("../../assets/images/logo/Group.svg").default;

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [isFirstNameFocused, setIsFirstNameFocused] = useState<boolean>(false);
    const [isLastNameFocused, setIsLastNameFocused] = useState<boolean>(false);
    const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
    const [isCompanyFocused, setIsCompanyFocused] = useState<boolean>(false);
    const [isPositionFocused, setIsPositionFocused] = useState<boolean>(false);
    const [isFirstNameError, setIsFirstNameError] = useState<boolean>(false);
    const [isLastNameError, setIsLastNameError] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const [isCompanyError, setIsCompanyError] = useState<boolean>(false);
    const [isPositionError, setIsPositionError] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
    const isInputRequired = true;
    const navigate = useNavigate();

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

    // select
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(null);
    const [isSelectedOptionFocused, setIsSelectedOptionFocused] = useState<boolean>(false);
    const [isSelectedOptionError, setIsSelectedOptionError] = useState<boolean>(false);
    const isSelectedOptionRequired = false;
    const isSelectedOptionDisabled = true;

    const handleSelectChange = (newValue: SingleValue<{ value: string; label: string }>) => {
        setSelectedOption(newValue);
        if (isSelectedOptionRequired && !newValue) {
            setIsSelectedOptionError(true);
        } else {
            setIsSelectedOptionError(false);
        }
    };

    // form validation
    const [validations, setValidations] = useState<Record<string, string>>({});

    const userRegister = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        const registerData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            company: company,
            position: position,
        };

        try {
            const response: any = await makeApiCall<ResponseType>(
                API_PATHS.register,
                "POST",
                API_HEADERS.unauthenticated,
                registerData
            );

            setValidations({});
            setLoading(false);
            navigate(PATHS.registerConfirmation);
        } catch (error: any) {
            if (error.response.status === 404 || error.response.status === 401 || error.response.status === 422) {
                setValidations(error.response.data);
                setLoading(false);
            }
        }
    };

    return (
        <div className="register">
            <form className="form" method="post" onSubmit={(e) => userRegister(e)}>
                <div className="form__logo">
                    <img src={ThommasGroupeLogo} alt="ThommasGroupe" />
                </div>

                <span className="register__title body-normal__semibold">Zugang anfragen</span>

                <div className="register__box">
                    {/*First Name*/}
                    <div className="input-field">
                        <label
                            htmlFor="first_name"
                            className={`input-field__label caption__regular 
                                    ${
                                        isFirstNameError
                                            ? "input-field__label--error"
                                            : isFirstNameFocused
                                            ? "input-field__label--focused"
                                            : ""
                                    }
                                `}
                        >
                            Vorname
                            {isInputRequired && <span className="input-field__label--required">*</span>}
                        </label>
                        <input
                            id="first_name"
                            className={`input-field__content body-normal__regular ${
                                isFirstNameError ? "input-field__content--error" : ""
                            }`}
                            type="text"
                            name="first_name"
                            placeholder="Geben Sie Ihren Vornamen an."
                            value={firstName}
                            onChange={handleInputChange(setFirstName, setIsFirstNameError)}
                            onFocus={handleInputFocus(setIsFirstNameFocused)}
                            onBlur={handleInputBlur(firstName, setIsFirstNameError, setIsFirstNameFocused)}
                        />

                        {validations.first_name ? (
                            <div className="input-field--error-message caption__regular">{validations.first_name}</div>
                        ) : (
                            isFirstNameError && (
                                <div className="input-field--error-message caption__regular">
                                    First Name is required!
                                </div>
                            )
                        )}
                    </div>
                    {/*Last Name*/}
                    <div className="input-field">
                        <label
                            htmlFor="last_name"
                            className={`input-field__label caption__regular 
                                    ${
                                        isLastNameError
                                            ? "input-field__label--error"
                                            : isLastNameFocused
                                            ? "input-field__label--focused"
                                            : ""
                                    }
                                `}
                        >
                            Nachname
                            {isInputRequired && <span className="input-field__label--required">*</span>}
                        </label>
                        <input
                            id="last_name"
                            className={`input-field__content body-normal__regular ${
                                isLastNameError ? "input-field__content--error" : ""
                            }`}
                            type="text"
                            name="last_name"
                            placeholder="Geben Sie Ihren Nachnamen ein."
                            value={lastName}
                            onChange={handleInputChange(setLastName, setIsLastNameError)}
                            onFocus={handleInputFocus(setIsLastNameFocused)}
                            onBlur={handleInputBlur(lastName, setIsLastNameError, setIsLastNameFocused)}
                        />

                        {validations.last_name ? (
                            <div className="input-field--error-message caption__regular">{validations.last_name}</div>
                        ) : (
                            isLastNameError && (
                                <div className="input-field--error-message caption__regular">
                                    Last Name is required!
                                </div>
                            )
                        )}
                    </div>
                    {/*Email*/}
                    <div className="input-field">
                        <label
                            htmlFor="email"
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
                            E-Mail-Adresse
                            {isInputRequired && <span className="input-field__label--required">*</span>}
                        </label>
                        <input
                            id="email"
                            className={`input-field__content body-normal__regular ${
                                isEmailError ? "input-field__content--error" : ""
                            }`}
                            type="text"
                            name="email"
                            placeholder="Geben Sie Ihre E-Mail-Adresse an."
                            value={email}
                            onChange={handleInputChange(setEmail, setIsEmailError)}
                            onFocus={handleInputFocus(setIsEmailFocused)}
                            onBlur={handleInputBlur(email, setIsEmailError, setIsEmailFocused)}
                        />
                        {validations.email ? (
                            <div className="input-field--error-message caption__regular">{validations.email}</div>
                        ) : (
                            isEmailError && (
                                <div className="input-field--error-message caption__regular">Email is required!</div>
                            )
                        )}
                    </div>
                    {/*Company*/}
                    <div className="input-field">
                        <label
                            htmlFor="company"
                            className={`input-field__label caption__regular 
                                    ${
                                        isCompanyError
                                            ? "input-field__label--error"
                                            : isCompanyFocused
                                            ? "input-field__label--focused"
                                            : ""
                                    }
                                `}
                        >
                            Unternehmen
                            {isInputRequired && <span className="input-field__label--required">*</span>}
                        </label>
                        <input
                            id="company"
                            className={`input-field__content body-normal__regular ${
                                isCompanyError ? "input-field__content--error" : ""
                            }`}
                            type="text"
                            name="company"
                            placeholder="Nennen Sie Ihr Unternehmen"
                            value={company}
                            onChange={handleInputChange(setCompany, setIsCompanyError)}
                            onFocus={handleInputFocus(setIsCompanyFocused)}
                            onBlur={handleInputBlur(company, setIsCompanyError, setIsCompanyFocused)}
                        />
                        {validations.company ? (
                            <div className="input-field--error-message caption__regular">{validations.company}</div>
                        ) : (
                            isCompanyError && (
                                <div className="input-field--error-message caption__regular">Company is required!</div>
                            )
                        )}
                    </div>
                    {/*Position*/}
                    <div className="input-field">
                        <label
                            htmlFor="position"
                            className={`input-field__label caption__regular 
                                    ${
                                        isPositionError
                                            ? "input-field__label--error"
                                            : isPositionFocused
                                            ? "input-field__label--focused"
                                            : ""
                                    }
                                `}
                        >
                            Position
                            {isInputRequired && <span className="input-field__label--required">*</span>}
                        </label>
                        <input
                            id="position"
                            className={`input-field__content body-normal__regular ${
                                isPositionError ? "input-field__content--error" : ""
                            }`}
                            type="text"
                            name="position"
                            placeholder="Ihre Position im Unternehmen"
                            value={position}
                            onChange={handleInputChange(setPosition, setIsPositionError)}
                            onFocus={handleInputFocus(setIsPositionFocused)}
                            onBlur={handleInputBlur(position, setIsPositionError, setIsPositionFocused)}
                        />

                        {validations.position ? (
                            <div className="input-field--error-message caption__regular">{validations.position}</div>
                        ) : (
                            isPositionError && (
                                <div className="input-field--error-message caption__regular">Position is required!</div>
                            )
                        )}
                    </div>
                    {/*Select Company type*/}
                    <div className="select-field">
                        <label
                            htmlFor="company_type"
                            className={`select-field__label caption__regular 
                                                    ${
                                                        isSelectedOptionError
                                                            ? "select-field__label--error"
                                                            : isSelectedOptionFocused
                                                            ? "select-field__label--focused"
                                                            : ""
                                                    }
                                                `}
                        >
                            Art des Unternehmen
                            {isSelectedOptionRequired && <span className="select-field__label--required">*</span>}
                        </label>

                        {isSelectedOptionDisabled && <i className="select-field__disabled icon-lock"></i>}

                        <Select
                            id="company_type"
                            classNamePrefix="react-select"
                            className={`select-field__content body-normal__regular ${selectedOption ? "filled" : ""}`}
                            placeholder="Wählen Sie die Art ihres Unternehmens"
                            value={options[0]}
                            options={options}
                            isClearable={false}
                            isDisabled={isSelectedOptionDisabled}
                            closeMenuOnSelect={true}
                            name="company_type"
                            isSearchable={true}
                            onChange={handleSelectChange}
                            onFocus={() => setIsSelectedOptionFocused(true)}
                            onBlur={() => {
                                setIsSelectedOptionFocused(false);
                                if (isSelectedOptionRequired && !selectedOption) {
                                    setIsSelectedOptionError(true);
                                }
                            }}
                        />

                        {isSelectedOptionError && (
                            <div className="select-field--error-message caption__regular">This field is required</div>
                        )}
                    </div>
                </div>

                <div className="forgot-password__button">
                    <Link to={PATHS.login} className="button button--big button-gost button--grey">
                        <i className="button__icon icon-arrow-left"></i>
                        <span className="button__text">Zurück</span>
                    </Link>
                    {loading ? (
                        <button
                            id="forgot-password"
                            className="register__button-register button button--big button--green"
                            type="button"
                            name="forgot-password"
                        >
                            <span className="button__text">Zugang anfragen</span>
                        </button>
                    ) : (
                        <button
                            id="forgot-password"
                            className="register__button-register button button--big button--green"
                            type="submit"
                            name="forgot-password"
                        >
                            <span className="button__text">Zugang anfragen</span>
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Register;
