import React, {useState, useEffect, useRef} from 'react';
import Select from "react-select";
import CustomPagination from "../../../../helpers/CustomPaginate";
import {Tooltip} from "react-tooltip";

function MainePlane() {
    // pagination
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

    const [activeRowId, setActiveRowId] = useState<null | number>(null);
    const rowRefs = useRef<{ [key: number]: HTMLTableRowElement | null }>({});

    // Start Accordion
    const handleRowClick = (index: number) => {
        setActiveRowId(index === activeRowId ? null : index);
    };
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 992px)");

        const updateRowHeights = () => {
            if (mediaQuery.matches) {
                Object.keys(rowRefs.current).forEach((key) => {
                    const row = rowRefs.current[parseInt(key)];
                    const content = row?.querySelector(".collapsed") as HTMLElement | null;

                    if (row && content) {
                        const contentHeight = content.scrollHeight;
                        if (parseInt(key) === activeRowId) {
                            row.style.height = `${contentHeight}px`;
                            content.style.maxHeight = `${contentHeight}px`;
                        } else {
                            row.style.height = "60px";
                            content.style.maxHeight = "18px";
                        }
                    }
                });
            } else {
                Object.keys(rowRefs.current).forEach((key) => {
                    const row = rowRefs.current[parseInt(key)];
                    const content = row?.querySelector(".collapsed") as HTMLElement | null;

                    if (row && content) {
                        const contentHeight = content.scrollHeight;
                        if (parseInt(key) === activeRowId) {
                            row.style.height = "auto";
                            content.style.maxHeight = `${contentHeight}px`;
                        } else {
                            row.style.height = "auto";
                            content.style.maxHeight = "18px";
                        }
                    }
                });
            }
        };

        updateRowHeights();
        mediaQuery.addEventListener("change", updateRowHeights);

        return () => {
            mediaQuery.removeEventListener("change", updateRowHeights);
        };
    }, [activeRowId]);

    return (
            <>
                <div className="messages table-list table-list--accordion">
                    <table role="table">
                        <thead>
                            <tr role="row">
                            <th role="columnheader"></th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Name
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Index
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Format
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Kommentar
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="contents body-normal__semibold">
                                    Datum
                                    <i className="icon-dots-three-vertical"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold"></div>
                            </th>
                        </tr>
                        </thead>

                        <tbody>
                        {[0, 1, 2].map((_, index) => (
                                <tr
                                        key={index}
                                        ref={(el) => (rowRefs.current[index] = el)}
                                        className={`body-normal__regular ${activeRowId === index ? "active" : ""}`}
                                        onClick={() => handleRowClick(index)}
                                >
                                    <td role="cell" className="body-normal__regular">
                                        <i className="icon-caret-right"></i>
                                    </td>
                                    <td role="cell" className="body-normal__regular" data-label={"Name"}>
                                        Elektroplan
                                    </td>
                                    <td role="cell" className="body-normal__regular" data-label={"Index"}>
                                        A
                                    </td>
                                    <td role="cell" className="body-normal__regular" data-label={"Format"}>
                                        PDF
                                    </td>

                                    <td role="cell" className="contents" data-label={"Kommentar"}>
                                        <span className="collapsed body-normal__regular">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi illum itaque nesciunt qui quis quod unde? Ab alias delectus, itaque libero porro quaerat, quam quos repudiandae saepe suscipit totam!
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate molestiae neque nisi odio perspiciatis. Blanditiis cum distinctio doloremque ipsam nam neque, nihil odit provident, quaerat quidem, sed tempora unde.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate molestiae neque nisi odio perspiciatis. Blanditiis cum distinctio doloremque ipsam nam neque, nihil odit provident, quaerat quidem, sed tempora unde.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate molestiae neque nisi odio perspiciatis. Blanditiis cum distinctio doloremque ipsam nam neque, nihil odit provident, quaerat quidem, sed tempora unde.
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate molestiae neque nisi odio perspiciatis. Blanditiis cum distinctio doloremque ipsam nam neque, nihil odit provident, quaerat quidem, sed tempora unde.
                                        </span>
                                    </td>
                                    <td role="cell" className="body-normal__regular" data-label={"Datum"}>
                                        01.07.2024
                                    </td>
                                    <td role="cell" className="table-list__button" data-label={" "}>
                                        <div className="button button-gost button--big button--grey">
                                            <i className="button__icon icon-note-pencil"></i>
                                        </div>
                                        <div
                                                data-tooltip-id="new-window"
                                                data-tooltip-content="Datei wird Datei  wird in neuem Browserfenser geöffnet"
                                                data-tooltip-place="top"
                                                data-tooltip-offset={0}
                                                className="button button-gost button--big button--grey">
                                            <i className="button__icon icon-eye"></i>
                                            <Tooltip id="new-window" className="custom-tooltip"/>
                                        </div>
                                    </td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="pagination-container">
                    <div className="form">
                        <div className="form__field-select">
                            <label
                                    htmlFor="pagination"
                                    className={`form__label caption__regular ${
                                            selectedOption ? "filled" : ""
                                    }`}
                            >
                                Einträge pro Seite
                            </label>

                            <Select
                                    id="pagination"
                                    classNamePrefix="react-select"
                                    className={`form__select body-normal__regular ${
                                            selectedOption ? "filled" : ""
                                    }`}
                                    placeholder={false}
                                    value={5}
                                    // options={options}
                                    isClearable={true}
                                    closeMenuOnSelect={true}
                                    name="company-type"
                                    isSearchable={true}
                                    required
                            />
                            <span className="error-message caption__regular">
              Error message
            </span>
                        </div>
                    </div>
                    <CustomPagination data={mockData} setActivePage={(e) => setPage(e)}/>
                </div>
            </>
    );
}

export default MainePlane;
