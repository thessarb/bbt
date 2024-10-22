import React from "react";
import Deadlines from "./deadlines/Deadlines";
import UnreadMessages from "./unreadMessages/UnreadMessages";

const Dashboard = () => {
  return (
    <>
      <div className="page-title heading__semibold">Übersicht</div>
      <UnreadMessages />
      <Deadlines />
    </>
  );
};

export default Dashboard;
