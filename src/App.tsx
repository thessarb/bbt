import React from "react";
import "./assets/scss/main.scss";
import DashboardView from "./pages/dashboard/DashboardView";
import {BrowserRouter} from "react-router-dom";
import Login from "./components/authentication/Login";
import ForgotPassword from "./components/authentication/ForgotPassword";
import ResetPassword from "./components/authentication/ResetPassword";
import Register from "./components/authentication/Register";
import ThankYou from "./components/authentication/ThankYou";

function App() {
    return (
        <div className="body">
            <BrowserRouter>
                <DashboardView/>
            </BrowserRouter>
        </div>
    );
}

export default App;
