
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Breadcrumb from "src/components/layouts/Common/Breadcrumb";
import Sidebar from "src/components/layouts/sidebar/Sidebar";

const DashboardView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("dashboard_view")}</title>
      </Helmet>
      <Sidebar>
        <Breadcrumb title={t("dashboard_title")} />
        <Dashboard />
      </Sidebar>
    </>
  );
};

export default DashboardView;
