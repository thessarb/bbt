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
        <p className="body-big__regular">
          Sorry, the page you requested was not found! Please return to the
          previous page!
        </p>
      </div>
      <button className="button-blue" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}
