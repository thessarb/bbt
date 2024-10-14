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
    path: PATHS.educationEditViewId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[3]}>
        <EducationProgramEditView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.educationViewId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 4]}>
        <EducationProgramView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.gallery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8]}>
        <GalleryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.showAlbumId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8]}>
        <AlbumView />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: PATHS.chat,
  //   element: checkPrivateRoutes(
  //     <ProtectedRoute roles={[]}>
  //       <ChatView />
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: PATHS.email,
  //   element: checkPrivateRoutes(
  //     <ProtectedRoute roles={[]}>
  //       <EmailView />
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: PATHS.staff,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[6, 3]}>
        <StaffView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.reports,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[3]}>
        <ReportsView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.teachers,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[4]}>
        <TeachersView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.showTeacherId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[4]}>
        <ShowTeacherView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.performance,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[2, 4]}>
        <PerformanceView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.children,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 4, 8]}>
        <ChildrenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.showChildId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 4, 8]}>
        <ShowChildView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.backup,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[7]}>
        <BackupView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.logs,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[7]}>
        <LogsView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.groupsList,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[4]}>
        <GroupsView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.addGroup,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[4]}>
        <AddNewGroupView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.editGroupId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[4]}>
        <EditGroupView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.participation,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[2]}>
        <ParticipationView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.evaluations,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[2]}>
        <EvaluationsView />
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
      case 3:
        path = PATHS.dashboard;
        break;
      case 2:
      case 4:
      case 8:
        path = PATHS.children;
        break;
      case 5:
        path = PATHS.kindergartenNursery;
        break;
      case 6:
        path = PATHS.staff;
        break;
      case 7:
        path = PATHS.logs;
        break;
      case 9:
        path = PATHS.registerApplicationsNursery;
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
