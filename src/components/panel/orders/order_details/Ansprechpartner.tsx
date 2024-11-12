import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { useNavigate } from "react-router";
import CustomPagination from "src/helpers/CustomPaginate";
import FilterDialog from "src/helpers/TableFilters";
import PATHS from "src/routes/Paths";
import {Link} from "react-router-dom";

const Ansprechpartner = () => {
    const navigate = useNavigate();

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

    return (
        <>
            <div className="table-list table-list--secondary">
                <table role="table">
                    <thead>
                        <tr role="row">
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">
                                    Funktion
                                </div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">
                                    Name
                                </div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">
                                    Werk
                                </div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">
                                    Telefon
                                </div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">
                                    E-Mail
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td role="cell" className="body-normal__regular no-actions" data-label={"Funktion"}>
                                Disponent
                            </td>
                            <td role="cell" className="body-normal__regular no-actions" data-label={"Name"}>
                                Reuther, Ulf{" "}
                            </td>
                            <td role="cell" className="body-normal__regular no-actions" data-label={"Werk"}>
                                Hennigsdorf{" "}
                            </td>
                            <td role="cell" className="body-normal__regular no-actions" data-label={"Telefon"}>
                                <span  className="link-component">
                                    +49 1234 567897{" "}
                                </span>
                            </td>
                            <td role="cell" className="body-normal__regular no-actions" data-label={"E-Mail"}>
                                <span className="link-component">
                                    ulf.reuther@thomas-gruppe.de
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default Ansprechpartner;
