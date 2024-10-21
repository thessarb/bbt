import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Orders from "src/components/panel/orders/Orders";
import Breadcrumb from "src/components/layouts/Common/Breadcrumb";

const OrdersView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Aufgaben</title>
      </Helmet>
      <Sidebar>
      <Breadcrumb title={"Home"}  subtitle={"Aufgaben"}/>
        <Orders />
      </Sidebar>
    </>
  );
};

export default OrdersView;
