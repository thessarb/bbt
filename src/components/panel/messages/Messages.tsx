import React, { useState, useEffect, useRef } from "react";
import ListNoResult from "../dashboard/deadlines/ListNoResult";
import MessagesTable from "./AllMessagesTable";
import UnreadMessagesTable from "./UnreadMessagesTable";
import ReadMessagesTable from "./ReadMessagesTable";
import Select, { SingleValue } from "react-select";
import { makeApiCall } from "src/api/apiRequests";
import API_HEADERS from "src/api/apiConfig";
import API_PATHS from "src/api/apiPaths";

const Messages = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [visibleTab, setVisibleTab] = useState(activeTab);
    const [showBigFilter, setShowBigFilter] = useState(false);
    const dropdownRefFilter = useRef<HTMLDivElement | null>(null);
    const [notificationsFiltering, setNotificationsFiltering] = useState<Record<string, any[]>>({
        message: [],
        type: [],
        notifiable_id: [],
    });

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
            const updatedFilters = prev.map((filter) =>
                filter.id === id ? { ...filter, [key]: value } : filter
            );
    
            if (key === "selectedOption" && value) {
                const filterValue = value.value;
    
                const filterActions: { [key: string]: string } = {
                    filter_message: "message",
                    filter_type: "type",
                    filter_notifiable_id: "notifiable_id"
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

    useEffect(() => {
        setVisibleTab(activeTab);
    }, [activeTab]);

    const getNotificationsFilter = async (key: string) => {
        const dynamicPath = `${API_PATHS.notificationFilter}${key}`;
        try {
            const response: any = await makeApiCall(dynamicPath, "GET", API_HEADERS.authenticated);
            setNotificationsFiltering((prev) => ({
                ...prev,
                [key]: response.response ? response.response : [],
            }));
        } catch (error) {
            console.error("Failed to fetch notifications filter options:", error);
        }
    };

    return (
        <>
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
                                                { value: "filter_notifiable_id", label: "Auftrag" },
                                                { value: "filter_message", label: "Inhalt" },
                                                { value: "filter_type", label: "Kritisch" },
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
                                                filter.selectedOption?.value === "filter_message"
                                                    ? notificationsFiltering.message.map((item) => ({
                                                          value: item.message,
                                                          label: item.message,
                                                      }))
                                                    : filter.selectedOption?.value === "filter_type"
                                                    ? notificationsFiltering.type.map((item) => ({
                                                          value: item.type,
                                                          label: item.type,
                                                      }))
                                                    : filter.selectedOption?.value === "filter_notifiable_id"
                                                    ? notificationsFiltering.notifiable_id.map((item) => ({
                                                          value: item.notifiable_id,
                                                          label: item.notifiable_id,
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

            <div className="tab tab__messages">
                <div className="tab__header">
                    <div className="tab__buttons">
                        <button
                            className={`tab__item subheading__regular ${activeTab === "all" ? "active" : ""}`}
                            onClick={() => setActiveTab("all")}
                        >
                            <span className="button__text">Alle</span>
                        </button>
                        <button
                            className={`tab__item subheading__regular ${activeTab === "unread" ? "active" : ""}`}
                            onClick={() => setActiveTab("unread")}
                        >
                            <span className="button__text">Ungelesen</span>
                        </button>

                        <button
                            className={`tab__item subheading__regular ${activeTab === "read" ? "active" : ""}`}
                            onClick={() => setActiveTab("read")}
                        >
                            <span className="button__text">Gelesen</span>
                        </button>
                    </div>
                </div>
                <div className="tab__content">
                    {visibleTab === "all" && (
                        <div className={`tab__content-item ${activeTab === "all" ? "active" : "close"}`}>
                            <MessagesTable filters={filters} applyFilters={applyFilters} />
                        </div>
                    )}
                    {visibleTab === "unread" && (
                        <div className={`tab__content-item ${activeTab === "unread" ? "active" : "close"}`}>
                            <UnreadMessagesTable filters={filters} applyFilters={applyFilters} />
                        </div>
                    )}
                    {visibleTab === "read" && (
                        <div className={`tab__content-item ${activeTab === "read" ? "active" : "close"}`}>
                            <ReadMessagesTable filters={filters} applyFilters={applyFilters} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Messages;
