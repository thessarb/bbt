import Select from "react-select";
import CustomPagination from "../../../helpers/CustomPaginate";
import React, {useState} from "react";

const Documents = () => {
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

    return (
            <div className="document">
                <div className="document__box">
                    <div className="document__box--filter button button-secondary button--grey button--big">
                        <span className="button__text">Filter öffnen</span>
                        <i className="button__icon icon-funnel-simple"></i>
                    </div>
                    <div className="document__box--new-plan button button--green button--big">
                        <i className="button__icon icon-export"></i>
                        <span className="button__text">Neuen Plan hochladen</span>
                    </div>
                </div>

                <div className="table-list table-list--secondary">
                    <table role="table">
                        <thead>
                            <tr role="row">
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Auftrag
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Auftragsname
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Art
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Nummer
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader">
                                <div className="body-normal__semibold">
                                    Datum
                                    <i className="icon-caret-up-down"></i>
                                </div>
                            </th>
                            <th role="columnheader"></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td role="cell" className="body-normal__regular" data-label={"Auftrag"}>
                                80700
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Auftragsname"}>
                                Web Hennickendorf - Test
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Art"}>
                                Lieferschein
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Nummer"}>
                                34567
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Datum"}>
                                01.01.2024
                            </td>

                            <td role="cell" className="table-list__button" data-label={" "}>
                                <div className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-download-simple"></i>
                                </div>
                                <div className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-eye"></i>
                                </div>
                            </td>
                        </tr>
                            <tr>
                            <td role="cell" className="body-normal__regular" data-label={"Auftrag"}>
                                80700
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Auftragsname"}>
                                Web Hennickendorf - Test
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Art"}>
                                Lieferschein
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Nummer"}>
                                34567
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Datum"}>
                                01.01.2024
                            </td>

                            <td role="cell" className="table-list__button" data-label={" "}>
                                <div className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-download-simple"></i>
                                </div>
                                <div className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-eye"></i>
                                </div>
                            </td>
                        </tr>
                            <tr>
                            <td role="cell" className="body-normal__regular" data-label={"Auftrag"}>
                                80700
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Auftragsname"}>
                                Web Hennickendorf - Test
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Art"}>
                                Lieferschein
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Nummer"}>
                                34567
                            </td>
                            <td role="cell" className="body-normal__regular" data-label={"Datum"}>
                                01.01.2024
                            </td>

                            <td role="cell" className="table-list__button" data-label={" "}>
                                <div className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-download-simple"></i>
                                </div>
                                <div className="button button-gost button--big button--grey">
                                    <i className="button__icon icon-eye"></i>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="pagination-container">
                    <div className="form">
                        <div className="form__field-select">
                            <label htmlFor="pagination"
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
                    <CustomPagination data={mockData} setActivePage={(e) => setPage(e)}/>
                </div>
            </div>
    )
};

export default Documents;