import React, {useState} from "react";
import Select, {SingleValue} from "react-select";
import CreateUserTable from "./CreateUserTable";

const options = [
    {value: 'chocolate', label: 'Chocolate with love '},
    {value: 'strawberry', label: 'Strawberry with test'},
    {value: 'vanilla', label: 'Vanilla test'},
];

const EditUserForm = () => {
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

    // Select option Fields
    const [selectedOption1, setSelectedOption1] = useState<{ value: string; label: string } | null>(null);
    const [selectedOption2, setSelectedOption2] = useState<{ value: string; label: string } | null>(null);
    const [selectedOption3, setSelectedOption3] = useState<{ value: string; label: string } | null>(null);
    const [isSelectedOption1Focused, setIsSelectedOption1Focused] = useState<boolean>(false);
    const [isSelectedOption2Focused, setIsSelectedOption2Focused] = useState<boolean>(false);
    const [isSelectedOption3Focused, setIsSelectedOption3Focused] = useState<boolean>(false);
    const [isSelectedOption1Error, setIsSelectedOption1Error] = useState<boolean>(false);
    const [isSelectedOption2Error, setIsSelectedOption2Error] = useState<boolean>(false);
    const [isSelectedOption3Error, setIsSelectedOption3Error] = useState<boolean>(false);
    const isSelectedOptionRequired = true;

    const handleSelectChange1 = (newValue: SingleValue<{ value: string; label: string }>) => {
        setSelectedOption1(newValue);
        if (isSelectedOptionRequired && !newValue) {
            setIsSelectedOption1Error(true);
        } else {
            setIsSelectedOption1Error(false);
        }
    };
    const handleSelectChange2 = (newValue: SingleValue<{ value: string; label: string }>) => {
        setSelectedOption2(newValue);
        if (isSelectedOptionRequired && !newValue) {
            setIsSelectedOption2Error(true);
        } else {
            setIsSelectedOption2Error(false);
        }
    };
    const handleSelectChange3 = (newValue: SingleValue<{ value: string; label: string }>) => {
        setSelectedOption3(newValue);
        if (isSelectedOptionRequired && !newValue) {
            setIsSelectedOption3Error(true);
        } else {
            setIsSelectedOption3Error(false);
        }
    };

    // Select Order
    const [selectOrder, setSelectOrder] = useState<{ value: string; label: string } | null>(null);
    const [isSelectOrderFocused, setIsSelectOrderFocused] = useState<boolean>(false);
    const [isSelectOrderError, setIsSelectOrderError] = useState<boolean>(false);
    const isSelectOrderRequired = false;
    const handleSelectOrderChange = (newValue: SingleValue<{ value: string; label: string }>) => {
        setSelectOrder(newValue);
        if (isSelectOrderRequired && !newValue) {
            setIsSelectOrderError(true);
        } else {
            setIsSelectOrderError(false);
        }
    };

    return (
            <div className="edit-user__form">
                <form className="form">
                    <div className="edit-user__form--content">
                        <div className="divider">
                            <span className="divider__title body-small__regular">Persönliche Daten</span>
                            <span className="divider__solid"></span>
                        </div>

                        <div className="edit-user__form--box">
                            {/* Surname Field */}
                            <div className="edit-user__form--box-item">
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
                            <div className="edit-user__form--box-item">
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
                            <div className="edit-user__form--box-item">
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
                            <div className="edit-user__form--box-item">
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
                            <span className="divider__title body-small__regular">Kunden Daten</span>
                            <span className="divider__solid"></span>
                        </div>

                        <div className="edit-user__form--box">
                            {/* Funktion */}
                            <div className="edit-user__form--box-item">
                                <div className="select-field">
                                    <label htmlFor="function" className={`select-field__label caption__regular 
                                    ${isSelectedOption1Error ? 'select-field__label--error' : isSelectedOption1Focused ? 'select-field__label--focused' : ''}
                                `}>
                                        Funktion
                                        {isSelectedOptionRequired &&
                                                <span className="select-field__label--required">*</span>}
                                    </label>

                                    <Select
                                            id="function"
                                            classNamePrefix="react-select"
                                            className={`select-field__content body-normal__regular ${selectedOption1 ? "filled" : ""}`}
                                            placeholder="Wählen Sie eine Funktion aus"
                                            value={selectedOption1}
                                            options={options}
                                            isClearable={true}
                                            closeMenuOnSelect={true}
                                            name="function"
                                            isSearchable={true}
                                            onChange={handleSelectChange1}
                                            onFocus={() => setIsSelectedOption1Focused(true)}
                                            onBlur={() => {
                                                setIsSelectedOption1Focused(false);
                                                if (isSelectedOptionRequired && !selectedOption1) {
                                                    setIsSelectedOption1Error(true);
                                                }
                                            }}
                                    />

                                    {isSelectedOption1Error &&
                                            <div className="select-field--error-message caption__regular">This field is
                                                required</div>}
                                </div>
                            </div>

                            {/* Unternehmen */}
                            <div className="edit-user__form--box-item">
                                <div className="select-field">
                                    <label htmlFor="company" className={`select-field__label caption__regular 
                                    ${isSelectedOption2Error ? 'select-field__label--error' : isSelectedOption2Focused ? 'select-field__label--focused' : ''}
                                `}>
                                        Unternehmen
                                        {isSelectedOptionRequired &&
                                                <span className="select-field__label--required">*</span>}
                                    </label>

                                    <Select
                                            id="company"
                                            classNamePrefix="react-select"
                                            className={`select-field__content body-normal__regular ${selectedOption2 ? "filled" : ""}`}
                                            placeholder="Wählen Sie eine Funktion aus"
                                            value={selectedOption2}
                                            options={options}
                                            isClearable={true}
                                            closeMenuOnSelect={true}
                                            name="company"
                                            isSearchable={true}
                                            onChange={handleSelectChange2}
                                            onFocus={() => setIsSelectedOption2Focused(true)}
                                            onBlur={() => {
                                                setIsSelectedOption2Focused(false);
                                                if (isSelectedOptionRequired && !selectedOption2) {
                                                    setIsSelectedOption2Error(true);
                                                }
                                            }}
                                    />

                                    {isSelectedOption2Error &&
                                            <div className="select-field--error-message caption__regular">This field is
                                                required</div>}
                                </div>
                            </div>

                            {/* Accounts */}
                            <div className="edit-user__form--box-item">
                                <div className="select-field">
                                    <label htmlFor="account" className={`select-field__label caption__regular 
                                    ${isSelectedOption3Error ? 'select-field__label--error' : isSelectedOption3Focused ? 'select-field__label--focused' : ''}
                                `}>
                                        Accounts
                                        {isSelectedOptionRequired &&
                                                <span className="select-field__label--required">*</span>}
                                    </label>

                                    <Select
                                            id="account"
                                            classNamePrefix="react-select"
                                            className={`select-field__content body-normal__regular ${selectedOption3 ? "filled" : ""}`}
                                            placeholder="Wählen Sie eine Funktion aus"
                                            value={selectedOption3}
                                            options={options}
                                            isClearable={true}
                                            closeMenuOnSelect={true}
                                            name="account"
                                            isSearchable={true}
                                            onChange={handleSelectChange3}
                                            onFocus={() => setIsSelectedOption3Focused(true)}
                                            onBlur={() => {
                                                setIsSelectedOption3Focused(false);
                                                if (isSelectedOptionRequired && !selectedOption3) {
                                                    setIsSelectedOption3Error(true);
                                                }
                                            }}
                                    />

                                    {isSelectedOption3Error &&
                                            <div className="select-field--error-message caption__regular">This field is
                                                required</div>}
                                </div>
                            </div>
                        </div>

                        <div className="divider">
                            <span className="divider__title body-small__regular">Aufträge</span>
                            <span className="divider__solid"></span>
                        </div>

                        <div className="edit-user__form--select-box">
                            {/* Select order here */}
                            <div className="edit-user__form--box-item">
                                <div className="select-field">
                                    <label htmlFor="order" className={`select-field__label caption__regular 
                                    ${isSelectOrderError ? 'select-field__label--error' : isSelectOrderFocused ? 'select-field__label--focused' : ''}
                                `}>
                                        Auftrag
                                        {isSelectOrderRequired &&
                                                <span className="select-field__label--required">*</span>}
                                    </label>

                                    <div className="select-field__wrapper">
                                        <i className="select-field__wrapper--icon icon-magnifying-glass"/>
                                        <Select
                                                id="order"
                                                classNamePrefix="react-select"
                                                className={`select-field__content body-normal__regular ${selectOrder ? "filled" : ""}`}
                                                placeholder="Geben Sie die Auftragsnummer oder -name ein"
                                                value={selectOrder}
                                                options={options}
                                                isClearable={true}
                                                closeMenuOnSelect={true}
                                                name="order"
                                                isSearchable={true}
                                                onChange={handleSelectOrderChange}
                                                onFocus={() => setIsSelectOrderFocused(true)}
                                                onBlur={() => {
                                                    setIsSelectOrderFocused(false);
                                                    if (isSelectOrderRequired && !selectOrder) {
                                                        setIsSelectOrderError(true);
                                                    }
                                                }}
                                        />
                                    </div>

                                    {isSelectOrderError &&
                                            <div className="select-field--error-message caption__regular">This field is
                                                required</div>}
                                </div>
                            </div>

                            {/* Order table here */}
                            {selectOrder ?  <CreateUserTable />
                                    : <span className="edit-user__form--text body-normal__regular">Sie haben keine Aufträge zugewiesen</span>
                            }

                        </div>
                    </div>
                </form>
            </div>
    );
};

export default EditUserForm;
