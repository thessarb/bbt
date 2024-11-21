import Select from "react-select";
import CustomPagination from "../../../../helpers/CustomPaginate";
import React, {useEffect, useState} from "react";
import DeleteUsersModal from "./DeleteUsersModal";
import EditUserModal from "./EditUserModal";
import SearchFilter from "../../../../helpers/SearchFilter";
import API_PATHS from "../../../../api/apiPaths";
import {makeApiCall} from "../../../../api/apiRequests";
import API_HEADERS from "../../../../api/apiConfig";
import Loading from "../../../../helpers/Loading";

const ActiveUsers = () => {
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

    // Modal Delete
    const [show, setShow] = useState(false);
    const [name, setSetname] = useState('');
    const [lastName, setLastName] = useState('');
    const [deleteUser, setDeleteUser] = useState(0);

    const handleShow = (userId: number, name: string, lastName: string) => {
        setShow(true);
        setSetname(name);
        setLastName(lastName);
        setDeleteUser(userId);
    };

    // Modal Edit User
    const [showEditModal, setShowEditModal] = useState(false);
    const [userId, setUserId] = useState(0);

    const handleShowEditModal = (userId: number) => {
        setShowEditModal(true);
        setUserId(userId);
    };

    // functionality
    const [loading, setLoading] = useState<boolean>(false);
    const [pagination, setPagination] = useState<boolean>(true);
    const [userStatus, setUserStatus] = useState(1);
    const [usersList, setUsersList] = useState<any[]>([]);
    const [refreshList, setRefreshList] = useState(false);

    const getActiveUsers = async (): Promise<void> => {
        setLoading(true);
        const searchParams: any = {
            pagination: pagination,
            status : userStatus
        };

        const request: any = SearchFilter(searchParams, API_PATHS.userList);

        try {
            const response: any = await makeApiCall<ResponseType>(request, "GET", API_HEADERS.authenticated);
            setUsersList(response.response.data);
            setLoading(false);
        } catch (error: any) {
        }
    };

    useEffect(() => {
        getActiveUsers();
    }, [refreshList]);





    return (
            <>
                <div className="table-list table-list--secondary">
                    <table role="table">
                        <thead>
                        <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Funktion
                                    <i className="icon-caret-up-down"></i>
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

                        {!loading &&
                                (usersList.map((user, index) => (
                                        <tr key={user.id}>
                                            <td role="cell" className="body-normal__regular" data-label={"Funktion"}>
                                                {user.role.name}
                                            </td>
                                            <td role="cell" className="body-normal__regular" data-label={"Firma"}>
                                                {user.customer ? (user.customer.company ?
                                                        (user.customer.company.company_name) : user.customer.company_name) : user.company_name
                                                }                                            </td>
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
                                                {user.phone || user.mobile ?
                                                        <>
                                                            {user.phone && user.phone}
                                                            {user.mobile &&
                                                                    <>
                                                                        <br/>
                                                                        user.mobile
                                                                    </>
                                                            }

                                                        </> :
                                                        '-'
                                                }
                                            </td>

                                            <td role="cell" className="table-list__button" data-label={" "}>
                                                <div data-tooltip-id="tooltip"
                                                     data-tooltip-content="Nutzer bearbeiten"
                                                     data-tooltip-place="top"
                                                     data-tooltip-offset={5}
                                                     onClick={() => handleShowEditModal(user.id)}
                                                     className="button button-gost button--big button--grey">
                                                    <i className="button__icon icon-note-pencil"></i>
                                                </div>

                                                <div data-tooltip-id="tooltip"
                                                     data-tooltip-content="Nutzer deaktivieren"
                                                     data-tooltip-place="top"
                                                     data-tooltip-offset={5}
                                                     onClick={() => handleShow(user.id, user.firstname, user.lastname )}
                                                     className="button button-gost button--big button--grey">
                                                    <i className="button__icon icon-user-minus"></i>
                                                </div>

                                            </td>
                                        </tr>
                                ))
                        )}

                        </tbody>
                    </table>
                    {show &&
                            <DeleteUsersModal
                                show={show}
                                setShow={setShow}
                                userId={deleteUser}
                                name={name}
                                lastName={lastName}
                                setRefreshList={setRefreshList}
                        />
                    }
                    {showEditModal &&
                            <EditUserModal
                                    showEditModal={showEditModal}
                                    setShowEditModal={setShowEditModal}
                                    userId={userId}
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

export default ActiveUsers;