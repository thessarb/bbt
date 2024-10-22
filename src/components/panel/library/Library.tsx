import React, { useState } from "react";
import Select from "react-select";
import CustomPagination from "src/helpers/CustomPaginate";
import FileViewerModal from "../../Modal/FileViewerModal";

const Library = () => {
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

  // Modal
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate with love ' },
    { value: 'strawberry', label: 'Strawberry with test' },
    { value: 'vanilla', label: 'Vanilla test' },
    { value: 'chocolate', label: 'Chocolate with love ' },
    { value: 'strawberry', label: 'Strawberry with test' },
    { value: 'vanilla', label: 'Vanilla test' },
    { value: 'chocolate', label: 'Chocolate with love ' },
    { value: 'strawberry', label: 'Strawberry with test' },
    { value: 'vanilla', label: 'Vanilla test' },
];

  return (
    <>
      <div className="library table-list table-list--secondary">
        <table role="table">
          <thead>
            <tr role="row">
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Art
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
                  Beschreibung
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Art"}
              >
                Montageanleitung
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Datum"}
              >
                01.01.2024
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Beschreibung"}
              >
                Montageanleitungen Betonbauteile
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
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Art"}
              >
                Montageanleitung
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Datum"}
              >
                01.01.2024
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Beschreibung"}
              >
                Montageanleitungen Betonbauteile
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
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Art"}
              >
                Montageanleitung
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Datum"}
              >
                01.01.2024
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Beschreibung"}
              >
                Montageanleitungen Betonbauteile
              </td>
              <td role="cell" className="table-list__button" data-label={" "}>
                <div className="button button-gost button--big button--grey">
                  <i className="button__icon icon-download-simple"></i>
                </div>

                <button  onClick={handleShow} className='button button-gost button--big button--grey'>
                  <i className="button__icon icon-eye"></i>
                </button>
                {show && <FileViewerModal show={show} setShow={setShow} />}
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

export default Library;
