import React, { useState } from "react";
import CustomPagination from "src/helpers/CustomPaginate";
import Select from "react-select";

const Messages = () => {
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
    <>
      <div className="table-list table-list--accordion">
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
                  Name
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Adresse
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Verantwortlicher
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Teilaufträge
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold"></div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td role="cell" className="body-normal__regular">
                <i className="icon-caret-right"></i>
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Auftrag"}
              >
                80700
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Name"}
              >
                München Isar
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Adresse"}
              >
                Biergartenallee 1 80311 München
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Verantwortlicher"}
              >
                Thomas Mustermann
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Teilaufträge"}
              >
                8
              </td>
              <td role="cell" className="table-list__button" data-label={" "}>
                <div className="button button-gost button--big button--grey">
                  <i className="button__icon icon-note-pencil"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td role="cell" className="body-normal__regular">
                <i className="icon-caret-right"></i>
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Auftrag"}
              >
                80700
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Name"}
              >
                München Isar
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Adresse"}
              >
                Biergartenallee 1 80311 München
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Verantwortlicher"}
              >
                Thomas Mustermann
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Teilaufträge"}
              >
                8
              </td>
              <td role="cell" className="table-list__button" data-label={" "}>
                <div className="button button-gost button--big button--grey">
                  <i className="button__icon icon-note-pencil"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td role="cell" className="body-normal__regular">
                <i className="icon-caret-right"></i>
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Auftrag"}
              >
                80700
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Name"}
              >
                München Isar
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Adresse"}
              >
                Biergartenallee 1 80311 München
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Verantwortlicher"}
              >
                Thomas Mustermann
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Teilaufträge"}
              >
                8
              </td>
              <td role="cell" className="table-list__button" data-label={" "}>
                <div className="button button-gost button--big button--grey">
                  <i className="button__icon icon-note-pencil"></i>
                </div>
              </td>
            </tr>
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
        <CustomPagination data={mockData} setActivePage={(e) => setPage(e)} />
      </div>
    </>
  );
};

export default Messages;
