import React from "react";
import "./assets/scss/main.scss";
import DashboardView from "./pages/dashboard/DashboardView";
import {BrowserRouter} from "react-router-dom";
import Login from "./components/authentication/Login";
import ForgotPassword from "./components/authentication/ForgotPassword";
import ResetPassword from "./components/authentication/ResetPassword";
import Register from "./components/authentication/Register";
import ThankYou from "./components/authentication/ThankYou";
import CustomModal from "./components/Modal/CustomModal";
import LibraryView from "./pages/library/LibraryView";
import AccessDenied from "./pages/accessdenied/AccessDenied";
import Error404 from "./pages/notfound/Error404";
import MessagesView from "./pages/messages/MessagesView";

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
