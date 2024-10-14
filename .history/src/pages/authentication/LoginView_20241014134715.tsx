
const Login = () => {

    return (
        <>
        Login
        </>
    )
};

export default Login;


import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import UsersList from "src/components/panel/userManagement/usersList";

const LoginView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title></title>
      </Helmet>
      <Sidebar>
        <UsersList />
      </Sidebar>
    </>
  );
};

export default LoginView;
