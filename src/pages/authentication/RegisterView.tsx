import React from "react";
import { Helmet } from "react-helmet";
import Register from "src/components/authentication/Register";

const RegisterView: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <Register />
        </>
    );
};

export default RegisterView;
