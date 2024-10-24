import React from "react";
import "./assets/scss/main.scss";
import DashboardView from "./pages/dashboard/DashboardView";
import {BrowserRouter} from "react-router-dom";
import Login from "./components/authentication/Login";
import ForgotPassword from "./components/authentication/ForgotPassword";
import ResetPassword from "./components/authentication/ResetPassword";
import Register from "./components/authentication/Register";
import ThankYou from "./components/authentication/ThankYou";
import LibraryView from "./pages/library/LibraryView";
import AccessDenied from "./pages/accessdenied/AccessDenied";
import Error404 from "./pages/notfound/Error404";

function App() {
    return (
        <div className="body">
            <BrowserRouter>
                <LibraryView/>
            </BrowserRouter>
        </div>
    );
}

export default App;
