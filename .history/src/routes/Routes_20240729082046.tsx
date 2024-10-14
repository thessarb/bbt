import { Navigate } from "react-router-dom";
import { accessData, isLogged } from "src/helpers/AppConfig";
import PATHS from "./Paths";

import LoginView from "src/pages/authentication/LoginView";
import DashboardView from "src/pages/panel/dashboard/DashboadView";
import ForgotPasswordView from "src/pages/authentication/ForgotPasswordView";
import ResetPasswordView from "src/pages/authentication/ResetPasswordView";
import RegisterView from "src/pages/authentication/RegisterView";
import ProfileView from "src/pages/panel/profile/ProfileView";
import EditProfileView from "src/pages/panel/profile/EditProfileView";
import NurseryView from "src/pages/panel/nursery/NurseryView";
import ShowNurseryView from "src/pages/panel/nursery/ShowNurseryView";
import KindergartenView from "src/pages/panel/kindergarten/KindergartenView";
import ShowKindergartenView from "src/pages/panel/kindergarten/ShowKindergartenView";
import ChildrenCategoriesView from "src/pages/panel/childrens_categories/ChildrenCategoriesView";
import ApplicationsNurseryMunicicpalityView from "src/pages/panel/municipality_nursery_application/ApplicationsView";
import ApplicationsKindergartenMunicicpalityView from "src/pages/panel/municipality_kindergarten_application/ApplicationsView";
import ApplicationsKindergartenView from "src/pages/panel/applications_kindergarten/ApplicationsKindergartenView";
import ApplicationsNurseryView from "src/pages/panel/applications_nursery/ApplicationsNurseryView";
import ShowApplicationsNurseryView from "src/pages/panel/municipality_nursery_application/ShowApplicationView";
import NotificationsView from "src/pages/panel/notifications/NotificationsView";
import ProtectedRoute from "./ProtectedRoute";
import AgeGroupsView from "src/pages/panel/meal/AgeGroupsView";
import AssortmentView from "src/pages/panel/meal/AssortmentView";
import MenuView from "src/pages/panel/meal/MenuView";
import AllergyView from "src/pages/panel/meal/AllergyView";
import EducationAgeGroupsView from "src/pages/panel/education_programs/EducationAgeGroupsView";
import EducationListView from "src/pages/panel/education_programs/EducationListView";
import EducationProgramEditView from "src/pages/panel/education_programs/EducationProgramEditView";
import RegistrationRequestsView from "src/pages/panel/registration_requests/RegistrationRequestsView";
import ShowRegistrationRequestView from "src/pages/panel/registration_requests/ShowRegistrationRequestView";
import OverviewTransfersKindergartenView from "src/pages/panel/transfers/OverviewTransfersKindergartenView";
import OverviewTransfersNurseryView from "src/pages/panel/transfers/OveerviewTransfersNurseryView";
import OverviewTransfersNurseryKindergartenView from "src/pages/panel/transfers/OverviewTransfersNurseryKindergartenView";
import TransferKindergartenListView from "src/pages/panel/transfers/KindergartenTransfers";
import TransferNurseryListView from "src/pages/panel/transfers/NurseryTransfers";
import TransferNurseryToKindergartenListView from "src/pages/panel/transfers/NurseryToKindergartenTransfersView";
// import TransfersHrView from "src/pages/panel/transfers/TransfersHrView";
import EducationProgramView from "src/pages/panel/education_programs/EducationProgramView";
// import ChatView from "src/pages/panel/chat/ChatView";
import ReportsView from "src/pages/panel/reports/ReportsView";
import PerformanceView from "src/pages/panel/performance/PerformanceView";
import TeachersView from "src/pages/panel/teachers/TeachersView";
import ShowTeacherView from "src/pages/panel/teachers/ShowTeacherView";
import ChildrenView from "src/pages/panel/children/ChildrenView";
import BackupView from "src/pages/panel/backup/BackupView";
import LogsView from "src/pages/panel/logs/LogsView";
import ShowChildView from "src/pages/panel/children/ShowChildView";
// import EmailView from "src/pages/panel/email/EmailView";
import GroupsView from "src/pages/panel/groups/GroupsView";
import AddNewGroupView from "src/pages/panel/groups/AddNewGroupView";
import GalleryView from "src/pages/panel/gallery/GalleryView";
import AlbumView from "src/pages/panel/gallery/AlbumView";
import StaffView from "src/pages/panel/staff/StaffView";
import EditGroupView from "src/pages/panel/groups/EditGroupView";
import KindergartenNurseryListView from "src/pages/panel/kindergartennursery/KindergartenNurseryListView";
import ShowKindergartenNurseryView from "src/pages/panel/kindergartennursery/ShowKindergartenNursery";
import ParticipationView from "src/pages/panel/participation/ParticipationView";
import EvaluationsView from "src/pages/panel/evaluations/EvaluationsView";
import MakeApplicationsFirstStepKindergartenView from "src/pages/panel/applications_kindergarten/application_first_step/MakeAppFirstStepKindergartenView";
import MakeApplicationsSecondStepKindergartenView from "src/pages/panel/applications_kindergarten/application_second_step/MakeAppSecondStepKindergartenView";
import MakeApplicationsThirdStepKindergartenView from "src/pages/panel/applications_kindergarten/application_third_step/MakeAppThirdStepKindergartenView";
import EditFirstStepKindergartenView from "src/pages/panel/applications_kindergarten/application_first_step/EditFirstStepKindergartenView";
import EditApplicationsSecondStepKindergartenView from "src/pages/panel/applications_kindergarten/application_second_step/EditSecondStepKindergartenView";
import EditApplicationsThirdStepKindergartenView from "src/pages/panel/applications_kindergarten/application_third_step/EditThirdStepKindergartenView";

import MakeApplicationsFirstStepNurseryView from "src/pages/panel/applications_nursery/application_first_step/MakeAppFirstStepNurseryView";
import MakeApplicationsSecondStepNurseryView from "src/pages/panel/applications_nursery/application_second_step/MakeAppSecondStepNurseryView";
import MakeApplicationsThirdStepNurseryView from "src/pages/panel/applications_nursery/application_third_step/MakeAppThirdStepNurseryView";
import EditFirstStepNurseryView from "src/pages/panel/applications_nursery/application_first_step/EditFirstStepNurseryView";
import EditSecondStepNurseryView from "src/pages/panel/applications_nursery/application_second_step/EditSecondStepNurseryView";
import EditThirdStepNurseryView from "src/pages/panel/applications_nursery/application_third_step/EditThirdStepNurseryView";
import CreateNewAccountView from "src/pages/authentication/CreateNewAccountView";
import CreateNewAccountNationalRegistryView from "src/pages/authentication/CreateNewAccountNationalRegistryView";

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
