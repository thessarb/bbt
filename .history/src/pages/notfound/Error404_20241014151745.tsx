import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className="error-404 container-fluid small-offset-left">
      <div className="logo">
        {/* <img src="/static/media/logo-uniel.18df3860.svg" /> */}
      </div>
      <div>
        <h1>
          4<span>0</span>4
        </h1>
        <h2>Page Not Found</h2>
        <p>{t("page_not_found_text")}</p>
      </div>
      <button className="button-blue" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}
