import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Documents from "src/components/panel/documents/Documents";

const DocumentsView = () => {

    return (
        <>
        Documents
        </>
    )
};

export default DocumentsView;

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