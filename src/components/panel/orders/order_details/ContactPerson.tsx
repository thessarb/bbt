import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { useNavigate, useParams } from "react-router";
import CustomPagination from "src/helpers/CustomPaginate";
import FilterDialog from "src/helpers/TableFilters";
import PATHS from "src/routes/Paths";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import { makeApiCall } from "src/api/apiRequests";
import API_HEADERS from "src/api/apiConfig";
import API_PATHS from "src/api/apiPaths";
import Loading from "src/helpers/Loading";
import ListNoResult from "../../dashboard/deadlines/ListNoResult";

const Ansprechpartner = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [responsiblePersonlist, setResponsiblePersonlist] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getResponsiblePersons = async (): Promise<void> => {
        setLoading(true);
        const orderId = param.id;

        try {
            const response: any = await makeApiCall(
                API_PATHS.orderResponsiblePerson(Number(orderId)),
                "GET",
                API_HEADERS.authenticated
            );

            setResponsiblePersonlist(response.response);
            setLoading(false);
        } catch (error: any) {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getResponsiblePersons();
    }, []);

    return (
        <>
            <div className="table-list table-list--secondary">
                <table role="table">
                    <thead>
                        <tr role="row">
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">Funktion</div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">Name</div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">Werk</div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">Telefon</div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">E-Mail</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td className="table-loading" colSpan={7}>
                                    <Loading />
                                </td>
                            </tr>
                        ) : responsiblePersonlist.length === 0 ? (
                            <tr>
                                <td className="table-no-result" colSpan={7}>
                                    <ListNoResult />
                                </td>
                            </tr>
                        ) : (
                            responsiblePersonlist.map((person, index) => (
                                <tr>
                                    <td role="cell" className="body-normal__regular no-actions" data-label={"Funktion"}>
                                        {person.role ? person.role : "-"}
                                    </td>
                                    <td role="cell" className="body-normal__regular no-actions" data-label={"Name"}>
                                        {person.lastname ? person.lastname : "-"}, {person.firstname ? person.firstname : "-"}
                                    </td>
                                    <td role="cell" className="body-normal__regular no-actions" data-label={"Werk"}>
                                        Hennigsdorf{" "}
                                    </td>
                                    <td role="cell" className="body-normal__regular no-actions" data-label={"Telefon"}>
                                        <span
                                            data-tooltip-id="tooltip"
                                            data-tooltip-content="Telefonnummer anrufen"
                                            data-tooltip-place="top"
                                            data-tooltip-offset={10}
                                            className="link-component"
                                        >
                                            {person.phone ? person.phone : "-"}
                                        </span>
                                    </td>
                                    <td role="cell" className="body-normal__regular no-actions" data-label={"E-Mail"}>
                                        <span
                                            data-tooltip-id="tooltip"
                                            data-tooltip-content="E-Mail senden"
                                            data-tooltip-place="top"
                                            data-tooltip-offset={10}
                                            className="link-component"
                                        >
                                            {person.email ? person.email : "-"}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default Ansprechpartner;
