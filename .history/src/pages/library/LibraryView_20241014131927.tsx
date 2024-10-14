



import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Dashboard from "../../components/panel/dashboard/Dashboard";

const LibraryView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Übersicht</title>
      </Helmet>
      <Sidebar>
        <Library />
      </Sidebar>
    </>
  );
};

export default LibraryView;
