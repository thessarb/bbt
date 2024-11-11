import React, { useState, useRef, useEffect } from "react";
import CustomPagination from "src/helpers/CustomPaginate";
import Select from "react-select";
import FilterDialog from "src/helpers/TableFilters";
import PlanViewModal from "../../dashboard/deadlines/PlanViewModal";
import {Tooltip} from "react-tooltip";

const Fristen = () => {
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

    // Filter
    const [isFilterDialogOpen, setIsFilterDialogOpen] = useState<string | null>(null);

    const [filterData, setFilterData] = useState<{
        searchTerm: string;
        order: string;
        selectedOptions: string[];
    }>({
        searchTerm: "",
        order: "asc",
        selectedOptions: [],
    });

    const handleFilterChange = (filter: { searchTerm: string; order: string; selectedOptions: string[] }) => {
        setFilterData(filter);
    };

    const filterOptions = ["Option 1", "Option 2"];

    const closeFilterDialog = () => setIsFilterDialogOpen(null);

    const filterDialogRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (filterDialogRef.current && !filterDialogRef.current.contains(event.target as Node)) {
                closeFilterDialog();
            }
        };

        if (isFilterDialogOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isFilterDialogOpen]);

    return (
        <>
            <div className="table-list">
                <table role="table">
                    <thead>
                        <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    BA
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("ba")}
                                    ></i>
                                    {isFilterDialogOpen === "ba" && (
                                        <div ref={filterDialogRef}>
                                            <FilterDialog
                                                options={filterOptions}
                                                onFilterChange={handleFilterChange}
                                                closeFilter={() => closeFilterDialog}
                                            />
                                        </div>
                                    )}
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Haus
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("haus")}
                                    ></i>
                                    {isFilterDialogOpen === "haus" && (
                                        <div ref={filterDialogRef}>
                                            <FilterDialog
                                                options={filterOptions}
                                                onFilterChange={handleFilterChange}
                                                closeFilter={() => closeFilterDialog}
                                            />
                                        </div>
                                    )}
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Geschoss
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("geschoss")}
                                    ></i>
                                    {isFilterDialogOpen === "geschoss" && (
                                        <div ref={filterDialogRef}>
                                            <FilterDialog
                                                options={filterOptions}
                                                onFilterChange={handleFilterChange}
                                                closeFilter={() => closeFilterDialog}
                                            />
                                        </div>
                                    )}
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Ebene
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("ebene")}
                                    ></i>
                                    {isFilterDialogOpen === "ebene" && (
                                        <div ref={filterDialogRef}>
                                            <FilterDialog
                                                options={filterOptions}
                                                onFilterChange={handleFilterChange}
                                                closeFilter={() => closeFilterDialog}
                                            />
                                        </div>
                                    )}
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Produkt
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("produkt")}
                                    ></i>
                                    {isFilterDialogOpen === "produkt" && (
                                        <div ref={filterDialogRef}>
                                            <FilterDialog
                                                options={filterOptions}
                                                onFilterChange={handleFilterChange}
                                                closeFilter={() => closeFilterDialog}
                                            />
                                        </div>
                                    )}
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Zu erledigen
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("zu_erledigen")}
                                    ></i>
                                    {isFilterDialogOpen === "zu_erledigen" && (
                                        <div ref={filterDialogRef} className="position">
                                            <FilterDialog
                                                options={filterOptions}
                                                onFilterChange={handleFilterChange}
                                                closeFilter={() => closeFilterDialog}
                                            />
                                        </div>
                                    )}
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Frist
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("frist")}
                                    ></i>
                                    {isFilterDialogOpen === "frist" && (
                                        <div ref={filterDialogRef} className="position">
                                            <FilterDialog
                                                options={filterOptions}
                                                onFilterChange={handleFilterChange}
                                                closeFilter={() => closeFilterDialog}
                                            />
                                        </div>
                                    )}
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Dringlichkeit
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("dringlichkeit")}
                                    ></i>
                                    {isFilterDialogOpen === "dringlichkeit" && (
                                        <div ref={filterDialogRef} className="position">
                                            <FilterDialog
                                                options={filterOptions}
                                                onFilterChange={handleFilterChange}
                                                closeFilter={() => closeFilterDialog}
                                            />
                                        </div>
                                    )}
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td role="cell" className="body-normal__regular" data-label={"Ba"}>
                                1
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Haus"}>
                                Haus 1
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Geschoss"}>
                                KG
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Ebene"}>
                                Treppenhaus
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Produkt"}>
                                Decke OG
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Zu erledigen"}>
                                Freigabe erteilen
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Frist"}>
                                12.08.2024
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Dringlichkeit"}>
                                <i className="icon-warning"></i>
                            </td>
                            <td role="cell" className="table-list__button" data-label={" "}>
                                <button
                                        data-tooltip-id="tooltip"
                                        data-tooltip-content="Plan bearbeiten"
                                        data-tooltip-place="top"
                                        data-tooltip-offset={5}
                                        onClick={handleShow} className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-note-pencil"></i>
                                </button>
                                {show && <PlanViewModal show={show} setShow={setShow} />}
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
                <CustomPagination data={mockData} setActivePage={(e) => setPage(e)} />
            </div>
        </>
    );
};
export default Fristen;