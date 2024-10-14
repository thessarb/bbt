import React from "react";
import h
// import Breadcrumb from "src/components/layouts/Common/Breadcrumb";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Dashboard from "../../components/panel/dashboard/Dashboard";

const DashboardView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Sidebar>
        {/* <Breadcrumb title={t("dashboard_title")} /> */}
        <Dashboard />
      </Sidebar>
    </>
  );
};

export default DashboardView;
