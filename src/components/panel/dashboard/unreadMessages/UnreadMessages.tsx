import CustomPagination from "src/helpers/CustomPaginate";
import { Link } from "react-router-dom";
import PATHS from "../../../../routes/Paths";

const UnreadMessages = () => {
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
                  Betreff
                  <i className="icon-dots-three-vertical"></i>
                </div>
              </th>
              <th role="columnheader">
                <div className="body-normal__semibold">
                  Inhalt
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
      <CustomPagination data={mockData} setActivePage={(e) => setPage(e)} />
    </>
  );
};

export default UnreadMessages;
