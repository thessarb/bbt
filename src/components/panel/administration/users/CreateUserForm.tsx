import React, { useState } from "react";
import Select, {SingleValue} from "react-select";

const options = [
    { value: 'chocolate', label: 'Chocolate with love ' },
    { value: 'strawberry', label: 'Strawberry with test' },
    { value: 'vanilla', label: 'Vanilla test' },
];

const CreateUserForm = () => {
    // Input Fields
    const [surname, setSurname] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [isSurnameFocused, setIsSurnameFocused] = useState<boolean>(false);
    const [isNameFocused, setIsNameFocused] = useState<boolean>(false);
    const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState<boolean>(false);

    const [isSurnameError, setIsSurnameError] = useState<boolean>(false);
    const [isNameError, setIsNameError] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const [isPhoneError, setIsPhoneError] = useState<boolean>(false);

    const isInputRequired = true;

    const handleInputChange = (
            setter: React.Dispatch<React.SetStateAction<string>>,
            setError: React.Dispatch<React.SetStateAction<boolean>>
    ) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
        if (isInputRequired && e.target.value.trim() === '') {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleInputFocus = (
            setFocus: React.Dispatch<React.SetStateAction<boolean>>
    ) => () => {
        setFocus(true);
    };

    const handleInputBlur = (
            value: string,
            setError: React.Dispatch<React.SetStateAction<boolean>>,
            setFocus: React.Dispatch<React.SetStateAction<boolean>>
    ) => () => {
        setFocus(false);
        if (isInputRequired && value.trim() === '') {
            setError(true);
        }
    };

    // Select Fields
    const [selectedOption1, setSelectedOption1] = useState<{ value: string; label: string } | null>(null);
    const [selectedOption2, setSelectedOption2] = useState<{ value: string; label: string } | null>(null);
    const [selectedOption3, setSelectedOption3] = useState<{ value: string; label: string } | null>(null);

    const handleSelectChange1 = (newValue: SingleValue<{ value: string; label: string }>) => {
        setSelectedOption1(newValue);
    };
    const handleSelectChange2 = (newValue: SingleValue<{ value: string; label: string }>) => {
        setSelectedOption2(newValue);
    };
    const handleSelectChange3 = (newValue: SingleValue<{ value: string; label: string }>) => {
        setSelectedOption3(newValue);
    };

    return (
            <div className="create-user__form">
                <form className="form" method="post">
                    <div className="create-user__form--content">
                        <div className="divider">
                            <span className="create-user__form--title body-small__regular">Persönliche Daten</span>
                            <span className="divider__solid"></span>
                        </div>

                        <div className="create-user__form--box">
                            {/* Surname Field */}
                            <div className="create-user__form--box-item">
                                <div className="input-field">
                                    <label htmlFor="surname" className={`input-field__label caption__regular 
                                    ${isSurnameError ? 'input-field__label--error' : isSurnameFocused ? 'input-field__label--focused' : ''}
                                `}>
                                        Nachname
                                        {isInputRequired && <span className="input-field__label--required">*</span>}
                                    </label>
                                    <input
                                            id="surname"
                                            className={`input-field__content body-normal__regular ${isSurnameError ? 'input-field__content--error' : ''}`}
                                            type="text"
                                            name="surname"
                                            placeholder="Geben Sie Ihren Nachnamen an"
                                            value={surname}
                                            onChange={handleInputChange(setSurname, setIsSurnameError)}
                                            onFocus={handleInputFocus(setIsSurnameFocused)}
                                            onBlur={handleInputBlur(surname, setIsSurnameError, setIsSurnameFocused)}
                                    />
                                    {isSurnameError &&
                                            <div className="input-field--error-message caption__regular">This field is
                                                required</div>}
                                </div>
                            </div>

                            {/* Name Field */}
                            <div className="create-user__form--box-item">
                                <div className="input-field">
                                    <label htmlFor="name" className={`input-field__label caption__regular 
                                    ${isNameError ? 'input-field__label--error' : isNameFocused ? 'input-field__label--focused' : ''}
                                `}>
                                        Vorname
                                        {isInputRequired && <span className="input-field__label--required">*</span>}
                                    </label>
                                    <input
                                            id="name"
                                            className={`input-field__content body-normal__regular ${isNameError ? 'input-field__content--error' : ''}`}
                                            type="text"
                                            name="name"
                                            placeholder="Geben Sie Ihren Vornamen an"
                                            value={name}
                                            onChange={handleInputChange(setName, setIsNameError)}
                                            onFocus={handleInputFocus(setIsNameFocused)}
                                            onBlur={handleInputBlur(name, setIsNameError, setIsNameFocused)}
                                    />
                                    {isNameError &&
                                            <div className="input-field--error-message caption__regular">This field is
                                                required</div>}
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="create-user__form--box-item">
                                <div className="input-field">
                                    <label htmlFor="email" className={`input-field__label caption__regular 
                                    ${isEmailError ? 'input-field__label--error' : isEmailFocused ? 'input-field__label--focused' : ''}
                                `}>
                                        E-Mail-Adresse
                                        {isInputRequired && <span className="input-field__label--required">*</span>}
                                    </label>
                                    <input
                                            id="email"
                                            className={`input-field__content body-normal__regular ${isEmailError ? 'input-field__content--error' : ''}`}
                                            type="email"
                                            name="email"
                                            placeholder="Tragen Sie Ihre E-Mail-Adresse ein"
                                            value={email}
                                            onChange={handleInputChange(setEmail, setIsEmailError)}
                                            onFocus={handleInputFocus(setIsEmailFocused)}
                                            onBlur={handleInputBlur(email, setIsEmailError, setIsEmailFocused)}
                                    />
                                    {isEmailError &&
                                            <div className="input-field--error-message caption__regular">This field is
                                                required</div>}
                                </div>
                            </div>

                            {/* Phone Field */}
                            <div className="create-user__form--box-item">
                                <div className="input-field">
                                    <label htmlFor="phone" className={`input-field__label caption__regular 
                                    ${isPhoneError ? 'input-field__label--error' : isPhoneFocused ? 'input-field__label--focused' : ''}
                                `}>
                                        Telefon
                                        {isInputRequired && <span className="input-field__label--required">*</span>}
                                    </label>
                                    <input
                                            id="phone"
                                            className={`input-field__content body-normal__regular ${isPhoneError ? 'input-field__content--error' : ''}`}
                                            type="tel"
                                            name="phone"
                                            placeholder="Ihre Telefonnummer"
                                            value={phone}
                                            onChange={handleInputChange(setPhone, setIsPhoneError)}
                                            onFocus={handleInputFocus(setIsPhoneFocused)}
                                            onBlur={handleInputBlur(phone, setIsPhoneError, setIsPhoneFocused)}
                                    />
                                    {isPhoneError &&
                                            <div className="input-field--error-message caption__regular">This field is
                                                required</div>}
                                </div>
                            </div>
                        </div>

                        <div className="divider">
                            <span className="create-user__form--title body-small__regular">Kunden Daten</span>
                            <span className="divider__solid"></span>
                        </div>

                        <div className="create-user__form--box">
                            {/* Funktion */}
                            <div className="create-user__form--box-item">
                                <div className="form__field-select">
                                    <label htmlFor="function"
                                           className={`form__label caption__regular ${selectedOption1 ? "filled" : ""}`}>
                                        Funktion
                                        <span className="form__label-mandatory">*</span>
                                    </label>

                                    <Select
                                            id="function"
                                            classNamePrefix="react-select"
                                            className={`form__select body-normal__regular ${selectedOption1 ? "filled" : ""}`}
                                            placeholder="Wählen Sie eine Funktion aus"
                                            value={selectedOption1}
                                            onChange={handleSelectChange1}
                                            options={options}
                                            isClearable={true}
                                            closeMenuOnSelect={true}
                                            name="function"
                                            isSearchable={true}
                                    />
                                    <span className="error-message caption__regular">Error message</span>
                                </div>
                            </div>

                            {/* Unternehmen */}
                            <div className="create-user__form--box-item">
                                <div className="form__field-select">
                                    <label htmlFor="company"
                                           className={`form__label caption__regular ${selectedOption2 ? "filled" : ""}`}>
                                        Unternehmen
                                        <span className="form__label-mandatory">*</span>
                                    </label>

                                    <Select
                                            id="company"
                                            classNamePrefix="react-select"
                                            className={`form__select body-normal__regular ${selectedOption2 ? "filled" : ""}`}
                                            placeholder="Wählen Sie ein Unternehmen aus"
                                            value={selectedOption2}
                                            onChange={handleSelectChange2}
                                            options={options}
                                            isClearable={true}
                                            closeMenuOnSelect={true}
                                            name="company"
                                            isSearchable={true}
                                            required
                                    />
                                    <span className="error-message caption__regular">Error message</span>
                                </div>
                            </div>

                            {/* Accounts */}
                            <div className="create-user__form--box-item">
                                <div className="form__field-select">
                                    <label htmlFor="account"
                                           className={`form__label caption__regular ${selectedOption3 ? "filled" : ""}`}>
                                        Accounts
                                        <span className="form__label-mandatory">*</span>
                                    </label>

                                    <Select
                                            id="account"
                                            classNamePrefix="react-select"
                                            className={`form__select body-normal__regular ${selectedOption3 ? "filled" : ""}`}
                                            placeholder="Wählen Sie die verknüpften Accounts aus"
                                            value={selectedOption3}
                                            onChange={handleSelectChange3}
                                            options={options}
                                            isClearable={true}
                                            closeMenuOnSelect={true}
                                            name="account"
                                            isSearchable={true}
                                            required
                                    />
                                    <span className="error-message caption__regular">Error message</span>
                                </div>
                            </div>
                        </div>

                        <div className="divider">
                            <span className="create-user__form--title body-small__regular">Aufträge</span>
                            <span className="divider__solid"></span>
                        </div>

                        <div className="create-user__form--select-box">
                            {/* Select order here */}
                            <div className="create-user__form--box-item">
                                Select order here
                            </div>
                            {/* Order table here */}
                            <div className="create-user__form--order-table">
                                Order table here
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default CreateUserForm;
