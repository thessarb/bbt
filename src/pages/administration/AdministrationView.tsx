import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Administration from "src/components/panel/administration/Administration";

const AdministrationView: React.FC = () => {
    return (
      <>
        <Helmet>
          <title>Verwaltung</title>
        </Helmet>
        <Sidebar>
          <Administration />
        </Sidebar>
      </>
    );
  };
  
  export default AdministrationView;