import React, { useEffect, useRef } from "react";
import Select from "react-select";

interface BigFilterProps {
    onShowModal: boolean;
    setShowModal: (visible: boolean) => void;
}

const BigFilter = ({ onShowModal, setShowModal }: BigFilterProps) => {

    const onClose = () => {
        setShowModal(false);
    };

    return (
        <div className="big-filter">
            <div className="dropdown-header">
                <span className="body-normal__regular">Filter anwenden</span>
            </div>
            <div className="filters">
                <div className="form col-12 col-md-5 col-sm-3">
                    <div className="form__field-select">
                        <label htmlFor="filter-select" className={`form__label caption__regular`}>
                            Reihe
                        </label>
                        <Select
                            id="filter-select"
                            classNamePrefix="react-select"
                            className={`form__select body-normal__regular`}
                            placeholder="Wählen Sie eine Tabellenreihe"
                            isClearable={true}
                            closeMenuOnSelect={true}
                            name="company-type"
                            isSearchable={true}
                            required
                        />
                        <span className="error-message caption__regular">Error message</span>
                    </div>
                </div>
                <div className="form__field col-12 col-md-5 col-sm-3">
                    <label htmlFor="filter" className={`form__label caption__regular`}>
                        Wert
                    </label>
                    <input
                        id="filter"
                        className="form__input body-normal__regular"
                        type="text"
                        placeholder="Nach welchem Wert möchten Sie filtern"
                        required
                    />
                </div>
                <div className="delete-filter">
                    <button className="button button-gost button--big button--grey">
                        <i className="button__icon icon-trash" />
                    </button>
                </div>
            </div>
            <div>
                <button className="button button-gost button--big button--green">
                    <i className="button__icon icon-plus" />
                    <span className="button__text">Weiteren Filter hinzufügen</span>
                </button>
            </div>
            <div className="no-background">
                <button className="button button-secondary button--big button--green" onClick={onClose}>
                    <span className="button__text">Filter anwenden</span>
                </button>
            </div>
        </div>
    );
};

export default BigFilter;
