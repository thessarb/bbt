import React from "react";
import { Helmet } from "react-helmet";
import RegisterConfirmation from "../../components/authentication/RegisterConfirmation";

const RegisterConfirmationView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Vielen Dank</title>
      </Helmet>
        <RegisterConfirmation />
    </>
  );
};

export default RegisterConfirmationView;
