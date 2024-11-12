import React, {useState, useEffect} from 'react';
import FreigebenFormModal from "./FreigebenFormModal";
import Select from "react-select";
import CustomPagination from "../../../../helpers/CustomPaginate";
import {Tooltip} from 'react-tooltip';

function ThomasPlaneTable() {
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

    // Thomas Modal
    const [showThomasModal, setShowThomasModal] = useState(false);
    const handleShow = () => {
        setShowThomasModal(true);
    };


    return (
            <>
                <div className="table-list table-list--secondary thomas-plane">
                    <table role="table">
                        <thead>
                        <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Name
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Index
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Plan Nr.
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Format
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Status
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Freigabe
                                </div>
                            </th>
                            <th role="columnheader"></th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Datum
                                </div>
                            </th>
                            <th role="columnheader"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td role="cell"
                                className="body-normal__regular"
                                data-label={"Name"}>
                                Übersichtsplan
                            </td>
                            <td role="cell"
                                className="body-normal__regular"
                                data-label={"Index"}>
                                1
                            </td>
                            <td role="cell"
                                className="body-normal__regular"
                                data-label={"Plan Nr."}>
                                D02
                            </td>
                            <td role="cell"
                                className="body-normal__regular"
                                data-label={"Format"}>
                                PDF
                            </td>
                            <td role="cell"
                                className="body-normal__regular"
                                data-label={"Status"}>
                                <div className="tag tag--orange">
                                    Ausstehend
                                </div>
                            </td>
                            <td role="cell"
                                className="body-normal__regular"
                                data-label={"Freigabe"}>
                                <div className="text-icon">
                                    Statik
                                    <i className="icon-x-square"></i>
                                </div>
                            </td>
                            <td role="cell"
                                className="body-normal__regular"
                                data-label={" "}>
                                <div className="text-icon">
                                    Maße
                                    <i className="icon-check-square"></i>
                                </div>
                            </td>
                            <td role="cell"
                                className="body-normal__regular"
                                data-label={"Datum"}>
                                01.01.2024
                            </td>

                            <td role="cell" className="table-list__button" data-label={" "}>
                                <div    data-tooltip-id="approval"
                                        data-tooltip-content="Freigabe erteilen"
                                        data-tooltip-place="top"
                                        data-tooltip-offset={0}
                                        onClick={handleShow}
                                        className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-check-square-offset"></i>
                                    <Tooltip id="approval" className="custom-tooltip"/>
                                </div>
                                <div    data-tooltip-id="view-data"
                                        data-tooltip-content="Datei ansehen"
                                        data-tooltip-place="top"
                                        data-tooltip-offset={0}
                                        className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-eye"></i>
                                    <Tooltip id="view-data" className="custom-tooltip"/>
                                </div>

                                {showThomasModal && <FreigebenFormModal showThomasModal={showThomasModal}
                                                                        setShowThomasModal={setShowThomasModal}/>}
                            </td>
                        </tr>
                        </tbody>
                    </table>
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
}

export default ThomasPlaneTable;
