import React, {useState} from "react";
import Select, {SingleValue} from "react-select";
import UploadFile from "../../../UploadFile";

const options = [
    {value: 'chocolate', label: 'Chocolate with love '},
    {value: 'strawberry', label: 'Strawberry with test'},
    {value: 'vanilla', label: 'Vanilla test'},
];

interface PlaneErsetzenFormProps {
    itemIndex: number;
}

const PlaneErsetzenForm: React.FC<PlaneErsetzenFormProps> = ({itemIndex}) => {

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
    const isSelectedOptionDisabled = true;
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

    // text area count start
    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isError, setIsError] = useState(false);
    const maxLength = 100;
    const isRequired = false; // Set this to true for required fields
    const handleChange = (event: { target: { value: string } }) => {
        setText(event.target.value);
        if (isRequired && event.target.value.trim() === '') {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };
    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
        if (isRequired && text.trim() === '') {
            setIsError(true);
        }
    };

    // Input state and handlers
    const [indexValue, setIndexValue] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isInputError, setIsInputError] = useState(false);
    const [isInputDisabled, setIsInputDisabled] = useState(true);
    const isInputRequired = false; // Set this to true for required fields
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIndexValue(e.target.value);
        if (isInputRequired && e.target.value.trim() === '') {
            setIsInputError(true);
        } else {
            setIsInputError(false);
        }
    };
    const handleInputFocus = () => {
        setIsInputFocused(true);
    };
    const handleInputBlur = () => {
        setIsInputFocused(false);
        if (isInputRequired && indexValue.trim() === '') {
            setIsInputError(true);
        }
    };

    // Radio buttons
    const [upload, setUpload] = useState("actualInput");
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedUpload = e.target.value;
        setUpload(selectedUpload);
        if (selectedUpload === "newInput") {
            setIsInputDisabled(false);
        }
        else setIsInputDisabled(true);
    };

    return (
            <>
                <div className="replace-plan__form">
                    <form className="form" method="post">
                        <div className="replace-plan__form--content">

                            <div className="divider">
                                <span className="divider__title body-small__regular">
                                    Datei
                                </span>
                                <span className="divider__dotted"></span>
                            </div>

                            <div className="replace-plan__form--box">
                                <div className="replace-plan__form--box-item">
                                    <UploadFile inputId={`${itemIndex}`}/>
                                </div>

                                <div className="replace-plan__form--box-item">
                                    <div className="replace-plan__form--box-item--content">
                                        <div className="replace-plan__form--select">
                                            {/*Auftrag*/}
                                            <div className="select-field">
                                                <label htmlFor="function" className={`select-field__label caption__regular 
                                                    ${isSelectedOption1Error ? 'select-field__label--error' : isSelectedOption1Focused ? 'select-field__label--focused' : ''}
                                                `}>
                                                    Auftrag
                                                    {isSelectedOptionRequired &&
                                                            <span className="select-field__label--required">*</span>}
                                                </label>

                                                {isSelectedOptionDisabled &&
                                                        <i className="select-field__disabled icon-lock"></i>}

                                                <Select
                                                        id="function"
                                                        classNamePrefix="react-select"
                                                        className={`select-field__content body-normal__regular ${selectedOption1 ? "filled" : ""}`}
                                                        placeholder="80700"
                                                        value={selectedOption1}
                                                        options={options}
                                                        isClearable={true}
                                                        isDisabled={isSelectedOptionDisabled}
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
                                                        <div className="select-field--error-message caption__regular">This
                                                            field is
                                                            required</div>}
                                            </div>
                                        </div>

                                        <div className="replace-plan__form--select">
                                            {/*Ansprechpartner*/}
                                            <div className="select-field">
                                                <label htmlFor="company" className={`select-field__label caption__regular 
                                                    ${isSelectedOption2Error ? 'select-field__label--error' : isSelectedOption2Focused ? 'select-field__label--focused' : ''}
                                                `}>
                                                    Ansprechpartner
                                                    {isSelectedOptionRequired &&
                                                            <span className="select-field__label--required">*</span>}
                                                </label>

                                                <Select
                                                        id="company"
                                                        classNamePrefix="react-select"
                                                        className={`select-field__content body-normal__regular ${selectedOption2 ? "filled" : ""}`}
                                                        placeholder="Wählen Sie Ihren Ansprechpartner"
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
                                                        <div className="select-field--error-message caption__regular">This
                                                            field is
                                                            required</div>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="replace-plan__form--box-item--content">
                                        <div className="replace-plan__form--select">
                                            {/*Plan Kategorie*/}
                                            <div className="select-field">
                                                <label htmlFor="account" className={`select-field__label caption__regular 
                                                    ${isSelectedOption3Error ? 'select-field__label--error' : isSelectedOption3Focused ? 'select-field__label--focused' : ''}
                                                `}>
                                                    Plan Kategorie
                                                    {isSelectedOptionRequired &&
                                                            <span className="select-field__label--required">*</span>}
                                                </label>

                                                <Select
                                                        id="account"
                                                        classNamePrefix="react-select"
                                                        className={`select-field__content body-normal__regular ${selectedOption3 ? "filled" : ""}`}
                                                        placeholder="Elektroplan"
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
                                                        <div className="select-field--error-message caption__regular">This
                                                            field is
                                                            required</div>}
                                            </div>
                                        </div>

                                        <div className="replace-plan__form--select">
                                            {/*Index*/}
                                            <div className="input-field">
                                                <label htmlFor={`index`}
                                                       className={`input-field__label caption__regular 
                                                            ${isInputError ? 'input-field__label--error' : isInputFocused ? 'input-field__label--focused' : ''}
                                                       `}
                                                >
                                                    Index
                                                    {isInputRequired ?
                                                            <span className="input-field__label--required">*</span> : ""}
                                                </label>

                                                <div className="replace-plan__form--input form-radio">
                                                    <label className="body-normal__regular radio-button">
                                                        <input className="radio-input"
                                                               type="radio"
                                                               value="actualInput"
                                                               checked={upload === "actualInput"}
                                                               onChange={handleRadioChange}
                                                        />
                                                        Index: A
                                                    </label>
                                                </div>
                                                <div className="replace-plan__form--input-index">
                                                    <div className="form-radio">
                                                        <label className="body-normal__regular radio-button">
                                                            <input className="radio-input"
                                                                   type="radio"
                                                                   value="newInput"
                                                                   checked={upload === "newInput"}
                                                                   onChange={handleRadioChange}
                                                            />
                                                            Neuer Index
                                                        </label>
                                                    </div>

                                                    <input
                                                            id={`index`}
                                                            className={`input-field__content body-normal__regular ${isInputError ? 'input-field__content--error' : ''}`}
                                                            type="text"
                                                            name={`index`}
                                                            placeholder="Neuer Index Wert"
                                                            value={indexValue}
                                                            disabled={isInputDisabled}
                                                            onChange={handleInputChange}
                                                            onFocus={handleInputFocus}
                                                            onBlur={handleInputBlur}
                                                    />
                                                </div>

                                                {isInputError &&
                                                        <div className="input-field--error-message caption__regular">This
                                                            field is required</div>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-area">
                                        <label className={`text-area__label caption__regular 
                                            ${isError ? 'text-area__label--error' : isFocused ? 'text-area__label--focused' : ''}
                                            
                                            `}
                                               htmlFor={`upload-text$`}
                                        >
                                            Komentar
                                            {isRequired ? <span className="text-area__label--required">*</span> : ""}
                                        </label>
                                        <textarea
                                                id={`upload-text`}
                                                className={`text-area__content body-normal__regular ${isError ? 'text-area__content--error' : ''}`}
                                                placeholder="Welche information mochten sie uns mittellen?"
                                                maxLength={maxLength}
                                                value={text}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                                rows={4}
                                        />
                                        <div className="text-area__count caption__regular">
                                            {isError &&
                                                    <div className="text-area__count--error-message">This field is
                                                        required</div>}
                                            <div className="text-area__count--text">{text.length} / {maxLength} Wörter</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
    );
};

export default PlaneErsetzenForm;