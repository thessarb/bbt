import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className={"access-denied container-fluid small-offset-left"}>
      <div className="m-auto">
        <div className="no-access body-small__medium">
          <span className="background-grey">404</span>
          <span className="background-light-grey">Not Found</span>
        </div>
        <div className="access-denied__code boxed-regular__medium">Ups...</div>
      </div>
      <h2 className="boxed-regular__semi-bold">
        Es sieht so aus, als ob die angeforderte Seite nicht (mehr) existiert.
      </h2>
      <button
        className="button button-secondary button--big button--green"
        onClick={() => navigate(-1)}
      >
        <i className="button_icon icon-arrow-left" />
        <span className="button__text">Zurück zur Übersicht</span>
      </button>
    </div>
  );
}
