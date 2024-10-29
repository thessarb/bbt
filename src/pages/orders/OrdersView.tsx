import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Orders from "src/components/panel/orders/Orders";
import Breadcrumb from "src/components/layouts/Common/Breadcrumb";

const OrdersView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Aufträge</title>
      </Helmet>
      <Sidebar>
      <Breadcrumb title={"Übersicht"}  subtitle={"Aufträge"}/>
        <Orders />
      </Sidebar>
    </>
  );
};

export default OrdersView;
