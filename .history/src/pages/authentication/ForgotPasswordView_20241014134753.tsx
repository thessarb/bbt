
const ForgotPassword = () => {

    return (
        <>
        Forgot Password
        </>
    )
};

export default ForgotPassword;


import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import ForgotPassword from "src/components/authentication/ForgotPassword";

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
