import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Administration from "src/components/panel/administration/Administration";
import Breadcrumb from "src/components/layouts/Common/Breadcrumb";

const AdministrationView: React.FC = () => {
    return (
      <>
        <Helmet>
          <title>Verwaltung</title>
        </Helmet>
        <Sidebar>
        <Breadcrumb title={"Home"}  subtitle={"Verwaltung"}/>
          <Administration />
        </Sidebar>
      </>
    );
  };
  
  export default AdministrationView;