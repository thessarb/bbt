
import React from "react";
import { Helmet } from "react-helmet";
import Login from "src/components/authentication/Login";

const LoginView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
        <Login />
    </>
  );
};

export default LoginView;
