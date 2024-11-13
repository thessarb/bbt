import React, {useState, useEffect, useRef} from "react";
import {Tooltip} from "react-tooltip";
import {Link} from "react-router-dom";

const MessagesTable = () => {
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
                                Auftrag
                                <i className="icon-caret-up-down"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className="body-normal__semibold">
                                Datum
                                <i className="icon-caret-up-down"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className="body-normal__semibold">
                                Betreff
                                <i className="icon-caret-up-down"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className="body-normal__semibold">
                                Kritisch
                                <i className="icon-caret-up-down"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className="contents body-normal__semibold">
                                Inhalt
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
                            >
                                <td role="cell" className="body-normal__regular" onClick={() => handleRowClick(index)}>
                                    <div data-tooltip-id="tooltip"
                                         data-tooltip-content={activeRowId === index ? "Details schließen" : "Details öffnen"}
                                         data-tooltip-place="top"
                                         data-tooltip-offset={10}
                                    >
                                        <i className="icon-caret-right"></i>
                                    </div>
                                </td>
                                <td role="cell" className="body-normal__regular" data-label={"Auftrag"}>
                                    <Link to={`order-nr-here/80700`} className="link-component">
                                        80700
                                    </Link>
                                </td>
                                <td role="cell" className="body-normal__regular" data-label={"Datum"} onClick={() => handleRowClick(index)}>
                                    01.01.2024
                                </td>
                                <td role="cell" className="body-normal__regular" data-label={"Betreff"} onClick={() => handleRowClick(index)}>
                                    RE-234-24
                                </td>
                                <td role="cell" className="body-normal__regular" data-label={"Kritisch"} onClick={() => handleRowClick(index)}>
                                    <div className="button button-gost button--big button--red">
                                        <i className="button__icon icon-warning"></i>
                                    </div>
                                </td>
                                <td role="cell" className="contents" data-label={"Inhalt"} onClick={() => handleRowClick(index)}>
                                <span className="collapsed body-normal__regular">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi illum itaque nesciunt qui quis quod unde? Ab alias delectus, itaque libero porro quaerat, quam quos repudiandae saepe suscipit totam!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate molestiae neque nisi odio perspiciatis. Blanditiis cum distinctio doloremque ipsam nam neque, nihil odit provident, quaerat quidem, sed tempora unde.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate molestiae neque nisi odio perspiciatis. Blanditiis cum distinctio doloremque ipsam nam neque, nihil odit provident, quaerat quidem, sed tempora unde.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate molestiae neque nisi odio perspiciatis. Blanditiis cum distinctio doloremque ipsam nam neque, nihil odit provident, quaerat quidem, sed tempora unde.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate molestiae neque nisi odio perspiciatis. Blanditiis cum distinctio doloremque ipsam nam neque, nihil odit provident, quaerat quidem, sed tempora unde.
                                </span>
                                </td>
                                <td role="cell" className="table-list__button" data-label={" "}>
                                    <div data-tooltip-id="tooltip"
                                         data-tooltip-content="Datei herunterladen"
                                         data-tooltip-place="top"
                                         data-tooltip-offset={5}
                                         className="button button-gost button--big button--grey">
                                        <i className="button__icon icon-download-simple"></i>
                                    </div>
                                </td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MessagesTable;
