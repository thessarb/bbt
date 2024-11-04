import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Messages from "src/components/panel/messages/Messages";
import Breadcrumb from "src/components/layouts/Common/Breadcrumb";

const MessagesView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Systemnachrichten</title>
      </Helmet>
      <Sidebar>
      <Breadcrumb title={"Übersicht"}  subtitle={"Systemnachrichten"}/>
        <Messages />
      </Sidebar>
    </>
  );
};

export default MessagesView;
