
import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import UsersList from "src/components/panel/userManagement/usersList";

const LoginView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Sidebar>
        <Login />
      </Sidebar>
    </>
  );
};

export default LoginView;
