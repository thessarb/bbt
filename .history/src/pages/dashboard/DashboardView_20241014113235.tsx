import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Dashboard from "../../components/panel/dashboard/Dashboard";

const DashboardView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Sidebar>
        <Dashboard />
      </Sidebar>
    </>
  );
};

export default DashboardView;
