import React from "react";
import { Helmet } from "react-helmet";
import ResetPassword from "src/components/authentication/ResetPassword";

const ResetPasswordView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
        <ResetPassword />
    </>
  );
};

export default ResetPasswordView;
