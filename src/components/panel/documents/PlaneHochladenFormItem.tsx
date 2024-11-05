import React, {useState} from "react";
import Select, {SingleValue} from "react-select";
import UploadFile from "../../UploadFile";

const options = [
    { value: 'chocolate', label: 'Chocolate with love ' },
    { value: 'strawberry', label: 'Strawberry with test' },
    { value: 'vanilla', label: 'Vanilla test' },
];

interface PlaneHochladenFormItemProps {
    upload: string;
}

const PlaneHochladenFormItem: React.FC<PlaneHochladenFormItemProps> = ({ upload}) => {
    // Select
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

    // text area count start
    const [text, setText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isError, setIsError] = useState(false);
    const maxLength = 100;
    const isRequired = true; // Set this to true for required fields

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
    const isInputRequired = true; // Set this to true for required fields

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

    return (
            <>
                <div className="divider">
                    <span className="divider__title body-small__regular">
                        {`Datei`}
                    </span>
                    <span className="divider__dotted"></span>
                </div>

                <div className="upload-plan__box">

                    {upload === "upload" &&
                        <div className="upload-plan__box-item">
                            <UploadFile inputId={"gazi"}/>
                        </div>
                    }

                    <div className="upload-plan__box-item">
                        <div className="upload-plan__box-item--content">
                            <div className="upload-plan__select">
                                <div className="form__field-select">
                                    <label htmlFor="order"
                                           className={`form__label caption__regular ${selectedOption1 ? "filled" : ""}`}>
                                        Auftrag
                                        <span className="form__label-mandatory">*</span>
                                    </label>

                                    <Select
                                            id="order"
                                            classNamePrefix="react-select"
                                            className={`form__select body-normal__regular ${selectedOption1 ? "filled" : ""}`}
                                            placeholder="Nählen Sie Ihre Auftrag"
                                            value={selectedOption1}
                                            onChange={handleSelectChange1}
                                            options={options}
                                            isClearable={true}
                                            closeMenuOnSelect={true}
                                            name="order"
                                            isSearchable={true}
                                    />
                                    <span className="error-message caption__regular">Error message</span>
                                </div>
                            </div>
                            <div className="upload-plan__select">
                                <div className="form__field-select">
                                    <label htmlFor="contact-person"
                                           className={`form__label caption__regular ${selectedOption2 ? "filled" : ""}`}>
                                        Ansprechpartner
                                        <span className="form__label-mandatory">*</span>
                                    </label>

                                    <Select
                                            id="contact-person"
                                            classNamePrefix="react-select"
                                            className={`form__select body-normal__regular ${selectedOption2 ? "filled" : ""}`}
                                            placeholder="Nählen Sie Ihre Ansprechpartner"
                                            value={selectedOption2}
                                            onChange={handleSelectChange2}
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
                        </div>

                        <div className="upload-plan__box-item--content">
                            <div className="upload-plan__select">
                                <div className="form__field-select">
                                    <label htmlFor="plan-company"
                                           className={`form__label caption__regular ${selectedOption3 ? "filled" : ""}`}>
                                        Plan Kategorie
                                        <span className="form__label-mandatory">*</span>
                                    </label>

                                    <Select
                                            id="plan-company"
                                            classNamePrefix="react-select"
                                            className={`form__select body-normal__regular ${selectedOption3 ? "filled" : ""}`}
                                            placeholder="Nählen Sie Ihre Plan Kategorie"
                                            value={selectedOption3}
                                            onChange={handleSelectChange3}
                                            options={options}
                                            isClearable={true}
                                            closeMenuOnSelect={true}
                                            name="plan-category"
                                            isSearchable={true}
                                            required
                                    />
                                    <span className="error-message caption__regular">Error message</span>
                                </div>
                            </div>

                            <div className="upload-plan__select">
                                <div className="input-field">
                                    <label htmlFor={`index`}
                                           className={`input-field__label caption__regular 
                                           ${isInputError ? 'input-field__label--error' : isInputFocused ? 'input-field__label--focused' : ''}
                                           `}
                                    >
                                        Index
                                        {isInputRequired ? <span className="input-field__label--required">*</span> : ""}
                                    </label>
                                    <input
                                            id={`index`}
                                            className={`input-field__content body-normal__regular ${isInputError ? 'input-field__content--error' : ''}`}
                                            type="text"
                                            name={`index`}
                                            placeholder="Geben Sie Ihren Vornamen an."
                                            value={indexValue}
                                            onChange={handleInputChange}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                    />
                                    {isInputError &&
                                            <div className="input-field--error-message caption__regular">This field is required</div>}
                                </div>
                            </div>
                        </div>

                        <div className="text-area">
                            <label className={`text-area__label caption__regular 
                            ${ isError ? 'text-area__label--error' : isFocused ? 'text-area__label--focused' : ''}
                            
                            `}
                                   htmlFor={`upload-text`}
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

            </>
    );
};

export default PlaneHochladenFormItem;