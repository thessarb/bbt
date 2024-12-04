import Select, { SingleValue } from "react-select";
import CustomPagination from "../../../../helpers/CustomPaginate";
import React, { useEffect, useState } from "react";
import DeleteUsersModal from "./DeleteUsersModal";
import EditUserModal from "./EditUserModal";
import SearchFilter from "../../../../helpers/SearchFilter";
import API_PATHS from "../../../../api/apiPaths";
import { makeApiCall } from "../../../../api/apiRequests";
import API_HEADERS from "../../../../api/apiConfig";
import Loading from "../../../../helpers/Loading";

interface Filter {
    id: number;
    selectedOption: SingleValue<{ value: string; label: string }> | null;
    inputValue: string;
}

interface ActiveUsersProps {
    filters: Filter[];
    applyFilters: number;
}
const ActiveUsers: React.FC<ActiveUsersProps> = ({ filters, applyFilters }) => {
    const [userStatus, setUserStatus] = useState(1);
    const [usersList, setUsersList] = useState<any[]>([]);
    const [refreshList, setRefreshList] = useState(false);

    const [page, setPage] = useState<number>(1);
    const [rows, setRows] = useState<number>(5);
    const [paginate, setPaginate] = useState<any>([]);
    const [pagination, setPagination] = useState<boolean>(true);
    const [column, setColumn] = useState("");
    const [orderColumn, setOrderColumn] = useState("asc");
    const [loading, setLoading] = useState<boolean>(false);

    // Modal Delete
    const [show, setShow] = useState(false);
    const [name, setSetname] = useState("");
    const [lastName, setLastName] = useState("");
    const [deleteUser, setDeleteUser] = useState(0);

    // Modal Edit User
    const [showEditModal, setShowEditModal] = useState(false);
    const [userId, setUserId] = useState(0);

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

    const handleShow = (userId: number, name: string, lastName: string) => {
        setShow(true);
        setSetname(name);
        setLastName(lastName);
        setDeleteUser(userId);
    };

    const handleShowEditModal = (userId: number) => {
        setShowEditModal(true);
        setUserId(userId);
    };

    const getActiveUsers = async (): Promise<void> => {
        const searchParams: any = {
            pagination: pagination,
            page: page,
            rows: rows,
            status: userStatus,
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

        const request: any = SearchFilter(searchParams, API_PATHS.userList);

        try {
            const response: any = await makeApiCall<ResponseType>(request, "GET", API_HEADERS.authenticated);
            setUsersList(response.response.data);
            setPaginate({
                total: response.response.total || 0,
                current_page: response.response.current_page || 1,
                per_page: rows,
                last_page: Math.ceil((response.response.total || 0) / rows),
            });
            setLoading(false);
        } catch (error: any) {}
    };

    useEffect(() => {
        if (applyFilters > 0) {
            setPage(1);
            getActiveUsers();
        }
    }, [applyFilters]);

    useEffect(() => {
        getActiveUsers();
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
                                    Funktion
                                    <i className="icon-caret-up-down" onClick={() => toggleOrder("role_id")}></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Firma
                                    <i className="icon-caret-up-down"></i>
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
                                <div className="body-normal__semibold">E-Mail</div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">Telefon</div>
                            </th>

                            <th role="columnheader"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList &&
                            usersList.map((user, index) => (
                                <tr key={user.id}>
                                    <td role="cell" className="body-normal__regular" data-label={"Funktion"}>
                                        {user.role.name}
                                    </td>
                                    <td role="cell" className="body-normal__regular" data-label={"Firma"}>
                                        {user.customer
                                            ? user.customer.company
                                                ? user.customer.company.company_name
                                                : user.customer.company_name
                                            : user.company_name}{" "}
                                    </td>
                                    <td role="cell" className="body-normal__regular" data-label={"Nachname"}>
                                        {user.lastname}
                                    </td>
                                    <td role="cell" className="body-normal__regular" data-label={"Vorname"}>
                                        {user.firstname}
                                    </td>
                                    <td role="cell" className="body-normal__regular" data-label={"E-Mail"}>
                                        {user.email}
                                    </td>
                                    <td role="cell" className="body-normal__regular" data-label={"Telefon"}>
                                        {user.phone || user.mobile ? (
                                            <>
                                                {user.phone && user.phone}
                                                {user.mobile && (
                                                    <>
                                                        <br />
                                                        user.mobile
                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            "-"
                                        )}
                                    </td>

                                    <td role="cell" className="table-list__button" data-label={" "}>
                                        <div
                                            data-tooltip-id="tooltip"
                                            data-tooltip-content="Nutzer bearbeiten"
                                            data-tooltip-place="top"
                                            data-tooltip-offset={5}
                                            onClick={() => handleShowEditModal(user.id)}
                                            className="button button-gost button--big button--grey"
                                        >
                                            <i className="button__icon icon-note-pencil"></i>
                                        </div>

                                        <div
                                            data-tooltip-id="tooltip"
                                            data-tooltip-content="Nutzer deaktivieren"
                                            data-tooltip-place="top"
                                            data-tooltip-offset={5}
                                            onClick={() => handleShow(user.id, user.firstname, user.lastname)}
                                            className="button button-gost button--big button--grey"
                                        >
                                            <i className="button__icon icon-user-minus"></i>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {show && (
                    <DeleteUsersModal
                        show={show}
                        setShow={setShow}
                        userId={deleteUser}
                        name={name}
                        lastName={lastName}
                        setRefreshList={setRefreshList}
                    />
                )}
                {showEditModal && (
                    <EditUserModal
                        showEditModal={showEditModal}
                        setShowEditModal={setShowEditModal}
                        userId={userId}
                        setRefreshList={setRefreshList}
                    />
                )}
                {loading && (
                    <div className="loading-container">
                        <Loading />
                    </div>
                )}
            </div>

            <div className="pagination-container">
                <div className="form">
                    <div className="form__field-select">
                        <label
                            htmlFor="pagination"
                            className={`form__label caption__regular ${
                                usersList.length > 0 ? "primary-green" : ""
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

export default ActiveUsers;
