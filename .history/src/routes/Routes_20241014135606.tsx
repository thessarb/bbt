import { Navigate } from "react-router-dom";
import { accessData, isLogged } from "../helpers/AppConfig";
import PATHS from "./Paths";

import LoginView from "src/pages/authentication/LoginView";


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
      <ProtectedRoute roles={[1, 3]}>
        <DashboardView />
      </ProtectedRoute>
    ),
  },
  
  

  {
    path: PATHS.staff,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[6, 3]}>
        <StaffView />
      </ProtectedRoute>
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
      case 2:
        path = PATHS.children;
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
  // {
  //   path: PATHS.createNewAccount,
  //   element: checkPublicRoutes(<CreateNewAccountNationalRegistryView />),
  // },
  {
    path: PATHS.createNewAccount,
    element: checkPublicRoutes(<CreateNewAccountView />),
  },
  {
    path: PATHS.resetPasswordParam,
    element: checkPublicRoutes(<ResetPasswordView />),
  },
  {
    path: PATHS.activateAccountParam,
    element: checkPublicRoutes(<RegisterView />),
  },
];

export { PrivateRoutes, PublicRoutes };
