
const ResetPassword = () => {

    return (
        <>
        Reset Password
        </>
    )
};

export default ResetPassword;


import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import ForgotPassword from "src/components/authentication/ForgotPassword";

const ForgotPasswordView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <Sidebar>
        <ForgotPassword />
      </Sidebar>
    </>
  );
};

export default ForgotPasswordView;
