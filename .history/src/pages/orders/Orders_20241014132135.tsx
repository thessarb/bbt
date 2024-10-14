
import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Orders from "src/components/panel/orders/Orders";

const OrdersView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Übersicht</title>
      </Helmet>
      <Sidebar>
        <Orders />
      </Sidebar>
    </>
  );
};

export default OrdersView;
