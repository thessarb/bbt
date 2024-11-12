import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import CustomPagination from "src/helpers/CustomPaginate";
import FileViewerModal from "../../Modal/FileViewerModal";
import FilterDialog from "src/helpers/TableFilters";
import PlaneHochladenModal from "../../Modal/PlaneHochladenModal";

const Library = () => {
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
    const [showPlaneHochladenModal, setShowPlaneHochladenModal] = useState(false);
    const handleShowPlaneHochladenModal = () => {
        setShowPlaneHochladenModal(true);
    };

    const [isFilterDialogOpen, setIsFilterDialogOpen] = useState<string | null>(null);

    const [filterDialogPosition, setFilterDialogPosition] = useState<{
        top: number;
        left: number;
    } | null>(null);

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
                <div className="filter-container">
                    <div className="button button-secondary button--grey button--big">
                        <span className="button__text">Filter öffnen</span>
                        <i className="button__icon icon-funnel-simple"></i>
                    </div>
                    <button onClick={handleShowPlaneHochladenModal}
                            className="filter-container--new-plan button button--green button--big">
                        <i className="button__icon icon-export"></i>
                        <span className="button__text">Neue Dokument hochladen</span>
                    </button>
                    {showPlaneHochladenModal && <PlaneHochladenModal showPlaneHochladenModal={showPlaneHochladenModal}
                                                                     setShowPlaneHochladenModal={setShowPlaneHochladenModal}/>}
                </div>

                <div className="library table-list table-list--secondary">
                    <table role="table">
                        <thead>
                        <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Art
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Datum
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Beschreibung
                                </div>
                            </th>
                            <th role="columnheader"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td role="cell" className="body-normal__regular" data-label={"Art"}>
                                Montageanleitung
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Datum"}>
                                01.01.2024
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Beschreibung"}>
                                Montageanleitungen Betonbauteile
                            </td>

                            <td role="cell" className="table-list__button" data-label={" "}>
                                <div className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-download-simple"></i>
                                </div>
                                <div className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-eye"></i>
                                </div>
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
                    <CustomPagination data={mockData} setActivePage={(e) => setPage(e)}/>
                </div>
            </>
    );
};

export default Library;
