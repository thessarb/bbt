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
import ListNoResult from "../dashboard/deadlines/ListNoResult";

interface Filter {
    id: number;
    selectedOption: SingleValue<{ value: string; label: string }> | null;
    inputValue: string;
}

interface MessagesTableProps {
    filters: Filter[];
    applyFilters: number;
}

const MessagesTable: React.FC<MessagesTableProps> = ({ filters, applyFilters }) => {
    const [notificationsList, setNotificationsList] = useState<any[]>([]);
    const [searched, setSearched] = useState<boolean>(false);

    const [page, setPage] = useState<number>(1);
    const [rows, setRows] = useState<number>(5);
    const [paginate, setPaginate] = useState<any>([]);
    const [pagination, setPagination] = useState<boolean>(true);
    const [column, setColumn] = useState("");
    const [orderColumn, setOrderColumn] = useState("asc");
    const [loading, setLoading] = useState<boolean>(false);

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
        };

        if (column) {
            searchParams.column = column;
            searchParams.order = orderColumn;
        }

        filters.forEach((filter) => {
            if (filter.selectedOption?.value) {
                searchParams[filter.selectedOption.value] = filter.inputValue;
                if (filter.selectedOption.value === "filter_notifiable_id") {
                    searchParams.filter_notifiable_type = "order";
                }
            }
        });

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

    const updateNotification = async (notificationId: number): Promise<void> => {
        try {
            const response: any = await makeApiCall<ResponseType>(
                API_PATHS.notificationUpdate(notificationId),
                "PUT",
                API_HEADERS.authenticated
            );
             getNotifications();
        } catch (error: any) {}
    };

    const [activeRowId, setActiveRowId] = useState<null | number>(null);
    const rowRefs = useRef<{ [key: number]: HTMLTableRowElement | null }>({});

    const handleRowClick = (index: number) => {
        setActiveRowId(index === activeRowId ? null : index);
    };

    useEffect(() => {
        if (applyFilters > 0) {
            setPage(1);
            getNotifications();
        }
    }, [applyFilters]);

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

    return (
        <>
            <div className="messages table-list table-list--accordion">
                <table role="table">
                    <thead>
                        <tr role="row">
                            <th role="columnheader"></th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Auftrag
                                    <i className="icon-caret-up-down" onClick={() => toggleOrder("notifiable_id")}></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Datum
                                    <i className="icon-caret-up-down" onClick={() => toggleOrder("created_at")}></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Betreff
                                    <i className="icon-caret-up-down" onClick={() => toggleOrder("subject")}></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Kritisch
                                    <i className="icon-caret-up-down" onClick={() => toggleOrder("type")}></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="contents body-normal__semibold">Inhalt</div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold"></div>
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
                        ) : notificationsList.length === 0 ? (
                            <tr>
                                <td className="table-no-result" colSpan={7}>
                                    <ListNoResult />
                                </td>
                            </tr>
                        ) : (
                            notificationsList.map((notification, index) => (
                                <tr
                                    key={notification.id}
                                    ref={(el) => (rowRefs.current[index] = el)}
                                    className={`body-normal__regular ${activeRowId === index ? "active" : ""} ${
                                        notification.status == 0 ? "unread" : ""
                                    }`}
                                    onClick={(e) => {
                                        updateNotification(notification.id);
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                >
                                    <td
                                        role="cell"
                                        className="body-normal__regular"
                                        onClick={() => handleRowClick(index)}
                                    >
                                        <div
                                            data-tooltip-id="tooltip"
                                            data-tooltip-content={
                                                activeRowId === index ? "Details schließen" : "Details öffnen"
                                            }
                                            data-tooltip-place="top"
                                            data-tooltip-offset={10}
                                        >
                                            <i className="icon-caret-right"></i>
                                        </div>
                                    </td>
                                    <td role="cell" className="body-normal__regular" data-label={"Auftrag"}>
                                        <Link to={PATHS.orderDetails + notification.notifiable?.id} className="link-component">
                                            {notification.notifiable_type === "App\\Models\\Order"
                                                ? notification.notifiable.system_id
                                                : " "}
                                        </Link>
                                    </td>
                                    <td
                                        role="cell"
                                        className="body-normal__regular"
                                        data-label={"Datum"}
                                        onClick={() => handleRowClick(index)}
                                    >
                                        {notification.created_at
                                            ? moment(notification.created_at).format("DD. MM. yyyy")
                                            : "-"}
                                    </td>
                                    <td
                                        role="cell"
                                        className="body-normal__regular"
                                        data-label={"Betreff"}
                                        onClick={() => handleRowClick(index)}
                                    >
                                        {notification.subject ? notification.subject : "-"}
                                    </td>
                                    <td
                                        role="cell"
                                        className="body-normal__regular"
                                        data-label={"Kritisch"}
                                        onClick={() => handleRowClick(index)}
                                    >
                                        <div className="button button-gost button--big button--red">
                                            {notification.notifiable_type === "critical" ? (
                                                <i className="button__icon icon-warning"></i>
                                            ) : (
                                                " "
                                            )}
                                        </div>
                                    </td>
                                    <td
                                        role="cell"
                                        className="contents"
                                        data-label={"Inhalt"}
                                        onClick={() => handleRowClick(index)}
                                    >
                                        <span className="collapsed body-normal__regular">
                                            {notification.message ? notification.message : "-"}
                                        </span>
                                    </td>
                                    <td role="cell" className="table-list__button" data-label={" "}>
                                        <div className="button button-gost button--big button--grey">
                                            <i className="button__icon icon-download-simple"></i>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
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

export default MessagesTable;
