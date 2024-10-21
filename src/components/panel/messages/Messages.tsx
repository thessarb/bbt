import React, { useState, useEffect, useRef } from "react";

const Messages = () => {
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
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className="body-normal__semibold">
                                Datum
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className="body-normal__semibold">
                                Betreff
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className="body-normal__semibold">
                                Kritisch
                                <i className="icon-dots-three-vertical"></i>
                            </div>
                        </th>
                        <th role="columnheader">
                            <div className="contents body-normal__semibold">
                                Inhalt
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
                            <td role="cell" className="body-normal__regular" data-label={"Auftrag"}>
                                80700
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Datum"}>
                                01.01.2024
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Betreff"}>
                                RE-234-24
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Kritisch"}>
                                <div className="button button-gost button--big button--red">
                                    <i className="button__icon icon-warning"></i>
                                </div>
                            </td>
                            <td role="cell" className="contents" data-label={"Inhalt"}>
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
                                <div className="button button-gost button--big button--grey">
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

export default Messages;
