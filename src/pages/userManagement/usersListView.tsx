import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import UsersList from "src/components/panel/userManagement/usersList";
import Breadcrumb from "src/components/layouts/Common/Breadcrumb";

const UsersListView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Benutzerverwaltung</title>
      </Helmet>
      <Sidebar>
      <Breadcrumb title={"Übersicht"}  subtitle={"Benutzerverwaltung"}/>
        <UsersList />
      </Sidebar>
    </>
  );
};

export default UsersListView;
