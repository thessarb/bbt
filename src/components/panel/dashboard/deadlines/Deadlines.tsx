import React, { useState } from "react";
import CustomPagination from "src/helpers/CustomPaginate";

const Deadlines = () => {
  const [page, setPage] = useState(1);
  const mockData = {
    total: 100,
    current_page: 1,
    per_page: 10,
    last_page: 10,
  };
  return (
    <>
      <div className="table-list">
        <div className="table-list__title">
          <span className="table-list__title-left subheading__regular">
            Fristen
          </span>
        </div>
        <table role="table">
          <thead>
            <tr role="row">
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Auftrag
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Auftragsname
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  BA
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Haus
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Geschoss
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Ebene
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Produkt
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Zu erledigen
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Frist
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Dringlichkeit
                  <i className="icon-dots-three-vertical"></i>
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
                data-label={"BA"}
              >
                1
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Haus"}
              >
                Haus 1
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Geschoss"}
              >
                KG
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Ebene"}
              >
                Treppenhaus
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Produkt"}
              >
                Decke OG
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Zu erledigen"}
              >
                Plan für Bauabschnitt
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Frist"}
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
                  <i className="button__icon icon-note-pencil"></i>
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
                data-label={"BA"}
              >
                1
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Haus"}
              >
                Haus 1
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Geschoss"}
              >
                KG
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Ebene"}
              >
                Treppenhaus
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Produkt"}
              >
                Decke OG
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Zu erledigen"}
              >
                Plan für
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Frist"}
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
                  <i className="button__icon icon-note-pencil"></i>
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
                data-label={"BA"}
              >
                1
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Haus"}
              >
                Haus 1
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Geschoss"}
              >
                KG
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Ebene"}
              >
                Treppenhaus
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Produkt"}
              >
                Decke OG
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Zu erledigen"}
              >
                Plan für Bauabschnitt 2.1 hochladen
              </td>
              <td
                role="cell"
                className="body-normal__regular"
                data-label={"Frist"}
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
                  <i className="button__icon icon-note-pencil"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CustomPagination data={mockData} setActivePage={(e) => setPage(e)} />
    </>
  );
};

export default Deadlines;
