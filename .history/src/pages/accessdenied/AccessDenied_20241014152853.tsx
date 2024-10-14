import { useNavigate } from "react-router-dom";

export default function AccessDenied() {
  const navigate = useNavigate();

  return (
    <div className={"access-denied container-fluid small-offset-left"}>
      <div>
        <h1 className="boxed-regular__medium">
          4<span>0</span>3
        </h1>
        <h2 className="boxed-regular__semi-bold">Access Denied</h2>
        <p>
          "We're sorry, but you do not have the required permissions to view
          this page. This might be due to an expired session, restricted access
          rights, or a specific page requirement. Please ensure you are logged
          in with the correct account or contact your system administrator for
          further assistance.
        </p>
      </div>
      <button
        className="button button--big button--red"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      //<button className="button button-secondary button--big button--green">
//    <span className="button__text">Button text</span>
//    <i className="button__icon"></i>
//</button>
    </div>
  );
}
