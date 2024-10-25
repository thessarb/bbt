import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { useNavigate } from "react-router";
import CustomPagination from "src/helpers/CustomPaginate";
import FilterDialog from "src/helpers/TableFilters";
import PATHS from "src/routes/Paths";

const Orders = () => {
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<any>([]);
    const [selectedOptionSelect, setSelectedOptionSelect] = useState(null);
    const [isFilterDialogOpen, setIsFilterDialogOpen] = useState<string | null>(null);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

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

    const options = [
        { value: "1", label: "Auftragsnummer 1" },
        { value: "2", label: "Auftragsname 2" },
        { value: "3", label: "Auftragsname 3" },
        { value: "4", label: "Auftragsnummer 4" },
    ];

    const handleSearch = (event: any) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const filtered = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredOptions(filtered);
        setIsOptionsOpen(true);
    };

    const handleSelect = (option: any) => {
        setSelectedOption(option);
        setSearchTerm(option.label);
        setFilteredOptions([]);
        setIsOptionsOpen(false);
    };

    const handleFilterChange = (filter: { searchTerm: string; order: string; selectedOptions: string[] }) => {
        setFilterData(filter);
    };

    const getHighlightedText = (text: any, highlight: any) => {
        if (!highlight) {
            return text;
        }
        const regex = new RegExp(`(${highlight})`, "gi");
        const parts = text.split(regex);
        return parts.map((part: any, index: any) =>
            regex.test(part) ? (
                <span key={index} className="highlight">
                    {part}
                </span>
            ) : (
                part
            )
        );
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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOptionsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="searchable-select" ref={selectRef}>
                <i className="icon-magnifying-glass" />
                <input
                    type="text"
                    className="searchable-input"
                    placeholder="Tragen Sie die Auftragsnummer oder -name ein."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {isOptionsOpen && (
                    <div className="select-options">
                        {filteredOptions.map((option: any) => (
                            <div key={option.value} className="select-option" onClick={() => handleSelect(option)}>
                                {getHighlightedText(option.label, searchTerm)}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <p className="order-text subheading__regular">
                Bitte tragen Sie Ihre Auftragsnummer oder -name ein und bestätigen Sie mit ENTER oder wählen einen
                Auftrag aus der Liste aus.
            </p>
            <div className="table-list table-list--secondary">
                <table role="table">
                    <thead>
                        <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Auftrag
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("auftrag")}
                                    ></i>
                                    {isFilterDialogOpen === "auftrag" && (
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
                                    Name
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("name")}
                                    ></i>
                                    {isFilterDialogOpen === "name" && (
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
                                    Adresse
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("adresse")}
                                    ></i>
                                    {isFilterDialogOpen === "adresse" && (
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
                                    Verantwortlicher
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("verantwortlicher")}
                                    ></i>
                                    {isFilterDialogOpen === "verantwortlicher" && (
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
                                    Bauabschnitte
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("bauabschnitte")}
                                    ></i>
                                    {isFilterDialogOpen === "bauabschnitte" && (
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
                            <th role="columnheader"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td role="cell" className="body-normal__regular" data-label={"Art"}>
                                80700
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Datum"}>
                                München Isar
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Beschreibung"}>
                                Biergartenallee 1 80311 München
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Beschreibung"}>
                                Hauptverantwortliche des Kunden
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Beschreibung"}>
                                8
                            </td>
                            <td role="cell" className="table-list__button" data-label={" "}>
                                <div className="button button-gost button--big button--grey" onClick={() => navigate(PATHS.orderDetails)}>
                                    <i className="button__icon icon-arrow-right"></i>
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
                <CustomPagination data={mockData} setActivePage={(e) => setPage(e)} />
            </div>
        </>
    );
};

export default Orders;
