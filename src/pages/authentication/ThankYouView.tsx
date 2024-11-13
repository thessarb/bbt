import React from "react";
import { Helmet } from "react-helmet";
import ThankYou from "src/components/authentication/ThankYou";

const ThankYouView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Vielen Dank</title>
      </Helmet>
        <ThankYou />
    </>
  );
};

export default ThankYouView;
