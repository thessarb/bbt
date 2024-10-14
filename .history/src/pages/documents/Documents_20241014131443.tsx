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

const DocumentsView: React.FC = () => {
    return (
      <>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Sidebar>
          <Documents />
        </Sidebar>
      </>
    );
  };
  
  export default DocumentsView;