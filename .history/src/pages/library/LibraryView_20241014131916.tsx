
const Library = () => {

    return (
        <>
        Library
        </>
    )
};

export default Library;


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
