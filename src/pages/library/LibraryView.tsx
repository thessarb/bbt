import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Library from "src/components/panel/library/Library";
import Breadcrumb from "src/components/layouts/Common/Breadcrumb";

const LibraryView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Bibliothek</title>
      </Helmet>
      <Sidebar>
      <Breadcrumb title={"Übersicht"}  subtitle={"Bibliothek"}/>
        <Library />
      </Sidebar>
    </>
  );
};

export default LibraryView;
