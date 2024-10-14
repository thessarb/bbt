import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import AdministrationOrder from "src/components/panel/administration/AdmnistrationOrder";

const AdministrationOrderView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Verwaltung auftrag</title>
      </Helmet>
      <Sidebar>
        <AdministrationOrder />
      </Sidebar>
    </>
  );
};

export default AdministrationOrderView;
