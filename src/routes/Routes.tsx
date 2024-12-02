import { Navigate } from "react-router-dom";
import { accessData, isLogged } from "../helpers/AppConfig";
import PATHS from "./Paths";
import ProtectedRoute from "./ProtectedRoute";

import LoginView from "src/pages/authentication/LoginView";
import ForgotPasswordView from "src/pages/authentication/ForgotPasswordView";
import ResetPasswordView from "src/pages/authentication/ResetPasswordView";
import ThankYouView from "src/pages/authentication/ThankYouView";
import RegisterView from "src/pages/authentication/RegisterView";

import DashboardView from "src/pages/dashboard/DashboardView";
import OrdersView from "src/pages/orders/OrdersView";
import OrderDetailsOverviewView from "src/pages/orders/order_details/OrderDetailsOverview";
import AdministrationView from "src/pages/administration/AdministrationView";
import AdministrationOrderView from "src/pages/administration/AdmnistrationOrderView";
import DocumentsView from "src/pages/documents/DocumentsView";
import LibraryView from "src/pages/library/LibraryView";
import MessagesView from "src/pages/messages/MessagesView";
import UsersListView from "src/pages/userManagement/usersListView";
import RegisterConfirmationView from "../pages/authentication/RegisterConfirmationView";

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
            <ProtectedRoute roles={[3, 4]}>
                <DashboardView />
            </ProtectedRoute>
        ),
    },
    {
        path: PATHS.userManagement,
        element: checkPrivateRoutes(
            <ProtectedRoute roles={[1]}>
                <UsersListView />
            </ProtectedRoute>
        ),
    },
    {
        path: PATHS.orders,
        element: checkPrivateRoutes(
            <ProtectedRoute roles={[1, 3, 4]}>
                <OrdersView />
            </ProtectedRoute>
        ),
    },
    // {
    //     path: PATHS.administration,
    //     element: checkPrivateRoutes(
    //         <ProtectedRoute roles={[1]}>
    //             <AdministrationView />
    //         </ProtectedRoute>
    //     ),
    // },
    {
        path: PATHS.administrationOrder,
        element: checkPrivateRoutes(
            <ProtectedRoute roles={[3, 4]}>
                <AdministrationOrderView />
            </ProtectedRoute>
        ),
    },
    {
        path: PATHS.documents,
        element: checkPrivateRoutes(
            <ProtectedRoute roles={[3, 4]}>
                <DocumentsView />
            </ProtectedRoute>
        ),
    },
    {
        path: PATHS.library,
        element: checkPrivateRoutes(
            <ProtectedRoute roles={[3, 4]}>
                <LibraryView />
            </ProtectedRoute>
        ),
    },
    {
        path: PATHS.messages,
        element: checkPrivateRoutes(
            <ProtectedRoute roles={[1, 3, 4]}>
                <MessagesView />
            </ProtectedRoute>
        ),
    },

    {
        path: PATHS.orderDetailsId,
        element: checkPrivateRoutes(
            <ProtectedRoute roles={[1, 3, 4]}>
                <OrderDetailsOverviewView />
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
                path = PATHS.userManagement;
                break;
            case 3:
            case 4:
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
        path: PATHS.inviteRequest,
        element: checkPublicRoutes(<RegisterView />),
    },
    {
        path: PATHS.registerConfirmation,
        element: checkPublicRoutes(<RegisterConfirmationView />),
    },
    {
        path: PATHS.forgotPassword,
        element: checkPublicRoutes(<ForgotPasswordView />),
    },
    {
        path: PATHS.thankYou,
        element: checkPublicRoutes(<ThankYouView />),
    },
    {
        path: PATHS.resetPasswordParam,
        element: checkPublicRoutes(<ResetPasswordView />),
    },
];

export { PrivateRoutes, PublicRoutes };
