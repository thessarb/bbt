import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Messages from "src/components/panel/messages/Messages";

const MessagesView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Systemnachrichten</title>
      </Helmet>
      <Sidebar>
        <Messages />
      </Sidebar>
    </>
  );
};

export default MessagesView;
