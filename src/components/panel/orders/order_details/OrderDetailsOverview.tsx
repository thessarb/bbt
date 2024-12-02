import React, { useState, useEffect, useRef } from "react";
import Select, { components } from "react-select";
import { useNavigate, useParams } from "react-router";
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
import Fristen from "./Deadline";
import Bauabschnitte from "./OrderProducts";
import Ansprechpartner from "./ContactPerson";

const OrderDetailsOverview = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [subjectId, setSubjectId] = useState("");
    const [address, setAddress] = useState("");
    const [ordersListSelect, setOrdersListSelect] = useState<any[]>([]);
    const [paginationSelect, setPaginationSelect] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState("fristen");

    const getOrderDetails = async (): Promise<void> => {
        setLoading(true);
        const orderId = param.id;

        try {
            const response: any = await makeApiCall(
                API_PATHS.orderFind(Number(orderId)),
                "GET",
                API_HEADERS.authenticated
            );

            setSubjectId(response.response.subject_id);
            setAddress(response.response.address)
            getOrdersSelect();
            setLoading(false);
        } catch (error: any) {
        } finally {
            setLoading(false);
        }
    };

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
                {
                    value: "",
                    label: "Aktive Aufträge",
                    isDisabled: true,
                    className: "non-selectable-header caption__regular",
                },
                ...formattedOptions,
            ];
            setOrdersListSelect(optionsWithHeader);
            setLoading(false);
        } catch (error: any) {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getOrderDetails();
    }, []);

    const handleSelectChange = (selectedOption: { value: number; label: string } | null) => {
        if (selectedOption) {
            navigate(PATHS.orderDetails + selectedOption.value);
        }
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
            return <div className={`custom-option ${data.className}`}>{data.label}</div>;
        }

        return <components.Option {...props}>{highlightMatch(data.label)}</components.Option>;
    };

    return (
        <>
            <div className="search-container">
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

                <button className="button button-gost button--big button--green">
                    <i className="button__icon icon-arrow-left"></i>
                    <span className="button__text" onClick={() => navigate(PATHS.orders)}>Zurück zur Auftragsübersicht</span>
                </button>
            </div>
            <div className="order-details">
                <div className="order-details__arrangment">
                    <span className="body-normal__regular">Auftrag</span>
                    <span className="body-big__semibold">{subjectId ? subjectId : "-"} - München Isar</span>
                </div>
                <div className="order-details__arrangment">
                    <span className="body-normal__regular">Adresse</span>
                    <span className="body-big__semibold">{address ? address : "-"}</span>
                </div>
                <div className="order-details__arrangment">
                    <span className="body-normal__regular">Verantwortlicher</span>
                    <span className="body-big__semibold">Hauptverantwortliche des Kunden</span>
                </div>
            </div>
            <div className="tab">
                <div className="tab__header tab__order">
                    <div className="tab__buttons">
                        <button
                            className={`tab__item subheading__regular ${activeTab === "fristen" ? "active" : ""}`}
                            onClick={() => setActiveTab("fristen")}
                        >
                            <span className="button__text">Fristen</span>
                        </button>
                        <button
                            className={`tab__item subheading__regular ${activeTab === "bauabschnitte" ? "active" : ""}`}
                            onClick={() => setActiveTab("bauabschnitte")}
                        >
                            <span className="button__text">Bauabschnitte</span>
                        </button>
                        <button
                            className={`tab__item subheading__regular ${
                                activeTab === "ansprechpartner" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("ansprechpartner")}
                        >
                            <span className="button__text">Ansprechpartner</span>
                        </button>
                    </div>
                </div>

                <div className="tab__content">
                    {activeTab === "fristen" && (
                        <div
                            id="thomas-plane"
                            className={`tab__content-item ${activeTab === "fristen" ? "active" : "close"}`}
                        >
                            <Fristen />
                        </div>
                    )}

                    {activeTab === "bauabschnitte" && (
                        <div
                            id="my-plane"
                            className={`tab__content-item ${activeTab === "bauabschnitte" ? "active" : "close"}`}
                        >
                            <Bauabschnitte />
                        </div>
                    )}

                    {activeTab === "ansprechpartner" && (
                        <div
                            id="my-plane"
                            className={`tab__content-item ${activeTab === "ansprechpartner" ? "active" : "close"}`}
                        >
                            <Ansprechpartner />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default OrderDetailsOverview;
