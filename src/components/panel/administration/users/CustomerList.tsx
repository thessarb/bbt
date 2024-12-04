import Select, {SingleValue} from "react-select";
import CustomPagination from "../../../../helpers/CustomPaginate";
import React, {useEffect, useState} from "react";
import SearchFilter from "../../../../helpers/SearchFilter";
import API_PATHS from "../../../../api/apiPaths";
import {makeApiCall} from "../../../../api/apiRequests";
import API_HEADERS from "../../../../api/apiConfig";
import Loading from "../../../../helpers/Loading";
import ReactivateCustomerModal from "./ReactivateCustomerModal";

interface CustomerListProps {
    filters: Filter[];
    applyFilters: number;
}
interface Filter {
    id: number;
    selectedOption: SingleValue<{ value: string; label: string }> | null;
    inputValue: string;
}

const CustomerList: React.FC<CustomerListProps> = ({ filters, applyFilters }) => {
    const [customerStatus, setCustomerStatus] = useState(2);
    const [customersList, setCustomersList] = useState<any[]>([]);
    const [refreshList, setRefreshList] = useState(false);

    const [page, setPage] = useState<number>(1);
    const [rows, setRows] = useState<number>(5);
    const [paginate, setPaginate] = useState<any>([]);
    const [pagination, setPagination] = useState<boolean>(true);
    const [column, setColumn] = useState("");
    const [orderColumn, setOrderColumn] = useState("asc");
    const [loading, setLoading] = useState<boolean>(false);

    // Modal Reactivate Customer
    const [show, setShow] = useState(false);
    const [reactivateCostumerId, setReactivateCostumerId] = useState(0);
    const [name, setSetname] = useState('');
    const [lastName, setLastName] = useState('');

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

    const handleShow = (customerId: number, name: string, lastName: string) => {
        setShow(true);
        setSetname(name);
        setLastName(lastName);
        setReactivateCostumerId(customerId);
    };

    const getActiveCustomers = async (): Promise<void> => {
        const searchParams: any = {
            pagination: pagination,
            page: page,
            rows: rows,
            status : customerStatus
        };

        if (column) {
            searchParams.column = column;
            searchParams.order = orderColumn;
        }

        filters.forEach((filter) => {
            if (filter.selectedOption?.value) {
                searchParams[filter.selectedOption.value] = filter.inputValue;
            }
        });

        const request: any = SearchFilter(searchParams, API_PATHS.customerList);

        try {
            const response: any = await makeApiCall<ResponseType>(request, "GET", API_HEADERS.authenticated);
            setCustomersList(response.response.data);
            setPaginate({
                total: response.response.total || 0,
                current_page: response.response.current_page || 1,
                per_page: rows,
                last_page: Math.ceil((response.response.total || 0) / rows),
            });
            setLoading(false);
        } catch (error: any) {
        }
    };

    useEffect(() => {
        if (applyFilters > 0) {
            setPage(1);
            getActiveCustomers();
        }
    }, [applyFilters]);

    useEffect(() => {
        getActiveCustomers();
    }, [refreshList, page, rows, column, orderColumn]);

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
                <div className="table-list table-list--secondary">
                    <table role="table">
                        <thead>
                        <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Firma
                                    <i className="icon-caret-up-down" onClick={() => toggleOrder("role_id")}></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Nachname
                                    <i className="icon-caret-up-down" onClick={() => toggleOrder("lastname")}></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Vorname
                                    <i className="icon-caret-up-down" onClick={() => toggleOrder("firstname")}></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    E-Mail
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Telefon
                                </div>
                            </th>

                            <th role="columnheader"></th>
                        </tr>
                        </thead>
                        <tbody>

                        {customersList &&
                                (customersList.map((customer, index) => (
                                        <tr key={customer.id}>
                                            <td role="cell" className="body-normal__regular" data-label={"Firma"}>
                                                {customer.company ? customer.company.company_name : customer.company_name}
                                            </td>
                                            <td role="cell" className="body-normal__regular" data-label={"Nachname"}>
                                                {customer.lastname}
                                            </td>
                                            <td role="cell" className="body-normal__regular" data-label={"Vorname"}>
                                                {customer.firstname}
                                            </td>
                                            <td role="cell" className="body-normal__regular" data-label={"E-Mail"}>
                                                {customer.email}
                                            </td>
                                            <td role="cell" className="body-normal__regular" data-label={"Telefon"}>
                                                {customer.mobile1 || customer.mobile2 || customer.mobile3 ?
                                                        <>
                                                            {customer.mobile1 &&
                                                                    <>
                                                                        {customer.mobile1}
                                                                    </>
                                                            }
                                                            {customer.mobile2 &&
                                                                    <>
                                                                        <br/>
                                                                        {customer.mobile2}
                                                                    </>
                                                            }
                                                            {customer.mobile3 &&
                                                                    <>
                                                                        <br/>
                                                                        {customer.mobile3}
                                                                    </>
                                                            }
                                                        </> :
                                                        '-'
                                                }
                                            </td>

                                            <td role="cell" className="table-list__button" data-label={" "}>
                                                <div data-tooltip-id="tooltip"
                                                     data-tooltip-content="Nutzer reaktivieren"
                                                     data-tooltip-place="top"
                                                     data-tooltip-offset={5}
                                                     onClick={() => handleShow(customer.id, customer.firstname, customer.lastname)}
                                                     className="button button-gost button--big button--grey">
                                                    <i className="button__icon icon-note-pencil"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        ))
                                )}

                        </tbody>
                    </table>
                    {show &&
                            <ReactivateCustomerModal
                                    show={show}
                                    setShow={setShow}
                                    customerId={reactivateCostumerId}
                                    name={name}
                                    lastName={lastName}
                                    setRefreshList={setRefreshList}
                            />
                    }
                    {loading && <div className="loading-container">
                        <Loading/>
                    </div>}
                </div>

                <div className="pagination-container">
                <div className="form">
                    <div className="form__field-select">
                        <label
                            htmlFor="pagination"
                            className={`form__label caption__regular ${
                                customersList.length > 0 ? "primary-green" : ""
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
    )
};

export default CustomerList;