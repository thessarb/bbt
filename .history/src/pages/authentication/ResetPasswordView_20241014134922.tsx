
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
import ResetPassword from "src/components/authentication/ResetPassword";

const ResetPasswordView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ResetPassword</title>
      </Helmet>
      <Sidebar>
        <ResetPassword />
      </Sidebar>
    </>
  );
};

export default ResetPasswordView;
