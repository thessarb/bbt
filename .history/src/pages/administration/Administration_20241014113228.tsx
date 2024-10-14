import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Administration from "src/components/panel/administration/Administration";
const AdministrationView = () => {
  return (
    <>
      <Administration />
    </>
  );
};

export default AdministrationView;
const AdministrationView: React.FC = () => {
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
  
  export default AdministrationView;