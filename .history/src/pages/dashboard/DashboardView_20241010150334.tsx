
import React from "react";
import { Helmet } from "react-helmet";
// import Breadcrumb from "src/components/layouts/Common/Breadcrumb";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Dashboard from "../../components/panel/dashboard/Dashboard";

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
