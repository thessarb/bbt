
const UsersList = () => {

    return (
        <>
        User list
        </>
    )
};

export default UsersList;

import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Orders from "src/components/panel/orders/Orders";

const OrdersView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Aufgaben</title>
      </Helmet>
      <Sidebar>
        <Orders />
      </Sidebar>
    </>
  );
};

export default OrdersView;
