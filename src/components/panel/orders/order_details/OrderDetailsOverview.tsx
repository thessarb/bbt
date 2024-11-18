import React, {useState, useEffect, useRef} from "react";
import Select, {components} from "react-select";
import Fristen from "./Deadline";
import Bauabschnitte from "./OrderProducts";
import Ansprechpartner from "./ContactPerson";

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
        {value: "1", label: "Auftragsnummer 1"},
        {value: "2", label: "Auftragsname 2"},
        {value: "3", label: "Auftragsname 3"},
        {value: "4", label: "Auftragsnummer 4"},
    ];

    const handleSearch = (event: any) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const filtered = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredOptions(filtered);
        setIsOptionsOpen(true);
    };

    const filterOption = (option: any, inputValue: any) => {
        return option.label.toLowerCase().includes(inputValue.toLowerCase());
    };

    const handleSelect = (option: any) => {
        setSelectedOption(option);
    };

    const CustomOption = (props: any) => {
        const {data, selectProps} = props;
        const inputValue = selectProps.inputValue || "";

        const highlightMatch = (label: string) => {
            const regex = new RegExp(`(${inputValue})`, "gi");
            const parts = label.split(regex);

            return parts.map((part, index) =>
                    part.toLowerCase() === inputValue.toLowerCase() ? (
                            <span key={index} className="primary-green">{part}</span>
                    ) : (
                            part
                    )
            );
        };

        return (
                <components.Option {...props}>
                    {highlightMatch(data.label)}
                </components.Option>
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
                    <div className="custom-select-wrapper">
                        <i className="icon-magnifying-glass"/>
                        <Select
                                options={options}
                                placeholder="Tragen Sie die Auftragsnummer oder -name ein."
                                className="custom-select"
                                classNamePrefix="react-select"
                                components={{Option: CustomOption}}
                                onChange={handleSelect}
                                filterOption={filterOption}
                                isClearable
                                isSearchable
                        />
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
