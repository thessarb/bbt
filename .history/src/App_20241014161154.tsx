import React from 'react';
import "./assets/scss/main.scss";
import DashboardView from './pages/dashboard/DashboardView';
import { BrowserRouter } from 'react-router-dom';

function App() {

    return (
        <div className="body">
            
            <DashboardView />
        </div>
    );
}

export default App;
