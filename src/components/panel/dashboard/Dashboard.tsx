import React from "react";
import Deadlines from "./deadlines/Deadlines";
import UnreadMessages from "./unreadMessages/UnreadMessages";

const Dashboard = () => {

    return (
        <>
            <UnreadMessages />
            <Deadlines />
        </>
    )
};

export default Dashboard;
