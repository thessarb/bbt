import React, { useState, useEffect, useRef } from "react";
import Select, { components } from "react-select";
import { useNavigate } from "react-router";
import CustomPagination from "src/helpers/CustomPaginate";
import FilterDialog from "src/helpers/TableFilters";
import PATHS from "src/routes/Paths";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import { makeApiCall } from "src/api/apiRequests";
import API_HEADERS from "src/api/apiConfig";
import API_PATHS from "src/api/apiPaths";
import SearchFilter from "src/helpers/SearchFilter";
import Loading from "src/helpers/Loading";
import moment from "moment";
import ListNoResult from "../dashboard/deadlines/ListNoResult";

const Orders = () => {
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [ordersList, setOrdersList] = useState<any[]>([]);
    const [ordersListSelect, setOrdersListSelect] = useState<any[]>([]);
    const [rows, setRows] = useState<number>(5);
    const [paginate, setPaginate] = useState<any>([]);
    const [pagination, setPagination] = useState<boolean>(true);
    const [paginationSelect, setPaginationSelect] = useState<boolean>(false);
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

    const getOrders = async (): Promise<void> => {
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

        const request: any = SearchFilter(searchParams, API_PATHS.orderList);

        try {
            const response: any = await makeApiCall(request, "GET", API_HEADERS.authenticated);
            setOrdersList(response.response.data || []);
            setPaginate({
                total: response.response.total || 0,
                current_page: response.response.current_page || 1,
                per_page: rows,
                last_page: Math.ceil((response.response.total || 0) / rows),
            });
            getOrdersSelect();
            setLoading(false);
        } catch (error: any) {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getOrders();
    }, [page, rows, column, orderColumn]);

    
    const getOrdersSelect = async (): Promise<void> => {
        setLoading(true);
        const searchParams: any = {
            pagination: paginationSelect,
        };
        const request: any = SearchFilter(searchParams, API_PATHS.orderList);

        try {
            const response: any = await makeApiCall(request, "GET", API_HEADERS.authenticated);
            const formattedOptions = (response.response || []).map((order: any) => ({
                value: order.id,
                label: `Order ${order.system_id}`, 
            }));
            const optionsWithHeader = [
                { value: "", label: "Aktive Aufträge", isDisabled: true, className: "non-selectable-header caption__regular"}, 
                ...formattedOptions,
            ];
            setOrdersListSelect(optionsWithHeader);
            setLoading(false);
        } catch (error: any) {
        } finally {
            setLoading(false);
        }
    };

    
    const handleSelectChange = (selectedOption: { value: number; label: string } | null) => {
        if (selectedOption) {
            navigate(PATHS.orderDetails + (selectedOption.value)); 
        }
    };

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

    const CustomOption = (props: any) => {
        const { data, selectProps } = props;
        const inputValue = selectProps.inputValue || "";
    
        const highlightMatch = (label: string) => {
            const regex = new RegExp(`(${inputValue})`, "gi");
            const parts = label.split(regex);
    
            return parts.map((part, index) =>
                part.toLowerCase() === inputValue.toLowerCase() ? (
                    <span key={index} className="primary-green">
                        {part}
                    </span>
                ) : (
                    part
                )
            );
        };
    
        if (data.isDisabled && data.className) {
            return (
                <div className={`custom-option ${data.className}`}>
                    {data.label}
                </div>
            );
        }
    
        return <components.Option {...props}>{highlightMatch(data.label)}</components.Option>;
    };
    

    return (
        <>
            <div className="custom-select-wrapper">
                <i className="icon-magnifying-glass" />
                <Select
                    options={ordersListSelect}
                    placeholder="Tragen Sie die Auftragsnummer oder -name ein."
                    className="custom-select"
                    classNamePrefix="react-select"
                    components={{ Option: CustomOption }}
                    onChange={handleSelectChange}
                    isClearable
                    isSearchable
                />
            </div>
            <p className="order-text subheading__regular">
                Bitte tragen Sie Ihre Auftragsnummer oder -name ein und bestätigen Sie mit ENTER oder wählen einen
                Auftrag aus der Liste aus.
            </p>
            <div className="table-list table-list--secondary">
                <table role="table">
                    <thead>
                        <tr role="row">
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">
                                    Auftrag <i className="icon-caret-up-down" onClick={() => toggleOrder("id")}/>
                                </div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">Name</div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">Adresse</div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">Verantwortlicher</div>
                            </th>
                            <th role="columnheader" className="no-actions">
                                <div className="body-normal__semibold">Bauabschnitte</div>
                            </th>
                            <th role="columnheader"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td className="table-loading" colSpan={7}>
                                    <Loading />
                                </td>
                            </tr>
                        ) : ordersList.length === 0 ? (
                            <tr>
                                <td className="table-no-result" colSpan={7}>
                                    <ListNoResult />
                                </td>
                            </tr>
                        ) : (
                            ordersList.map((order, index) => (
                                <tr>
                                    <td role="cell" className="body-normal__regular no-actions" data-label={"Auftrag"}>
                                        {order.system_id ? order.system_id : ""}
                                    </td>
                                    <td role="cell" className="body-normal__regular no-actions" data-label={"Name"}>
                                        München Isar
                                    </td>
                                    <td
                                        role="cell"
                                        className="body-normal__regular 
                                        no-actions" // address
                                        data-label={"Adresse"}
                                    >
                                        {/* <span> */}
                                        {order.address ? order.address : ""}
                                        {/* </span> */}
                                        {/* <span>1 80311 München</span> */}
                                    </td>
                                    <td
                                        role="cell"
                                        className="body-normal__regular no-actions"
                                        data-label={"Verantwortlicher"}
                                    >
                                        Hauptverantwortliche des Kunden
                                    </td>
                                    <td
                                        role="cell"
                                        className="body-normal__regular no-actions"
                                        data-label={"Bauabschnitte"}
                                    >
                                        {order.sub_orders_count ? order.sub_orders_count : "-"}
                                    </td>
                                    <td role="cell" className="table-list__button no-actions" data-label={" "}>
                                        <div
                                            data-tooltip-id="tooltip"
                                            data-tooltip-content="Auftrag anzeigen"
                                            data-tooltip-place="top"
                                            data-tooltip-offset={10}
                                            className="button button-gost button--big button--grey"
                                            onClick={() => navigate(PATHS.orderDetails + order.id)}
                                        >
                                            <i className="button__icon icon-arrow-right"></i>
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
                            className={`form__label caption__regular ${ordersList.length > 0 ? "primary-green" : ""}`}
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

export default Orders;
