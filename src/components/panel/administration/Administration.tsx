import React, { useEffect, useState, useRef } from "react";
import ListNoResult from "../dashboard/deadlines/ListNoResult";
import ActiveUsers from "./users/ActiveUsers";
import InactiveUsers from "./users/InactiveUsers";
import CreateUserModal from "./users/CreateUserModal";
import CustomerList from "./users/CustomerList";
import Select, { SingleValue } from "react-select";
import { makeApiCall } from "src/api/apiRequests";
import API_HEADERS from "src/api/apiConfig";
import API_PATHS from "src/api/apiPaths";

const Administration = () => {
    // Tab
    const [activeTab, setActiveTab] = useState(0);
    const [visibleTab, setVisibleTab] = useState(activeTab);
    const [showBigFilter, setShowBigFilter] = useState(false);
    const dropdownRefFilter = useRef<HTMLDivElement | null>(null);
    const [usersFiltering, setUsersFiltering] = useState<Record<string, any[]>>({
        firstname: [],
        lastname: [],
        status_id: [],
        role_id: [],
        email: [],
    });

    // Create User Modal
    const [refreshUsersList, setRefreshUsersList] = useState(false);
    const [showCreateUser, setShowCreateUser] = useState(false);

    const [filters, setFilters] = useState<
        { id: number; selectedOption: SingleValue<{ value: string; label: string }>; inputValue: string }[]
    >([{ id: 1, selectedOption: null, inputValue: "" }]);

    const [appliedFilters, setAppliedFilters] = useState<
        { selectedOption: SingleValue<{ value: string; label: string }>; inputValue: string }[]
    >([]);

    const [applyFilters, setApplyFilters] = useState(0);
    const toggleFilterDropdown = () => {
        setShowBigFilter((prev) => !prev);
    };

    const addFilter = () => {
        if (filters.length < 5) {
            setFilters((prev) => [...prev, { id: prev.length + 1, selectedOption: null, inputValue: "" }]);
        }
    };

    const updateFilter = (id: number, key: "selectedOption" | "inputValue", value: any) => {
        setFilters((prev) => {
            const updatedFilters = prev.map((filter) => (filter.id === id ? { ...filter, [key]: value } : filter));

            if (key === "selectedOption" && value) {
                const filterValue = value.value;

                const filterActions: { [key: string]: string } = {
                    filter_firstname: "firstname",
                    filter_lastname: "lastname",
                    filter_email: "email",
                    filter_role_id: "role_id",
                    filter_status_id: "status_id",
                };

                if (filterActions[filterValue]) {
                    getNotificationsFilter(filterActions[filterValue]);
                }
            }

            return updatedFilters;
        });
    };

    const deleteFilter = (id: number) => {
        setFilters((prev) => {
            if (prev.length === 1) {
                return prev.map((filter) =>
                    filter.id === id ? { ...filter, selectedOption: null, inputValue: "" } : filter
                );
            }
            return prev.filter((filter) => filter.id !== id);
        });
    };

    const deleteSearchParam = (id: number) => {
        setFilters((prev) =>
            prev.map((filter) => (filter.id === id ? { ...filter, inputValue: "", selectedOption: null } : filter))
        );
        setApplyFilters((prev) => prev + 1);
    };

    const hasActiveFilters = appliedFilters.length > 0;

    const getNotificationsFilter = async (key: string) => {
        const dynamicPath = `${API_PATHS.userFilter}${key}`;
        try {
            const response: any = await makeApiCall(dynamicPath, "GET", API_HEADERS.authenticated);
            setUsersFiltering((prev) => ({
                ...prev,
                [key]: response.response ? response.response : [],
            }));
        } catch (error) {
            console.error("Failed to fetch notifications filter options:", error);
        }
    };

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    // Animate the content change
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleTab(activeTab);
        }, 350);

        return () => clearTimeout(timer);
    }, [activeTab]);

    const handleShow = () => {
        setShowCreateUser(true);
    };

    return (
        <>
            <div className="administration__box">
                <div className="baubschnitte-managment__filter-managment">
                    <button className="button button-secondary button--big button--grey" onClick={toggleFilterDropdown}>
                        <span className="button__text">Filter öffnen</span>
                        {showBigFilter ? (
                            <i className="button__icon icon-x" />
                        ) : (
                            <i className="button__icon icon-funnel-simple" />
                        )}
                    </button>
                    {showBigFilter && (
                        <div
                            className={`baubschnitte-managment__filter-managment--big-filter ${
                                showBigFilter ? "is-visible" : ""
                            }`}
                            ref={dropdownRefFilter}
                        >
                            <div className="dropdown-header">
                                <span className="body-normal__regular">Filter anwenden</span>
                            </div>
                            {filters.map((filter, index) => (
                                <div key={filter.id} className="filters">
                                    <div className="form">
                                        <div className="form__field-select">
                                            <label
                                                htmlFor={`filter-select-${filter.id}}`}
                                                className={`form__label caption__regular`}
                                            >
                                                Reihe
                                            </label>
                                            <Select
                                                id={`filter-select-${filter.id}}`}
                                                classNamePrefix="react-select"
                                                className={`form__select body-normal__regular`}
                                                placeholder="Wählen Sie eine Tabellenreihe"
                                                isClearable={true}
                                                closeMenuOnSelect={true}
                                                name="company-type"
                                                isSearchable={true}
                                                value={filter.selectedOption}
                                                options={[
                                                    { value: "filter_firstname", label: "Vorname" },
                                                    { value: "filter_lastname", label: "Nachname" },
                                                    { value: "filter_role_id", label: "Funktion" },
                                                    { value: "filter_email", label: "Email" },
                                                    { value: "filter_status_id", label: "Status" },
                                                ]}
                                                onChange={(e) => updateFilter(filter.id, "selectedOption", e)}
                                            />
                                            <span className="error-message caption__regular">Error message</span>
                                        </div>
                                    </div>
                                    <div className="form">
                                        <div className="form__field-select">
                                            <label htmlFor={`filter-value-${filter.id}`} className="form__label">
                                                Wert
                                            </label>
                                            <Select
                                                id={`filter-value-${filter.id}`}
                                                classNamePrefix="react-select"
                                                placeholder="Wählen Sie einen Wert"
                                                isClearable
                                                closeMenuOnSelect
                                                name="filter-value"
                                                isSearchable
                                                value={
                                                    filter.inputValue
                                                        ? { value: filter.inputValue, label: filter.inputValue }
                                                        : null
                                                }
                                                options={
                                                    filter.selectedOption?.value === "filter_firstname"
                                                        ? usersFiltering.firstname.map((item) => ({
                                                              value: item.firstname,
                                                              label: item.firstname,
                                                          }))
                                                        : filter.selectedOption?.value === "filter_lastname"
                                                        ? usersFiltering.lastname.map((item) => ({
                                                              value: item.lastname,
                                                              label: item.lastname,
                                                          }))
                                                        : filter.selectedOption?.value === "filter_role_id"
                                                        ? usersFiltering.role_id.map((item) => ({
                                                              value: item.role_id,
                                                              label: item.role_id,
                                                          }))
                                                        : filter.selectedOption?.value === "filter_email"
                                                        ? usersFiltering.email.map((item) => ({
                                                              value: item.email,
                                                              label: item.email,
                                                          }))
                                                        : filter.selectedOption?.value === "filter_status_id"
                                                        ? usersFiltering.status_id.map((item) => ({
                                                              value: item.status_id,
                                                              label: item.status_id,
                                                          }))
                                                        : []
                                                }
                                                onChange={(e) => updateFilter(filter.id, "inputValue", e?.value || "")}
                                            />
                                        </div>
                                    </div>
                                    <div className="delete-filter">
                                        <button
                                            className="button button-gost button--big button--grey"
                                            onClick={() => deleteFilter(filter.id)}
                                        >
                                            <i className="button__icon icon-trash" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div>
                                <button className="button button-gost button--big button--green" onClick={addFilter}>
                                    <i className="button__icon icon-plus" />
                                    <span className="button__text">Weiteren Filter hinzufügen</span>
                                </button>
                            </div>
                            <div className="no-background">
                                <button
                                    className="button button-secondary button--big button--green"
                                    type="submit"
                                    onClick={() => setApplyFilters((prev) => prev + 1)}
                                >
                                    <span className="button__text">Filter anwenden</span>
                                </button>
                            </div>
                        </div>
                    )}
                    {hasActiveFilters && <span className="body-small__regular">Aktive Filter:</span>}
                    {filters
                        .filter((filter) => String(filter.inputValue).trim() !== "")
                        .slice(0, 5)
                        .map((filter) => (
                            <span
                                key={filter.id}
                                data-tooltip-id="tooltip"
                                data-tooltip-content="Filter löschen"
                                data-tooltip-place="top"
                                data-tooltip-offset={10}
                                className="baubschnitte-managment__filter-managment--filtered body-small__medium"
                            >
                                {filter.inputValue}{" "}
                                <i
                                    className="icon-x"
                                    onClick={() => deleteSearchParam(filter.id)}
                                    style={{ cursor: "pointer" }}
                                />
                            </span>
                        ))}
                </div>
                <button onClick={handleShow} className="button button--green button--big">
                    <span>
                        <i className="button__icon icon-user-plus"></i>
                    </span>
                    <span className="button__text">Neuen Benutzer anlegen</span>
                </button>
                {showCreateUser && (
                    <CreateUserModal
                        show={showCreateUser}
                        setShow={setShowCreateUser}
                        setRefreshUsersList={setRefreshUsersList}
                    />
                )}
            </div>

            <div className="tab administration__tab">
                <div className="tab__header">
                    <div className="tab__buttons">
                        <button
                            className={`tab__item subheading__regular ${activeTab === 0 ? "active" : ""}`}
                            onClick={() => handleTabClick(0)}
                        >
                            <span className="button__text">Aktive Benutzer</span>
                        </button>
                        <button
                            className={`tab__item subheading__regular ${activeTab === 1 ? "active" : ""}`}
                            onClick={() => handleTabClick(1)}
                        >
                            <span className="button__text">Inaktive Benutzer</span>
                        </button>
                        <button
                            className={`tab__item subheading__regular ${activeTab === 2 ? "active" : ""}`}
                            onClick={() => handleTabClick(2)}
                        >
                            <span className="button__text">Kundenliste</span>
                        </button>
                    </div>
                </div>

                <div className="tab__content">
                    {visibleTab === 0 && (
                        <div id="active-users" className={`tab__content-item ${activeTab === 0 ? "active" : "close"}`}>
                            {ActiveUsers ? (
                                <ActiveUsers filters={filters} applyFilters={applyFilters} />
                            ) : (
                                <ListNoResult />
                            )}
                        </div>
                    )}
                    {visibleTab === 1 && (
                        <div
                            id="inactive-users"
                            className={`tab__content-item ${activeTab === 1 ? "active" : "close"}`}
                        >
                            {InactiveUsers ? (
                                <InactiveUsers
                                    refreshUsersList={refreshUsersList}
                                    filters={filters}
                                    applyFilters={applyFilters}
                                />
                            ) : (
                                <ListNoResult />
                            )}
                        </div>
                    )}
                    {visibleTab === 2 && (
                        <div id="customer-list" className={`tab__content-item ${activeTab === 2 ? "active" : "close"}`}>
                            <div className="tab__content-item--customer">
                                <i className="tab__content-item--customer-icon icon-info"></i>
                                <span className="body-normal__semibold">
                                    Nutzerdaten können nur in Gesys/Betsi geändert werden.
                                </span>
                            </div>
                            {CustomerList ? <CustomerList filters={filters} applyFilters={applyFilters} /> : <ListNoResult />}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Administration;
