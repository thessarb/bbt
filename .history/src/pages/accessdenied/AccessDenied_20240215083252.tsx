import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function AccessDenied() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={"access-denied container-fluid small-offset-left"}>
      <div>
        <h1>
          4<span>0</span>3
        </h1>
        <h2>{t("access_denied_title")}</h2>
        <p>{t("access_denied_text")}</p>
      </div>
      <button className="button-red" onClick={() => navigate(-1)}>
        {t("access_denied_go_back_button")}
      </button>
    </div>
  );
}
