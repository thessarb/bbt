import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className="error-404 container-fluid small-offset-left">
      <div className="logo"></div>
      <div>
        <h1 className="body-big__semi-bold">
          4<span>0</span>4
        </h1>
        <h2 className="body-big__regular">Page Not Found</h2>
        <p className="body-big__medium">
          Sorry, the page you requested was not found! Please return to the
          previous page!
        </p>
      </div>
      <button className="button button--big button--blue" onClick={() => navigate(-1)}>
               <span className="button__text">Button text</span>

      </button>
      <button className="button button-secondary button--big button--green">
        // <span className="button__text">Button text</span>
        // <i className="button__icon"></i>
        //
      </button>
    </div>
  );
}
