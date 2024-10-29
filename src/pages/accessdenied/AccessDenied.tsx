import { useNavigate } from "react-router-dom";

export default function AccessDenied() {
  const navigate = useNavigate();

  return (
    <div className={"access-denied container-fluid small-offset-left"}>
      <div>
        <div className="no-access body-small__medium">
          <span className="background-grey">403</span>
          <span className="background-light-grey">No Access</span>
        </div>
        <div className="access-denied__code">
          Kein Zugriff
        </div>
        </div>
        <h2>
          Du hast leider nicht die notwendige Berechtigungen für diese Seite.
        </h2>
      <button
        className="button button-secondary button--big button--green"
        onClick={() => navigate(-1)}
      >
        <i className="button_icon icon-arrow-left"/>
        <span className="button__text">Zurück</span>
      </button>
    </div>
  );
}
