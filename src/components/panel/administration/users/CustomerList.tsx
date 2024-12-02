import Select from "react-select";
import CustomPagination from "../../../../helpers/CustomPaginate";
import React, {useEffect, useState} from "react";
import SearchFilter from "../../../../helpers/SearchFilter";
import API_PATHS from "../../../../api/apiPaths";
import {makeApiCall} from "../../../../api/apiRequests";
import API_HEADERS from "../../../../api/apiConfig";
import Loading from "../../../../helpers/Loading";
import ReactivateCustomerModal from "./ReactivateCustomerModal";

const CustomerList = () => {
    // Pagination
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

    // Modal Reactivate Customer
    const [show, setShow] = useState(false);
    const [reactivateCostumerId, setReactivateCostumerId] = useState(0);
    const [name, setSetname] = useState('');
    const [lastName, setLastName] = useState('');
    const handleShow = (customerId: number, name: string, lastName: string) => {
        setShow(true);
        setSetname(name);
        setLastName(lastName);
        setReactivateCostumerId(customerId);
    };

    // functionality
    const [loading, setLoading] = useState<boolean>(true);
    const [pagination, setPagination] = useState<boolean>(true);
    const [customerStatus, setCustomerStatus] = useState(2);
    const [customersList, setCustomersList] = useState<any[]>([]);
    const [refreshList, setRefreshList] = useState(false);

    const getActiveCustomers = async (): Promise<void> => {
        const searchParams: any = {
            pagination: pagination,
            status : customerStatus
        };

        const request: any = SearchFilter(searchParams, API_PATHS.customerList);

        try {
            const response: any = await makeApiCall<ResponseType>(request, "GET", API_HEADERS.authenticated);
            setCustomersList(response.response.data);
            setLoading(false);
        } catch (error: any) {
        }
    };

    useEffect(() => {
        getActiveCustomers();
    }, [refreshList]);

    return (
            <>
                <div className="table-list table-list--secondary">
                    <table role="table">
                        <thead>
                        <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Firma
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Nachname
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Vorname
                                    <i className="icon-caret-up-down"></i>
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
                            <label htmlFor="pagination"
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
    )
};

export default CustomerList;