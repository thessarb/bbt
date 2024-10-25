import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../../components/layouts/sidebar/Sidebar";
import OrderDetailsOverview from "src/components/panel/orders/order_details/OrderDetailsOverview";
import Breadcrumb from "src/components/layouts/Common/Breadcrumb";

const OrdersView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Aufträge</title>
      </Helmet>
      <Sidebar>
      <Breadcrumb title={"Home"}  subtitle={"Aufträge"}/>
        <OrderDetailsOverview />
      </Sidebar>
    </>
  );
};

export default OrdersView;
