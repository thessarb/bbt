import React, { useState, useRef, useEffect } from "react";
import CustomPagination from "src/helpers/CustomPaginate";
import Select from "react-select";
import PlanViewModal from "src/components/panel/dashboard/deadlines/PlanViewModal";
import PlaneHochladenModal from "src/components/Modal/PlaneHochladenModal";

const Bauabschnitte = () => {
    const [expandedRow, setExpandedRow] = useState(null);
    const [nestedExpandedRow, setNestedExpandedRow] = useState<{ [key: number]: number | null }>({});
    const [innerNestedExpandedRow, setInnerNestedExpandedRow] = useState<{ [key: number]: { [key: number]: boolean } }>(
        {}
    );
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [showPlanFreigeben, setShowPlanFreigeben] = useState(false);
    const [showPlaneHochladenModal, setShowPlaneHochladenModal] = useState(false);
    const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
    const [showBigFilter, setShowBigFilter] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const dropdownRefFilter = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const toggleRow = (index: any) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    const toggleNestedRow = (parentIndex: number, nestedIndex: number) => {
        setNestedExpandedRow((prev) => ({
            ...prev,
            [parentIndex]: prev[parentIndex] === nestedIndex ? null : nestedIndex,
        }));
    };

    const toggleInnerNestedRow = (parentIndex: number, nestedIndex: number) => {
        setInnerNestedExpandedRow((prev) => ({
            ...prev,
            [parentIndex]: {
                ...prev[parentIndex],
                [nestedIndex]: !prev[parentIndex]?.[nestedIndex],
            },
        }));
    };

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

    const data = [
        {
            id: 1,
            name: "Product 1",
            category: "Category A",
            description: "A detailed description",
            price: "$100",
            stock: "In stock",
            supplier: "Supplier A",
            rating: "4.5",
            subRecords: [
                {
                    id: "1-1",
                    details: "Details of sub-record 1-1",
                    moreInfo: "More information about sub-record 1-1",
                    notes: "Additional notes for sub-record 1-1",
                    innerRecords: [
                        {
                            id: "1-1-1",
                            nr: 1,
                            ebene: 1,
                            laenge: 5.5,
                            breite: 2.0,
                            gewicht: 1.5,
                            montagenummer: "M123",
                        },
                        {
                            id: "1-1-2",
                            nr: 2,
                            ebene: 2,
                            laenge: 6.0,
                            breite: 2.5,
                            gewicht: 2.0,
                            montagenummer: "M124",
                        },
                    ],
                },
                {
                    id: "1-2",
                    details: "Details of sub-record 1-2",
                    moreInfo: "More information about sub-record 1-2",
                    notes: "Additional notes for sub-record 1-2",
                    innerRecords: [
                        {
                            id: "1-2-1",
                            nr: 3,
                            ebene: 1,
                            laenge: 4.0,
                            breite: 1.5,
                            gewicht: 1.0,
                            montagenummer: "M125",
                        },
                        {
                            id: "1-2-2",
                            nr: 4,
                            ebene: 2,
                            laenge: 5.5,
                            breite: 2.0,
                            gewicht: 1.8,
                            montagenummer: "M126",
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            name: "Product 2",
            category: "Category B",
            description: "Another description",
            price: "$200",
            stock: "Out of stock",
            supplier: "Supplier B",
            rating: "4.0",
            subRecords: [
                {
                    id: "2-1",
                    details: "Details of sub-record 2-1",
                    moreInfo: "More information about sub-record 2-1",
                    notes: "Additional notes for sub-record 2-1",
                    innerRecords: [
                        {
                            id: "2-1-1",
                            nr: 1,
                            ebene: 1,
                            laenge: 5.0,
                            breite: 2.2,
                            gewicht: 1.6,
                            montagenummer: "M127",
                        },
                        {
                            id: "2-1-2",
                            nr: 2,
                            ebene: 2,
                            laenge: 6.2,
                            breite: 2.8,
                            gewicht: 2.5,
                            montagenummer: "M128",
                        },
                    ],
                },
                {
                    id: "2-2",
                    details: "Details of sub-record 2-2",
                    moreInfo: "More information about sub-record 2-2",
                    notes: "Additional notes for sub-record 2-2",
                    innerRecords: [
                        {
                            id: "2-2-1",
                            nr: 3,
                            ebene: 1,
                            laenge: 4.5,
                            breite: 1.8,
                            gewicht: 1.2,
                            montagenummer: "M129",
                        },
                        {
                            id: "2-2-2",
                            nr: 4,
                            ebene: 2,
                            laenge: 5.5,
                            breite: 2.1,
                            gewicht: 1.9,
                            montagenummer: "M130",
                        },
                    ],
                },
            ],
        },
    ];

    const toggleFilterDropdown = () => {
        setShowBigFilter((prev) => !prev);
    };

    return (
        <>
            <div className="baubschnitte-managment">
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
                            <div className="filters">
                                <div className="form col-12 col-md-5 col-sm-3">
                                    <div className="form__field-select">
                                        <label htmlFor="filter-select" className={`form__label caption__regular`}>
                                            Reihe
                                        </label>
                                        <Select
                                            id="filter-select"
                                            classNamePrefix="react-select"
                                            className={`form__select body-normal__regular`}
                                            placeholder="Wählen Sie eine Tabellenreihe"
                                            isClearable={true}
                                            closeMenuOnSelect={true}
                                            name="company-type"
                                            isSearchable={true}
                                            required
                                        />
                                        <span className="error-message caption__regular">Error message</span>
                                    </div>
                                </div>
                                <div className="form__field col-12 col-md-5 col-sm-3">
                                    <label htmlFor="filter" className={`form__label caption__regular`}>
                                        Wert
                                    </label>
                                    <input
                                        id="filter"
                                        className="form__input body-normal__regular"
                                        type="text"
                                        placeholder="Nach welchem Wert möchten Sie filtern"
                                        required
                                    />
                                </div>
                                <div className="delete-filter">
                                    <button className="button button-gost button--big button--grey">
                                        <i className="button__icon icon-trash" />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <button className="button button-gost button--big button--green">
                                    <i className="button__icon icon-plus" />
                                    <span className="button__text">Weiteren Filter hinzufügen</span>
                                </button>
                            </div>
                            <div className="no-background">
                                <button className="button button-secondary button--big button--green">
                                    <span className="button__text">Filter anwenden</span>
                                </button>
                            </div>
                        </div>
                    )}
                    <span className="body-small__regular">Aktive Filter:</span>
                    <span className="baubschnitte-managment__filter-managment--filtered body-small__medium">
                        Haus 2
                    </span>
                    <span className="baubschnitte-managment__filter-managment--filtered body-small__medium">
                        Haus 2
                    </span>
                    <span className="baubschnitte-managment__filter-managment--filtered body-small__medium">
                        Haus 2
                    </span>
                    <span className="baubschnitte-managment__filter-managment--filtered body-small__medium">
                        Haus 2
                    </span>
                    <span className="baubschnitte-managment__filter-managment--filtered body-small__medium">
                        Haus 2
                    </span>
                </div>

                <div className="baubschnitte-managment__baubschnitte-buttons">
                    <div className="toggle-switch">
                        <label className="switch toggle-switch__switch baubschnitte-toggle">
                            <input className="toggle-switch__input baubschnitte-input" type="checkbox" id="switch-1" />
                            <span className="toggle-switch__slider baubschnitte-slider"></span>
                        </label>
                        <label htmlFor="switch-1" className="toggle-switch__text body-big__regular">
                            Abgeschlossene Bauabschnitte einblenden
                        </label>
                    </div>
                    {!showAdditionalButtons && (
                        <button className="button button-secondary button--big button--grey" onClick={toggleDropdown}>
                            <span className="button__text">Aktionen</span>
                            <i className="button__icon icon-dots-three-vertical"></i>
                        </button>
                    )}
                    {showAdditionalButtons && (
                        <div className="baubschnitte-managment__baubschnitte-buttons--hidden-buttons">
                            <button className="button button-primary button--big button--green">
                                <i className="button__icon icon-arrow-square-out"></i>
                                <span className="button__text">Excel exportieren</span>
                            </button>
                            <button
                                className="button button-secondary button--big button--grey"
                                onClick={() => setShowAdditionalButtons(false)}
                            >
                                <span className="button__text">Export Abbrechen</span>
                            </button>
                        </div>
                    )}

                    {isDropdownOpen && (
                        <div
                            className={`baubschnitte-managment__dropdown ${isDropdownOpen ? "is-visible" : ""}`}
                            ref={dropdownRef}
                        >
                            <button
                                className="button button-primary button--big button--orange"
                                onClick={() => setShowPlanFreigeben(true)}
                            >
                                <i className="button__icon icon-share"></i>
                                <span className="button__text">Pläne freigeben</span>
                            </button>
                            {showPlanFreigeben && (
                                <PlanViewModal show={showPlanFreigeben} setShow={setShowPlanFreigeben} />
                            )}
                            <button
                                className="button button-primary button--big button--green"
                                onClick={() => setShowPlaneHochladenModal(true)}
                            >
                                <i className="button__icon icon-file-arrow-up"></i>
                                <span className="button__text">Pläne hochladen</span>
                            </button>
                            {showPlaneHochladenModal && (
                                <PlaneHochladenModal
                                    showPlaneHochladenModal={showPlaneHochladenModal}
                                    setShowPlaneHochladenModal={setShowPlaneHochladenModal}
                                />
                            )}
                            <button className="button button-secondary button--big button--grey">
                                <i className="button__icon icon-files"></i>
                                <span className="button__text">Dokumente anzeigen</span>
                            </button>
                            <button
                                className="button button-secondary button--big button--grey"
                                onClick={() => {
                                    setShowAdditionalButtons(true);
                                    setDropdownOpen(false);
                                }}
                            >
                                <i className="button__icon icon-arrow-square-out"></i>
                                <span className="button__text">Excel exportieren</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="table-list-accordion">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div>
                                    <label className="body-normal__semibold form-checkbox">
                                        <input type="checkbox" />
                                    </label>
                                </div>
                            </th>
                            <th>
                                <div className="body-normal__semibold">
                                    BA
                                    <i className="icon-caret-up-down" />
                                </div>
                            </th>
                            <th>
                                <div className="body-normal__semibold">
                                    Haus
                                    <i className="icon-caret-up-down" />
                                </div>
                            </th>
                            <th>
                                <div className="body-normal__semibold">
                                    Geschoss
                                    <i className="icon-caret-up-down" />
                                </div>
                            </th>
                            <th>
                                <div className="body-normal__semibold">
                                    Ebene
                                    <i className="icon-caret-up-down" />
                                </div>
                            </th>
                            <th>
                                <div className="body-normal__semibold">
                                    Produkt
                                    <i className="icon-caret-up-down" />
                                </div>
                            </th>
                            <th>
                                <div className="body-normal__semibold">Plan Nr.</div>
                            </th>
                            <th>
                                <div className="body-normal__semibold">
                                    Status
                                    <i className="icon-caret-up-down" />
                                </div>
                            </th>
                            <th>
                                <div className="body-normal__semibold">
                                    Planung
                                    <i className="icon-caret-up-down" />
                                </div>
                            </th>
                            <th>
                                <div className="body-normal__semibold">
                                    Soll-Freigabe
                                    <i className="icon-caret-up-down" />
                                </div>
                            </th>
                            <th>
                                <div className="body-normal__semibold">
                                    Wunschlieferung
                                    <i className="icon-caret-up-down" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <tr
                                    className={`${expandedRow === index ? "expanded" : ""}`}
                                    onClick={() => toggleRow(index)}
                                >
                                    <td
                                        className={`body-normal__regular ${expandedRow === index ? "expanded" : ""}`}
                                        data-label={""}
                                    >
                                        {expandedRow === index ? (
                                            <i className="icon-caret-right expanded" />
                                        ) : (
                                            <i className="icon-caret-right" />
                                        )}
                                    </td>
                                    <td
                                        className={`body-normal__regular ${expandedRow === index ? "expanded" : ""}`}
                                        data-label={"BA"}
                                    >
                                        {item.id}
                                    </td>
                                    <td
                                        className={`body-normal__regular ${expandedRow === index ? "expanded" : ""}`}
                                        data-label={"Haus"}
                                    >
                                        {item.name}
                                    </td>
                                    <td
                                        className={`body-normal__regular ${expandedRow === index ? "expanded" : ""}`}
                                        data-label={"Geschoss"}
                                    >
                                        {item.category}
                                    </td>
                                    <td
                                        className={`body-normal__regular ${expandedRow === index ? "expanded" : ""}`}
                                        data-label={"Ebene"}
                                    >
                                        {item.description}
                                    </td>
                                    <td
                                        className={`body-normal__regular ${expandedRow === index ? "expanded" : ""}`}
                                        data-label={"Produkt"}
                                    >
                                        {item.price}
                                    </td>
                                    <td
                                        className={`body-normal__regular ${expandedRow === index ? "expanded" : ""}`}
                                        data-label={"Plan Nr."}
                                    >
                                        <div className="text-icon">{item.stock}</div>
                                    </td>
                                    <td
                                        className={`body-normal__regular ${expandedRow === index ? "expanded" : ""}`}
                                        data-label={"Status"}
                                    >
                                        <div className="tag tag--orange">{item.supplier}</div>
                                    </td>
                                    <td
                                        className={`body-normal__regular ${expandedRow === index ? "expanded" : ""}`}
                                        data-label={"Planung"}
                                    >
                                        {item.rating}
                                    </td>
                                    <td
                                        className={`body-normal__regular ${expandedRow === index ? "expanded" : ""}`}
                                        data-label={"Soll-Freigabe"}
                                    >
                                        {item.rating}
                                    </td>
                                    <td
                                        className={`body-normal__regular no-actions green-text centered ${
                                            expandedRow === index ? "expanded" : ""
                                        }`}
                                        data-label={"Wunschlieferung"}
                                    >
                                        {item.rating} <i className="icon-circle green-circle" />
                                    </td>
                                </tr>

                                {expandedRow === index && (
                                    <tr
                                        className={`${expandedRow === index ? "expanded" : ""}`}
                                        onClick={() => toggleRow(index)}
                                    >
                                        <td colSpan={11}>
                                            <div className="first-accordion">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <div className="body-normal__semibold"></div>
                                                            </th>
                                                            <th>
                                                                <div className="body-normal__semibold">Arrow</div>
                                                            </th>
                                                            <th>
                                                                <div className="body-normal__semibold">
                                                                    Sub-Plan Nr.
                                                                </div>
                                                            </th>
                                                            <th>
                                                                <div className="body-normal__semibold">Details</div>
                                                            </th>
                                                            <th>
                                                                <div className="body-normal__semibold">Details</div>
                                                            </th>
                                                            <th>
                                                                <div className="body-normal__semibold">Details</div>
                                                            </th>
                                                            <th>
                                                                <div className="body-normal__semibold">
                                                                    Additional Info
                                                                </div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {item.subRecords.map((subItem, nestedIndex) => (
                                                            <React.Fragment key={subItem.id}>
                                                                <tr
                                                                    className={`${
                                                                        nestedExpandedRow[index] === nestedIndex
                                                                            ? "opened"
                                                                            : ""
                                                                    }`}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        toggleNestedRow(index, nestedIndex);
                                                                    }}
                                                                >
                                                                    <td
                                                                        className={`body-normal__regular ${
                                                                            nestedExpandedRow[index] === nestedIndex
                                                                                ? "expanded"
                                                                                : ""
                                                                        }`}
                                                                    >
                                                                        {nestedExpandedRow[index] === nestedIndex ? (
                                                                            <i className="icon-caret-right expanded" />
                                                                        ) : (
                                                                            <i className="icon-caret-right" />
                                                                        )}
                                                                    </td>
                                                                    <td
                                                                        className={`body-normal__regular ${
                                                                            nestedExpandedRow[index] === nestedIndex
                                                                                ? "expanded"
                                                                                : ""
                                                                        }`}
                                                                    >
                                                                        {subItem.id}
                                                                    </td>
                                                                    <td
                                                                        className={`body-normal__regular ${
                                                                            nestedExpandedRow[index] === nestedIndex
                                                                                ? "expanded"
                                                                                : ""
                                                                        }`}
                                                                    >
                                                                        {subItem.details}
                                                                    </td>
                                                                    <td
                                                                        className={`body-normal__regular ${
                                                                            nestedExpandedRow[index] === nestedIndex
                                                                                ? "expanded"
                                                                                : ""
                                                                        }`}
                                                                    >
                                                                        {subItem.details}
                                                                    </td>
                                                                    <td
                                                                        className={`body-normal__regular ${
                                                                            nestedExpandedRow[index] === nestedIndex
                                                                                ? "expanded"
                                                                                : ""
                                                                        }`}
                                                                    >
                                                                        {subItem.details}
                                                                    </td>
                                                                    <td
                                                                        className={`body-normal__regular  ${
                                                                            nestedExpandedRow[index] === nestedIndex
                                                                                ? "expanded"
                                                                                : ""
                                                                        }`}
                                                                    >
                                                                        {subItem.details}
                                                                    </td>
                                                                    <td
                                                                        className={`body-normal__regular  ${
                                                                            nestedExpandedRow[index] === nestedIndex
                                                                                ? "expanded"
                                                                                : ""
                                                                        }`}
                                                                    >
                                                                        {subItem.details}
                                                                    </td>
                                                                </tr>
                                                                {nestedExpandedRow[index] === nestedIndex && (
                                                                    <>
                                                                        <tr
                                                                            className={`${
                                                                                expandedRow === index ? "expanded" : ""
                                                                            }`}
                                                                        >
                                                                            <td colSpan={7}>
                                                                                <div className="second-accordion">
                                                                                    <table>
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th>
                                                                                                    <div className="body-normal__semibold">
                                                                                                        Nr.
                                                                                                    </div>
                                                                                                </th>
                                                                                                <th>
                                                                                                    <div className="body-normal__semibold">
                                                                                                        Ebene
                                                                                                    </div>
                                                                                                </th>
                                                                                                <th>
                                                                                                    <div className="body-normal__semibold">
                                                                                                        Länge
                                                                                                    </div>
                                                                                                </th>
                                                                                                <th>
                                                                                                    <div className="body-normal__semibold">
                                                                                                        Breite
                                                                                                    </div>
                                                                                                </th>
                                                                                                <th>
                                                                                                    <div className="body-normal__semibold">
                                                                                                        Gewicht
                                                                                                    </div>
                                                                                                </th>
                                                                                                <th>
                                                                                                    <div className="body-normal__semibold">
                                                                                                        Montagenummer
                                                                                                    </div>
                                                                                                </th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            {subItem.innerRecords.map(
                                                                                                (innerItem) => (
                                                                                                    <tr
                                                                                                        key={
                                                                                                            innerItem.id
                                                                                                        }
                                                                                                        onClick={(
                                                                                                            e
                                                                                                        ) => {
                                                                                                            e.stopPropagation();
                                                                                                            toggleInnerNestedRow(
                                                                                                                index,
                                                                                                                nestedIndex
                                                                                                            );
                                                                                                        }}
                                                                                                    >
                                                                                                        <td>
                                                                                                            <div className="body-normal__regular">
                                                                                                                {
                                                                                                                    innerItem.nr
                                                                                                                }
                                                                                                            </div>
                                                                                                        </td>

                                                                                                        <td>
                                                                                                            <div className="body-normal__regular">
                                                                                                                {
                                                                                                                    innerItem.ebene
                                                                                                                }
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <div className="body-normal__regular">
                                                                                                                {
                                                                                                                    innerItem.laenge
                                                                                                                }
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <div className="body-normal__regular">
                                                                                                                {
                                                                                                                    innerItem.breite
                                                                                                                }
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <div className="body-normal__regular">
                                                                                                                {
                                                                                                                    innerItem.gewicht
                                                                                                                }
                                                                                                            </div>
                                                                                                        </td>
                                                                                                        <td>
                                                                                                            <div className="body-normal__regular">
                                                                                                                {
                                                                                                                    innerItem.montagenummer
                                                                                                                }
                                                                                                            </div>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                )
                                                                                            )}
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )}
                                                            </React.Fragment>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                                <div className="spacer"></div>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination-container">
                <div className="form">
                    <div className="form__field-select">
                        <label
                            htmlFor="pagination"
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
                <CustomPagination data={mockData} setActivePage={(e) => setPage(e)} />
            </div>
        </>
    );
};
export default Bauabschnitte;
