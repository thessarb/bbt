import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../../components/layouts/sidebar/Sidebar";
import OrderDetailsOverview from "src/components/panel/orders/order_details/OrderDetailsOverview";
import Breadcrumb from "src/components/layouts/Common/Breadcrumb";

const OrderDetailsOverviewView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Aufträge 80700</title>
      </Helmet>
      <Sidebar>
      <Breadcrumb title={"Übersicht"}  subtitle={"Aufträge 80700"}/>
        <OrderDetailsOverview />
      </Sidebar>
    </>
  );
};

export default OrderDetailsOverviewView;
