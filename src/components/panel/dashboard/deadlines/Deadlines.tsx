import React, {useState, useRef, useEffect} from "react";
import CustomPagination from "src/helpers/CustomPaginate";
import Select from "react-select";
import FilterDialog from "src/helpers/TableFilters";
import PlanViewModal from "./PlanViewModal";
import {Link} from "react-router-dom";
import {Tooltip} from 'react-tooltip';

const Deadlines = () => {
    // pagination
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
                <div className="table-list">
                    <div className="table-list__title">
                        <span className="table-list__title-left subheading__regular">
                            Fristen
                        </span>
                    </div>
                    <div className="table-list__scroll">
                        <table role="table">
                        <thead>
                        <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Auftrag
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Auftragsname
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    BA
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Haus
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Geschoss
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Ebene
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Produkt
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Zu erledigen
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Frist
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Dringlichkeit
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Auftrag"}
                            >
                                <Link to={`order-nr-here/80700`} className="link-component">
                                    80700
                                </Link>
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Auftragsname"}
                            >
                                München Isar
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"BA"}
                            >
                                1
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Haus"}
                            >
                                Haus 1
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Geschoss"}
                            >
                                KG
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Ebene"}
                            >
                                Treppenhaus
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Produkt"}
                            >
                                Decke OG
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Zu erledigen"}
                            >
                                Plan für Bauabschnitt
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Frist"}
                            >
                                12.05.2024
                            </td>
                            <td
                                    role="cell"
                                    className="body-normal__regular"
                                    data-label={"Dringlichkeit"}
                            >
                                <i className="icon-warning"></i>
                            </td>
                            <td role="cell" className="table-list__button" data-label={" "}>
                                <button
                                        data-tooltip-id="tooltip"
                                        data-tooltip-content="Freigabe erteilen"
                                        data-tooltip-place="top"
                                        data-tooltip-offset={5}
                                        onClick={handleShow}
                                        className='button button-gost button--big button--grey'>
                                    <i className="button__icon icon-note-pencil"></i>
                                </button>
                                {show && <PlanViewModal show={show} setShow={setShow}/>}
                            </td>
                        </tr>

                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="pagination-container">
                    <div className="form">
                        <div className="form__field-select">
                            <label
                                    htmlFor="pagination"
                                    className={`form__label caption__regular ${
                                            selectedOption ? "filled" : ""
                                    }`}
                            >
                                Einträge pro Seite
                            </label>

                            <Select
                                    id="pagination"
                                    classNamePrefix="react-select"
                                    className={`form__select body-normal__regular ${
                                            selectedOption ? "filled" : ""
                                    }`}
                                    placeholder={false}
                                    value={5}
                                    // options={options}
                                    isClearable={true}
                                    closeMenuOnSelect={true}
                                    name="company-type"
                                    isSearchable={true}
                                    required
                            />
                            <span className="error-message caption__regular">
                              Error message
                            </span>
                        </div>
                    </div>
                    <CustomPagination data={mockData} setActivePage={(e) => setPage(e)}/>
                </div>
            </>
    );
};

export default Deadlines;
