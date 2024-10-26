import React, { useState, useEffect, useRef } from "react";
import Fristen from "./Fristen";
import Bauabschnitte from "./Bauabschnitte";
import Ansprechpartner from "./Ansprechpartner";

const OrderDetailsOverview = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<any>([]);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("fristen");
    const [selectedOption, setSelectedOption] = useState<{
        value: string;
        label: string;
    } | null>(null);
    const selectRef = useRef<HTMLDivElement>(null);

    const options = [
        { value: "1", label: "Auftragsnummer 1" },
        { value: "2", label: "Auftragsname 2" },
        { value: "3", label: "Auftragsname 3" },
        { value: "4", label: "Auftragsnummer 4" },
    ];

    const handleSearch = (event: any) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const filtered = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredOptions(filtered);
        setIsOptionsOpen(true);
    };

    const handleSelect = (option: any) => {
        setSelectedOption(option);
        setSearchTerm(option.label);
        setFilteredOptions([]);
        setIsOptionsOpen(false);
    };

    const getHighlightedText = (text: any, highlight: any) => {
        if (!highlight) {
            return text;
        }
        const regex = new RegExp(`(${highlight})`, "gi");
        const parts = text.split(regex);
        return parts.map((part: any, index: any) =>
            regex.test(part) ? (
                <span key={index} className="highlight">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOptionsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="search-container">
                <div className="searchable-select" ref={selectRef}>
                    <i className="icon-magnifying-glass" />
                    <input
                        type="text"
                        className="searchable-input"
                        placeholder="Tragen Sie die Auftragsnummer oder -name ein."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    {isOptionsOpen && (
                        <div className="select-options">
                            {filteredOptions.map((option: any) => (
                                <div key={option.value} className="select-option" onClick={() => handleSelect(option)}>
                                    {getHighlightedText(option.label, searchTerm)}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <button className="button button-gost button--big button--green">
                    <i className="button__icon icon-arrow-left"></i>
                    <span className="button__text">Zurück zur Auftragsübersicht</span>
                </button>
            </div>
            <div className="order-details">
                <div className="order-details__arrangment">
                    <span className="body-normal__regular">Auftrag</span>
                    <span className="body-big__semibold">80700 - München Isar</span>
                </div>
                <div className="order-details__arrangment">
                    <span className="body-normal__regular">Adresse</span>
                    <span className="body-big__semibold">Biergartenallee 1, 80311 München</span>
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
                            <Fristen/>
                        </div>
                    )}

                    {activeTab === "bauabschnitte" && (
                        <div
                            id="my-plane"
                            className={`tab__content-item ${activeTab === "bauabschnitte" ? "active" : "close"}`}
                        >
                            <Bauabschnitte/>
                        </div>
                    )}

                    {activeTab === "ansprechpartner" && (
                        <div
                            id="my-plane"
                            className={`tab__content-item ${activeTab === "ansprechpartner" ? "active" : "close"}`}
                        >
                            <Ansprechpartner/>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default OrderDetailsOverview;
