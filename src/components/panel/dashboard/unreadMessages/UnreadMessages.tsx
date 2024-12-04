import React, { useState, useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import { makeApiCall } from "src/api/apiRequests";
import PATHS from "src/routes/Paths";
import API_HEADERS from "src/api/apiConfig";
import API_PATHS from "src/api/apiPaths";
import SearchFilter from "src/helpers/SearchFilter";
import Loading from "src/helpers/Loading";
import moment from "moment";
import CustomPagination from "src/helpers/CustomPaginate";
import Select, { SingleValue } from "react-select";
import ListNoResult from "../../dashboard/deadlines/ListNoResult";
// @ts-ignore
import ReadMessageModal from "../../../Modal/ReadMessageModal";

const UnreadMessages = () => {
    const [notificationsList, setNotificationsList] = useState<any[]>([]);
    const [status, setStatus] = useState("0");
    const [page, setPage] = useState<number>(1);
    const [rows, setRows] = useState<number>(5);
    const [column, setColumn] = useState("");
    const [orderColumn, setOrderColumn] = useState("asc");
    const [paginate, setPaginate] = useState<any>([]);
    const [pagination, setPagination] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [show, setShow] = useState(false);

    const [selectedPageOption, setSelectedPageOption] = useState<{ value: string; label: string }>({
        value: "5",
        label: "5",
    });

    const rowsPerPageOptions = [
        { value: "5", label: "5" },
        { value: "10", label: "10" },
        { value: "15", label: "15" },
        { value: "20", label: "20" },
        { value: "25", label: "25" },
    ];

    const getNotifications = async (): Promise<void> => {
        setLoading(true);
        const searchParams: any = {
            pagination: pagination,
            page: page,
            rows: rows,
            status: status,
        };

        if (column) {
            searchParams.column = column;
            searchParams.order = orderColumn;
        }

        const request: any = SearchFilter(searchParams, API_PATHS.notificationList);

        try {
            const response: any = await makeApiCall(request, "GET", API_HEADERS.authenticated);
            setNotificationsList(response.response.data || []);
            setPaginate({
                total: response.response.total || 0,
                current_page: response.response.current_page || 1,
                per_page: rows,
                last_page: Math.ceil((response.response.total || 0) / rows),
            });
            setLoading(false);
        } catch (error: any) {
            console.error("Error fetching notifications:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getNotifications();
    }, [page, rows, column, orderColumn]);

    const handleRowsChange = (selected: { value: string; label: string } | null) => {
        if (selected) {
            setSelectedPageOption(selected);
            setRows(Number(selected.value));
            setPage(1);
        }
    };

    const toggleOrder = (columnName: string) => {
        setColumn(columnName);
        setOrderColumn((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
        setPage(1);
    };

    const handleShow = () => {
        setShow(true);
    };

    return (
        <>
            <div className="table-list">
                <div className="table-list__title">
                    <span className="table-list__title-left subheading__regular">Ungelesene Systemnachrichten</span>
                    <Link to={PATHS.messages} className="table-list__title-right button button--green button-gost link-component">
                        Alle Systemnachrichten lesen
                    </Link>
                </div>
                <div className="table-list__unread">
                    <table role="table">
                        <thead>
                            <tr role="row">
                                <th role="columnheader">
                                    <div className="body-normal__semibold">
                                        Auftrag
                                        <i className="icon-caret-up-down" onClick={() => toggleOrder("notifiable_id")}></i>
                                    </div>
                                </th>
                                <th role="columnheader">
                                    <div className="body-normal__semibold">Auftragsname</div>
                                </th>
                                <th role="columnheader">
                                    <div className="body-normal__semibold">Betreff</div>
                                </th>
                                <th role="columnheader">
                                    <div className="body-normal__semibold">Inhalt</div>
                                </th>
                                <th role="columnheader">
                                    <div className="body-normal__semibold">
                                        Datum
                                        <i className="icon-caret-up-down" onClick={() => toggleOrder("created_at")}></i>
                                    </div>
                                </th>
                                <th role="columnheader">
                                    <div className="body-normal__semibold">
                                        Dringlichkeit
                                        <i className="icon-caret-up-down" onClick={() => toggleOrder("type")}></i>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td className="table-loading" colSpan={6}>
                                        <Loading />
                                    </td>
                                </tr>
                            ) : notificationsList.length === 0 ? (
                                <tr>
                                    <td className="table-no-result" colSpan={6}>
                                        <ListNoResult />
                                    </td>
                                </tr>
                            ) : (
                                notificationsList.map((notification, index) => (
                                    <tr key={notification.id}>
                                        <td role="cell" className="body-normal__regular" data-label={"Auftrag"}>
                                            <Link
                                                to={PATHS.orderDetails + notification.notifiable?.id}
                                                className="link-component"
                                            >
                                                {notification.notifiable_type === "App\\Models\\Order"
                                                    ? notification.notifiable.system_id
                                                    : " "}
                                            </Link>
                                        </td>
                                        <td role="cell" className="body-normal__regular" data-label={"Auftragsname"}>
                                            München Isar
                                        </td>
                                        <td role="cell" className="body-normal__regular" data-label={"Betreff"}>
                                            {notification.subject ? notification.subject : "-"}
                                        </td>
                                        <td role="cell" className="body-normal__regular" data-label={"Inhalt"}>
                                            {notification.message ? notification.message : "-"}
                                        </td>
                                        <td role="cell" className="body-normal__regular" data-label={"Datum"}>
                                            {notification.created_at
                                                ? moment(notification.created_at).format("DD. MM. yyyy")
                                                : "-"}
                                        </td>
                                        <td role="cell" className="body-normal__regular" data-label={"Dringlichkeit"}>
                                            {notification.notifiable_type === "critical" ? (
                                                <i className="button__icon icon-warning"></i>
                                            ) : (
                                                " "
                                            )}
                                        </td>
                                        <td role="cell" className="table-list__button">
                                            <button
                                                data-tooltip-id="tooltip"
                                                data-tooltip-content="Nachricht lesen"
                                                data-tooltip-place="top"
                                                data-tooltip-offset={10}
                                                onClick={handleShow}
                                                className="button button-gost button--big button--grey"
                                            >
                                                <i className="button__icon icon-envelope-simple"></i>
                                            </button>
                                            {show && <ReadMessageModal show={show} setShow={setShow} />}
                                        </td>
                                    </tr>
                                ))
                            )}
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
                                notificationsList.length > 0 ? "primary-green" : ""
                            }`}
                        >
                            Einträge pro Seite
                        </label>
                        <Select
                            id="pagination"
                            classNamePrefix="react-select"
                            value={selectedPageOption}
                            options={rowsPerPageOptions}
                            onChange={handleRowsChange}
                            isClearable={false}
                            closeMenuOnSelect={true}
                        />
                    </div>
                </div>
                <CustomPagination data={paginate} setActivePage={(e) => setPage(e)} />
            </div>
        </>
    );
};

export default UnreadMessages;
