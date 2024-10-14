import { Navigate } from "react-router-dom";
import { accessData, isLogged } from "../helpers/AppConfig";
import PATHS from "./Paths";

import LoginView from "src/pages/authentication/LoginView";
import ForgotPasswordView from "src/pages/authentication/ForgotPasswordView";
import ResetPasswordView from "src/pages/authentication/ResetPasswordView";

import DashboardView from "src/pages/dashboard/DashboardView";
import OrdersView from "src/pages/orders/OrdersView";
import AdministrationView from "src/pages/administration/AdministrationView";
import AdministrationOrderView from "src/pages/administration/AdmnistrationOrderView";
import DocumentsView from "src/pages/documents/DocumentsView";
import LibraryView from "src/pages/library/LibraryView";
import MessagesView from "src/pages/messages/MessagesView";
import UsersListView from "src/pages/userManagement/usersListView";

type RouteItem = {
  path: string;
  element: JSX.Element;
};

const checkPrivateRoutes = (route: JSX.Element): JSX.Element => {
  if (!isLogged()) {
    return <Navigate to={PATHS.login} />;
  } else {
    return route;
  }
};

const PrivateRoutes: RouteItem[] = [
  {
    path: PATHS.dashboard,
    element: checkPrivateRoutes(
      // <ProtectedRoute roles={[]}>
        <DashboardView />
      // </ProtectedRoute>
    ),
  },

  {
    path: PATHS.orders,
    element: checkPrivateRoutes(
      // <ProtectedRoute roles={[]}>
        <OrdersView />
      // </ProtectedRoute>
    ),
  },
  {
    path: PATHS.administration,
    element: checkPrivateRoutes(
      // <ProtectedRoute roles={[]}>
        <AdministrationView />
      // </ProtectedRoute>
    ),
  },
  {
    path: PATHS.administrationOrder,
    element: checkPrivateRoutes(
      // <ProtectedRoute roles={[]}>
        <AdministrationOrderView />
      // </ProtectedRoute>
    ),
  },
  {
    path: PATHS.documents,
    element: checkPrivateRoutes(
      // <ProtectedRoute roles={[]}>
        <DocumentsView />
      // </ProtectedRoute>
    ),
  },
  {
    path: PATHS.library,
    element: checkPrivateRoutes(
      // <ProtectedRoute roles={[]}>
        <LibraryView />
      // </ProtectedRoute>
    ),
  },
  {
    path: PATHS.messages,
    element: checkPrivateRoutes(
      // <ProtectedRoute roles={[]}>
        <MessagesView />
      // </ProtectedRoute>
    ),
  },
  {
    path: PATHS.userManagement,
    element: checkPrivateRoutes(
      // <ProtectedRoute roles={[]}>
        <Ue />
      // </ProtectedRoute>
    ),
  },
];

const checkPublicRoutes = (route: JSX.Element): JSX.Element => {
  let path = "/";

  const roleId: number = Number(accessData("roleId"));
  if (roleId) {
    switch (roleId) {
      case 1:
        path = PATHS.dashboard;
        break;
      case 3:
        path = PATHS.dashboard;
        break;
    }
  }

  if (isLogged()) {
    return <Navigate to={path} replace />;
  } else {
    return route;
  }
};

const PublicRoutes: RouteItem[] = [
  {
    path: PATHS.homepage,
    element: <Navigate to={PATHS.login} />,
  },
  {
    path: PATHS.login,
    element: checkPublicRoutes(<LoginView />),
  },
  {
    path: PATHS.forgotPassword,
    element: checkPublicRoutes(<ForgotPasswordView />),
  },
  {
    path: PATHS.resetPasswordParam,
    element: checkPublicRoutes(<ResetPasswordView />),
  },
];

export { PrivateRoutes, PublicRoutes };
