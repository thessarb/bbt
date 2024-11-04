import React, {useState} from "react";
import Select, {SingleValue} from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const options = [
    {value: 'chocolate', label: 'Chocolate with love '},
    {value: 'strawberry', label: 'Strawberry with test'},
    {value: 'vanilla', label: 'Vanilla test'},
    {value: 'chocolate', label: 'Chocolate with love '},
    {value: 'strawberry', label: 'Strawberry with test'},
    {value: 'vanilla', label: 'Vanilla test'},
    {value: 'chocolate', label: 'Chocolate with love '},
    {value: 'strawberry', label: 'Strawberry with test'},
    {value: 'vanilla', label: 'Vanilla test'},
];

const PlanFreigebenForm = () => {

    // Select
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(null);

    const handleSelectChange = (newValue: SingleValue<{ value: string; label: string }>) => {
        setSelectedOption(newValue);
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

    // Date picker
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [isDatePickerError, setIsDatePickerError] = useState(false);
    const isDateRequired = false; // Set this to true for required fields

    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
        if (isDateRequired) {
            setIsDatePickerError(!date); // Set error if the date is null
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

    return (
            <>
                <div className="release-plan">
                    <form className="form" method="post">
                        <div className="release-plan__content">
                            <div className="release-plan__component">
                                <span className="release-plan__title body-small__regular">
                                    Allgemein
                                </span>
                                <span className="release-plan__divider"></span>
                            </div>

                            <div className="release-plan__box">
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Raummaße geprüft
                                    </label>
                                </div>
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Lage und Größe der Profilträger gepüft
                                    </label>
                                </div>
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Lage und Größe des Schornsteines geprüft
                                    </label>
                                </div>
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Elementgewichte geprüft
                                    </label>
                                </div>
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Wandstärke geprüft
                                    </label>
                                </div>
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Lage und Größe der Profilträger gepüft
                                    </label>
                                </div>
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Lage und Größe des Schornsteines geprüft
                                    </label>
                                </div>
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Balkonmaße geprüft (incl. Wassernase und Aufkantung)
                                    </label>
                                </div>
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Lage und Größe der Profilträger gepüft
                                    </label>
                                </div>
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Lage und Größe des Schornsteines geprüft
                                    </label>
                                </div>
                            </div>

                            <div className="release-plan__component">
                                <span className="release-plan__title body-small__regular">
                                    Doppelwand
                                </span>
                                <span className="release-plan__divider"></span>
                            </div>

                            <div className="release-plan__box">
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Raummaße geprüft
                                    </label>
                                </div>
                            </div>

                            <div className="release-plan__component">
                                <span className="release-plan__title body-small__regular">
                                    Vollfertigteile
                                </span>
                                <span className="release-plan__divider"></span>
                            </div>

                            <div className="release-plan__box">
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Raummaße geprüft
                                    </label>
                                </div>
                                <div className="release-plan__box-item ">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Wandstärke geprüft
                                    </label>
                                </div>

                            </div>

                            <div className="release-plan__component">
                                <span className="release-plan__title body-small__regular">
                                    Baustellenkran
                                </span>
                                <span className="release-plan__divider"></span>
                            </div>

                            <div className="release-plan__select">
                                <div className="form__field-select">
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

                            <div className="release-plan__box">
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Plattengröße (Krantragkraft) überprüft (1,0 qm Decke wiegt ca. 150 kg)
                                    </label>
                                </div>

                                <div className="release-plan__box-item ">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Baustelle ist mit Sattelzug (16,0m, zul. Geamtgewicht 56t) befahrbar
                                    </label>
                                </div>

                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Bestellung Maschinenwagen (falls kein Sattelzug mgl., Abrechung erfolgt als
                                        Frachtminderung und Maschinenzulage gem. EP-Liste)
                                    </label>
                                </div>
                            </div>

                            <div className="release-plan__component">
                                <span className="release-plan__title body-small__regular">
                                    Liefertermin
                                </span>
                                <span className="release-plan__divider"></span>
                            </div>

                            <div className="release-plan__box">
                                <div className={`date-picker ${isDatePickerError ? 'date-picker--invalid' : ''}`}>
                                    <label className="date-picker__label caption__regular" htmlFor="date-picker">
                                        Gewünschter Liefertermin
                                        {isDateRequired ? <span className="date-picker__label--required">*</span> : ""}
                                    </label>
                                    <DatePicker
                                            id="date-picker"
                                            className="date-picker__container"
                                            showIcon
                                            icon="date-picker__icon icon-calendar"
                                            selected={startDate}
                                            onChange={handleDateChange}
                                            placeholderText="Datum auswählen"
                                    />
                                    {isDatePickerError && (
                                            <div className="date-picker__error caption__regular">
                                                Field required
                                            </div>
                                    )}
                                </div>

                            </div>

                            <div className="release-plan__component">
                                <span className="release-plan__title body-small__regular">
                                    Liefertermin
                                </span>
                                <span className="release-plan__divider"></span>
                            </div>

                            <div className="release-plan__component">
                                <span className="release-plan__title body-small__regular">
                                    Freigebe
                                </span>
                                <span className="release-plan__divider"></span>
                            </div>

                            <div className="release-plan__box">
                                <div className="release-plan__box-item">
                                    <div className="toggle-switch">
                                        <label className="switch toggle-switch__switch">
                                            <input className="toggle-switch__input" type="checkbox" id="switch-1"/>
                                            <span className="toggle-switch__slider"></span>
                                        </label>
                                        <label htmlFor="switch-1" className="toggle-switch__text body-big__regular">
                                            Massliche Freigabe zur Produktion wird hiermit erteilt
                                        </label>
                                    </div>
                                </div>
                                <div className="release-plan__box-item">
                                    <div className="toggle-switch">
                                        <label className="switch toggle-switch__switch">
                                            <input className="toggle-switch__input" type="checkbox" id="switch-2"/>
                                            <span className="toggle-switch__slider"></span>
                                        </label>
                                        <label htmlFor="switch-2" className="toggle-switch__text body-big__regular">
                                            statische Freigabe zur Produktion wird hiermit erteilt
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="release-plan__component">
                                <span className="release-plan__title body-small__regular">
                                    Kommentare
                                </span>
                                <span className="release-plan__divider"></span>
                            </div>

                            <div className="release-plan__box w-50">
                                <div className="text-area">
                                    <label
                                            className={`text-area__label caption__regular ${
                                                    isError ? 'text-area__label--error' : isFocused ? 'text-area__label--focused' : ''
                                            }`}
                                            htmlFor="textarea-1"
                                    >
                                        Komentar
                                        {isRequired ? <span className="text-area__label--required">*</span> : ""}
                                    </label>
                                    <textarea
                                            id="textarea-1"
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

                            <div className="release-plan__component">
                                <span className="release-plan__title body-small__regular">
                                    Dateinhange
                                </span>
                                <span className="release-plan__divider"></span>
                            </div>

                            <div className="release-plan__box w-50">
                                <div className="upload">
                                    <div className="upload__title caption__regular">
                                        Datel
                                        {isUploadRequired && <span className="upload__title--required">*</span>}
                                    </div>
                                    <label htmlFor="myfile" className="upload__content">
                                        <input
                                                className="upload__content--input"
                                                type="file"
                                                id="myfile"
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

                            <div className="release-plan__component">
                                <span className="release-plan__title body-small__regular">
                                    Empfanger
                                </span>
                                <span className="release-plan__divider"></span>
                            </div>

                            <div className="release-plan__box">
                                <div className="release-plan__box-item">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Reuter, Ulf <span
                                            className="release-plan__box-item--email">ulf.reuther@thomas-groupe.de</span>
                                    </label>
                                </div>

                                <div className="release-plan__box-item ">
                                    <label className="body-normal__regular form-checkbox">
                                        <input type="checkbox"/>
                                        Staiger, Jorg <span
                                            className="release-plan__box-item--email">joerg.staiger@thomas-groupe.de</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
    );
};

export default PlanFreigebenForm;