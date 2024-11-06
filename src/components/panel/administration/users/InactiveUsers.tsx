import React, {useState} from "react";
import Select from "react-select";
import CustomPagination from "../../../../helpers/CustomPaginate";
import ReactivateUsersModal from "./ReactivateUsersModal";

const InactiveUsers = () => {
    // Pagination
    const [page, setPage] = useState(1);
    const [selectedOption, setSelectedOption] = useState<{
        value: string;
        label: string;
    } | null>(null);

    const mockData = {
        total: 100,
        current_page: 1,
        per_page: 10,
        last_page: 10,
    };

    // Modal
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    };

    return (
            <>
                <div className="table-list table-list--secondary">
                    <table role="table">
                        <thead>
                            <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Funktion
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Firma
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Nachname
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Vorname
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    E-Mail
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Telefon
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Account
                                </div>
                            </th>
                            <th role="columnheader"></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td role="cell" className="body-normal__regular" data-label={"Funktion"}>
                                Kunde
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Firma"}>
                                Müller GmbH
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Nachname"}>
                                Müller
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Vorname"}>
                                Timo
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"E-Mail"}>
                                timo.mueller@web.de
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Telefon"}>
                                +49 123 4566
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Account"}>
                                BBT
                            </td>

                            <td role="cell" className="table-list__button" data-label={" "}>
                                <div className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-note-pencil"></i>
                                </div>
                                <div onClick={handleShow} className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-user-switch"></i>
                                </div>
                                {show && <ReactivateUsersModal show={show} setShow={setShow}/>}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="pagination-container">
                    <div className="form">
                        <div className="form__field-select">
                            <label htmlFor="pagination"
                                   className={`form__label caption__regular ${selectedOption ? "filled" : ""}`}
                            >
                                Einträge pro Seite
                            </label>

                            <Select
                                    id="pagination"
                                    classNamePrefix="react-select"
                                    className={`form__select body-normal__regular ${selectedOption ? "filled" : ""}`}
                                    placeholder={false}
                                    value={5}
                                    // options={options}
                                    isClearable={true}
                                    closeMenuOnSelect={true}
                                    name="company-type"
                                    isSearchable={true}
                                    required
                            />
                            <span className="error-message caption__regular">Error message</span>
                        </div>
                    </div>
                    <CustomPagination data={mockData} setActivePage={(e) => setPage(e)}/>
                </div>
            </>
    )
};

export default InactiveUsers;