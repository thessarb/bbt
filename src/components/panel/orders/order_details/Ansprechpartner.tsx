import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { useNavigate } from "react-router";
import CustomPagination from "src/helpers/CustomPaginate";
import FilterDialog from "src/helpers/TableFilters";
import PATHS from "src/routes/Paths";

const Ansprechpartner = () => {
    const navigate = useNavigate();

    const [isFilterDialogOpen, setIsFilterDialogOpen] = useState<string | null>(null);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);


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
            <div className="table-list table-list--secondary">
                <table role="table">
                    <thead>
                        <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Funktion
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("funktion")}
                                    ></i>
                                    {isFilterDialogOpen === "funktion" && (
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
                                    Werk
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("werk")}
                                    ></i>
                                    {isFilterDialogOpen === "werk" && (
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
                                    Telefon
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("telefon")}
                                    ></i>
                                    {isFilterDialogOpen === "telefon" && (
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
                                    E-Mail
                                    <i
                                        className="icon-dots-three-vertical"
                                        onClick={() => setIsFilterDialogOpen("e-Mail")}
                                    ></i>
                                    {isFilterDialogOpen === "e-Mail" && (
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
                            <td role="cell" className="body-normal__regular" data-label={"Funktion"}>
                                Disponent
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Name"}>
                                Reuther, Ulf{" "}
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Werk"}>
                                Hennigsdorf{" "}
                            </td>
                            <td role="cell" className="body-normal__regular green-text" data-label={"Telefon"}>
                                +49 1234 567897{" "}
                            </td>
                            <td role="cell" className="body-normal__regular green-text" data-label={"E-Mail"}>
                                ulf.reuther@thomas-gruppe.de
                            </td>
                            <td role="cell" className="table-list__button" data-label={" "}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default Ansprechpartner;
