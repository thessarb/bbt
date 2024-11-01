import React, {useState} from "react";
import Select, {SingleValue} from "react-select";
import PlaneHochladenForm from "./PlaneHochladenForm";

const options = [
    { value: 'chocolate', label: 'Chocolate with love ' },
    { value: 'strawberry', label: 'Strawberry with test' },
    { value: 'vanilla', label: 'Vanilla test' },
];

interface PlaneHochladenFormItemProps {
    index: number;
    upload: string;
}

const PlaneHochladenFormItem: React.FC<PlaneHochladenFormItemProps> = ({ index, upload}) => {
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

    // Upload file
    const isUploadRequired = true;
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [fileErrors, setFileErrors] = useState<boolean[]>([]);
    const [noFileSelectedError, setNoFileSelectedError] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const maxFileSize = 5 * 1024 * 1024; // 5MB
    const maxFileCount = 5; // Maximum number of files allowed

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setNoFileSelectedError(false);

        if (selectedFiles.length >= maxFileCount) {
            return;
        }

        if (file) {
            // Add the file to the list and check for size errors
            setSelectedFiles([...selectedFiles, file]);
            setFileErrors([...fileErrors, file.size > maxFileSize]);
        }
    };

    const checkNoFileSelected = () => {
        if (isUploadRequired && selectedFiles.length <= 1) {
            setNoFileSelectedError(true);
        } else {
            setNoFileSelectedError(false);
        }
    };

    const handleRemoveFile = (index: number) => {
        const updatedFiles = [...selectedFiles];
        const updatedErrors = [...fileErrors];
        updatedFiles.splice(index, 1);
        updatedErrors.splice(index, 1);
        setSelectedFiles(updatedFiles);
        setFileErrors(updatedErrors);
        checkNoFileSelected();
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
                        {`Datei #${index}`}
                    </span>
                    <span className="divider__dotted"></span>
                </div>

                <div className="upload-plan__box">

                    {upload === "upload" &&
                        <div className="upload-plan__box-item">
                            <div className="upload">
                                <div className="upload__title caption__regular">
                                    Datel
                                    {isUploadRequired && <span className="upload__title--required">*</span>}
                                </div>
                                <label htmlFor={`upload${index}`} className="upload__content">
                                    <input className="upload__content--input"
                                           type="file"
                                           id={`upload${index}`}
                                           name="myfile"
                                           onChange={handleFileChange}
                                           onClick={(e) => ((e.target as HTMLInputElement).value = '')}
                                    />
                                    <span className="upload__content--icon icon-file-arrow-up"></span>
                                    <div className="upload__content--box">
                                    <span className="body-normal__regular">
                                        Klicke oder schiebe die Datei hierher zum Upload
                                    </span>
                                        <span className="caption__regular">
                                        Maximale Dateigröße ist<span className="caption__semibold"> 5MB</span>
                                    </span>
                                    </div>
                                </label>
                                {noFileSelectedError && (
                                        <span className="upload__required caption__regular">
                                        Bitte wählen Sie mindestens eine Datei aus.
                                    </span>
                                )}
                                {selectedFiles.length > 0 && (
                                        <div className="upload__file-list">
                                            {selectedFiles.map((file, index) => (
                                                    <div className="upload__file" key={index}>
                                                    <span
                                                            className={`upload__file--icon ${
                                                                    fileErrors[index] ? 'icon-x' : isUploading ? 'icon-loading' : 'icon-check'
                                                            }`}
                                                    ></span>
                                                        <span className={`upload__file--name body-small__regular ${
                                                                fileErrors[index] ? 'upload__file--name-error' : ''
                                                        }`}
                                                        >
                                                        {file.name}
                                                    </span>
                                                        {fileErrors[index] ? (
                                                                <span className="upload__file--limit-error caption__regular">
                                                                Dateigröße ist zu groß. Das Limit ist 5MB.
                                                            </span>
                                                        ) : (
                                                                <span className="upload__file--size body-small__regular">
                                                                {isUploading ? ' ' : `${(file.size / 1024 / 1024).toFixed(1)} MB`}
                                                            </span>
                                                        )}
                                                        <button className="upload__file--remove button button-gost button--grey"
                                                                onClick={() => handleRemoveFile(index)}>
                                                            <i className="button__icon icon-x"></i>
                                                        </button>
                                                    </div>
                                            ))}
                                        </div>
                                )}
                            </div>
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
                                   htmlFor={`upload-text${index}`}
                            >
                                Komentar
                                {isRequired ? <span className="text-area__label--required">*</span> : ""}
                            </label>
                            <textarea
                                    id={`upload-text${index}`}
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