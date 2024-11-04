import React, { useState, useRef, useEffect } from "react";
import CustomPagination from "src/helpers/CustomPaginate";
import Select from "react-select";

const Bauabschnitte = () => {
    const [expandedRow, setExpandedRow] = useState(null);
    const [nestedExpandedRow, setNestedExpandedRow] = useState<{ [key: number]: number | null }>({});
    const [innerNestedExpandedRow, setInnerNestedExpandedRow] = useState<{ [key: number]: { [key: number]: boolean } }>(
        {}
    );

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

    return (
        <>
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
