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
    path: PATHS.myProfile,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 7, 8, 9]}>
        <ProfileView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.nursery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[3]}>
        <NurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.showNurseryId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[3]}>
        <ShowNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.kindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[3]}>
        <KindergartenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.kindergartenNursery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[5]}>
        <KindergartenNurseryListView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.showKindergartenNurseryId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[5]}>
        <ShowKindergartenNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.showKindergartenId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8]}>
        <ShowKindergartenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.registerApplicationsNursery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8, 9]}>
        <ApplicationsNurseryMunicicpalityView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.registerApplicationsKindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8, 9]}>
        <ApplicationsKindergartenMunicicpalityView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.showApplicationKindergartenId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8, 9]}>
        <ShowApplicationsNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.showApplicationNurseryId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8, 9]}>
        <ShowApplicationsNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.showApplicationsNurseryId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8, 9]}>
        <ShowApplicationsNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.showApplicationsKindergartenId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8, 9]}>
        <ShowApplicationsNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.applicationsKindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8, 9]}>
        <ApplicationsKindergartenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.applicationsNursery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8, 9]}>
        <ApplicationsNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.makeApplicationStepOneKindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <MakeApplicationsFirstStepKindergartenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.makeApplicationStepOneNursery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <MakeApplicationsFirstStepNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.makeApplicationStepTwoIdKindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <MakeApplicationsSecondStepKindergartenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.makeApplicationStepTwoIdNursery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <MakeApplicationsSecondStepNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.editApplicationStepOneIdKindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <EditFirstStepKindergartenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.editApplicationStepOneIdNursery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <EditFirstStepNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.editApplicationStepTwoIdKindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <EditApplicationsSecondStepKindergartenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.editApplicationStepTwoIdNursery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <EditSecondStepNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.makeApplicationStepThreeIdKindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <MakeApplicationsThirdStepKindergartenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.makeApplicationStepThreeIdNursery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <MakeApplicationsThirdStepNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.editApplicationStepThreeIdKindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <EditApplicationsThirdStepKindergartenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.editApplicationStepThreeIdNursery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <EditThirdStepNurseryView />
      </ProtectedRoute>
    ),
  },

  {
    path: PATHS.transersListNursery,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[3, 9]}>
        <OverviewTransfersNurseryView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.transersListKindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[3, 9]}>
        <OverviewTransfersKindergartenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.transersListNurseryKindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[3, 9]}>
        <OverviewTransfersNurseryKindergartenView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.transersNurseryList,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <TransferNurseryListView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.transersKindergartenList,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <TransferKindergartenListView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.transfersNurseryToKindergarten,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1]}>
        <TransferNurseryToKindergartenListView />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: PATHS.transersList,
  //   element: checkPrivateRoutes(
  //     <ProtectedRoute roles={[6]}>
  //       <TransfersHrView />
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: PATHS.unregistration,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 3, 4]}>
        <RegistrationRequestsView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.showUnregistrationId,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8]}>
        <ShowRegistrationRequestView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.notifications,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 7, 8, 9]}>
        <NotificationsView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.editProfile,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 7, 8, 9]}>
        <EditProfileView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.childrensCategories,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8]}>
        <ChildrenCategoriesView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.mealsAgegroups,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8]}>
        <AgeGroupsView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.mealsAssortment,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8]}>
        <AssortmentView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.mealsMenu,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4, 5, 6, 8]}>
        <MenuView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.mealsAllergy,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[3]}>
        <AllergyView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.mealsAllergyIdProducts,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[3]}>
        <AllergyView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.educationList,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[1, 2, 3, 4]}>
        <EducationListView />
      </ProtectedRoute>
    ),
  },
  {
    path: PATHS.educationAgeGroups,
    element: checkPrivateRoutes(
      <ProtectedRoute roles={[3]}>
        <EducationAgeGroupsView />
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
