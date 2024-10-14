import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="error-404 container-fluid small-offset-left">
      <div className="logo">
        {/* <img src="/static/media/logo-uniel.18df3860.svg" /> */}
      </div>
      <div>
        <h1>
          4<span>0</span>4
        </h1>
        <h2>{t("page_not_found_title")}</h2>
        <p>{t("page_not_found_text")}</p>
      </div>
      <button className="button-blue" onClick={() => navigate(-1)}>
        {t("page_not_found_go_back_button")}
      </button>
    </div>
  );
}
