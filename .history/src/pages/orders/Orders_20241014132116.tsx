
const Orders = () => {

    return (
        <>
        Dashboard
        </>
    )
};

export default Orders;


import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Dashboard from "../../components/panel/dashboard/Dashboard";

const DashboardView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Übersicht</title>
      </Helmet>
      <Sidebar>
        <Dashboard />
      </Sidebar>
    </>
  );
};

export default DashboardView;
