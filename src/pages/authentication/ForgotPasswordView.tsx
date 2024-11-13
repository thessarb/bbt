import React from "react";
import { Helmet } from "react-helmet";
import ForgotPassword from "src/components/authentication/ForgotPassword";

const ForgotPasswordView: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Forgot Password</title>
            </Helmet>
            <ForgotPassword />
        </>
    );
};

export default ForgotPasswordView;
