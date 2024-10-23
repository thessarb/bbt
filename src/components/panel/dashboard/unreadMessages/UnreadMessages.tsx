import React, { useState, useRef, useEffect } from "react";
import CustomPagination from "src/helpers/CustomPaginate";
import { Link } from "react-router-dom";
import PATHS from "../../../../routes/Paths";
import Select from "react-select";
import FilterDialog from "src/helpers/TableFilters";

const UnreadMessages = () => {
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

  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState<string | null>(
    null
  );

  const [filterDialogPosition, setFilterDialogPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const [filterData, setFilterData] = useState<{
    searchTerm: string;
    order: string;
    selectedOptions: string[];
  }>({
    searchTerm: "",
    order: "asc",
    selectedOptions: [],
  });

  const handleFilterChange = (filter: {
    searchTerm: string;
    order: string;
    selectedOptions: string[];
  }) => {
    setFilterData(filter);
  };

  const filterOptions = ["Option 1", "Option 2"];

  const closeFilterDialog = () => setIsFilterDialogOpen(null);

  const filterDialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterDialogRef.current &&
        !filterDialogRef.current.contains(event.target as Node)
      ) {
        closeFilterDialog();
      }
    };

    if (isFilterDialogOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterDialogOpen]);

  return (
    <>
      <div className="table-list">
        <div className="table-list__title">
          <span className="table-list__title-left subheading__regular">
            Ungelesene Systemnachrichten
          </span>
          <Link
            to={PATHS.messages}
            className="table-list__title-right button button--green button-gost"
          >
            Alle Systemnachrichten lesen
          </Link>
        </div>
        <table role="table">
          <thead>
            <tr role="row">
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Auftrag
                  <i
                    className="icon-dots-three-vertical"
                    onClick={() => setIsFilterDialogOpen("auftrag")}
                  ></i>
                  {isFilterDialogOpen === "auftrag" && (
                    <div ref={filterDialogRef}>
                      <FilterDialog
                        options={filterOptions}
                        onFilterChange={handleFilterChange}
                        closeFilter={() => closeFilterDialog}
                      />
                    </div>
                  )}{" "}
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Auftragsname
                  <i
                    className="icon-dots-three-vertical"
                    onClick={() => setIsFilterDialogOpen("auftragsname")}
                  ></i>
                  {isFilterDialogOpen === "auftragsname" && (
                    <div ref={filterDialogRef}>
                      <FilterDialog
                        options={filterOptions}
                        onFilterChange={handleFilterChange}
                        closeFilter={() => closeFilterDialog}
                      />
                    </div>
                  )}{" "}
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Betreff
                  <i
                    className="icon-dots-three-vertical"
                    onClick={() => setIsFilterDialogOpen("betreff")}
                  ></i>
                  {isFilterDialogOpen === "betreff" && (
                    <div ref={filterDialogRef}>
                      <FilterDialog
                        options={filterOptions}
                        onFilterChange={handleFilterChange}
                        closeFilter={() => closeFilterDialog}
                      />
                    </div>
                  )}{" "}
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Inhalt
                  <i
                    className="icon-dots-three-vertical"
                    onClick={() => setIsFilterDialogOpen("inhalt")}
                  ></i>
                  {isFilterDialogOpen === "inhalt" && (
                    <div ref={filterDialogRef}>
                      <FilterDialog
                        options={filterOptions}
                        onFilterChange={handleFilterChange}
                        closeFilter={() => closeFilterDialog}
                      />
                    </div>
                  )}
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Datum
                  <i
                    className="icon-dots-three-vertical"
                    onClick={() => setIsFilterDialogOpen("datum")}
                  ></i>
                  {isFilterDialogOpen === "datum" && (
                    <div ref={filterDialogRef}>
                      <FilterDialog
                        options={filterOptions}
                        onFilterChange={handleFilterChange}
                        closeFilter={() => closeFilterDialog}
                      />
                    </div>
                  )}
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Dringlichkeit
                  <i
                    className="icon-dots-three-vertical"
                    onClick={() => setIsFilterDialogOpen("dringlichkeit")}
                  ></i>
                  {isFilterDialogOpen === "dringlichkeit" && (
                    <div ref={filterDialogRef}>
                      <FilterDialog
                        options={filterOptions}
                        onFilterChange={handleFilterChange}
                        closeFilter={() => closeFilterDialog}
                      />
                    </div>
                  )}
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
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
                data-label={"Auftragsname"}
              >
                München Isar
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Betreff"}
              >
                Verzögerung
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Inhalt"}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                Delectus dignissimos doloribus ducimus et excepturi fuga labore,
                1818
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Datum"}
              >
                12.05.2024
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Dringlichkeit"}
              >
                <i className="icon-warning"></i>
              </td>
              <td role="cell" className="table-list__button" data-label={" "}>
                <div className="button button-gost button--big button--grey">
                  <i className="button__icon icon-envelope-simple"></i>
                </div>
              </td>
            </tr>
            <tr>
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
                data-label={"Auftragsname"}
              >
                München Isar
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Betreff"}
              >
                Verzögerung
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Inhalt"}
              >
                Lieferung der Massivwand XY verzögert sich um X Tage.
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Datum"}
              >
                12.05.2024
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Dringlichkeit"}
              >
                <i className="icon-warning"></i>
              </td>
              <td role="cell" className="table-list__button">
                <div className="button button-gost button--big button--grey">
                  <i className="button__icon icon-envelope-simple"></i>
                </div>
              </td>
            </tr>
            <tr>
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
                data-label={"Auftragsname"}
              >
                München Isar
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Betreff"}
              >
                Verzögerung
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Inhalt"}
              >
                Lieferung der Massivwand XY verzögert sich um X Tage.
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Datum"}
              >
                12.05.2024
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Dringlichkeit"}
              >
                <i className="icon-warning"></i>
              </td>
              <td role="cell" className="table-list__button">
                <div className="button button-gost button--big button--grey">
                  <i className="button__icon icon-envelope-simple"></i>
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

export default UnreadMessages;
