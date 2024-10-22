import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Documents from "src/components/panel/documents/Documents";
import Breadcrumb from "src/components/layouts/Common/Breadcrumb";

const DocumentsView: React.FC = () => {
    return (
      <>
        <Helmet>
          <title>Dokumente</title>
        </Helmet>
        <Sidebar>
        <Breadcrumb title={"Home"}  subtitle={"Dokumente"}/>
          <Documents />
        </Sidebar>
      </>
    );
  };
  
  export default DocumentsView;