import React from "react";
import "./assets/scss/main.scss";
import DashboardView from "./pages/dashboard/DashboardView";
import {BrowserRouter} from "react-router-dom";

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
