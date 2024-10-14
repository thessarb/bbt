// import PATHS from "src/routes/Paths";

const SidebarItems = [
  {
    // path: PATHS.dashboard,
    icon: "sidebar-dashboard-icon",
    name: "Dashboard",
    // roles: [1, 3],
  },
  {
    path: PATHS.children,
    icon: "sidebar-children-icon",
    name: t("sidebar_children"),
    roles: [2, 4, 8],
  },
  {
    path: PATHS.participation,
    icon: "sidebar-participation-icon",
    name: t("sidebar_participation"),
    roles: [2],
  },
  {
    path: PATHS.evaluations,
    icon: "sidebar-evaluations-icon",
    name: t("sidebar_evaluations"),
    roles: [2],
  },
  {
    path: PATHS.teachers,
    icon: "sidebar-teachers-icon",
    name: t("sidebar_teachers"),
    roles: [4],
  },
  {
    icon: "sidebar-nursey-icon",
    name: t("sidebar_nursery"),
    id: "nursery",
    roles: [3, 9],
    submenu: [
      {
        path: PATHS.nursery,
        name: t("sidebar_list_of_nursery"),
        roles: [3],
      },
      {
        path: PATHS.registerApplicationsNursery,
        name: t("sidebar_list_of_applications_nursery"),
        roles: [3, 9],
      },
      {
        path: PATHS.transersListNursery,
        name: t("sidebar_transfers_nursery_list"),
        roles: [3, 9],
      },
    ],
  },
  {
    icon: "sidebar-kindergarten-icon",
    name: t("sidebar_kindergarten"),
    id: "kindergarten",
    roles: [3, 9],
    submenu: [
      {
        path: PATHS.kindergarten,
        name: t("sidebar_list_of_kindergarten"),
        roles: [3],
      },
      {
        path: PATHS.registerApplicationsKindergarten,
        name: t("sidebar_list_of_applications_kindergarten"),
        roles: [3, 9],
      },
      {
        path: PATHS.transersListKindergarten,
        name: t("sidebar_transfers_list_kindergarten_kindergarten"),
        roles: [3, 9],
      },
      {
        path: PATHS.transersListNurseryKindergarten,
        name: t("sidebar_transfers_list_nursery_kindergarten"),
        roles: [3, 9],
      },
    ],
  },
  {
    path: PATHS.kindergartenNursery,
    icon: "sidebar-kindergarten-icon",
    name: t("sidebar_kindergarten_nursery"),
    roles: [5],
  },
  {
    icon: "sidebar-meal-icon",
    name: t("sidebar_meal"),
    id: "meal",
    roles: [3, 8],
    submenu: [
      {
        path: PATHS.mealsAgegroups,
        name: t("sidebar_meal_age_group"),
        roles: [3],
      },
      {
        path: PATHS.mealsAssortment,
        name: t("sidebar_meal_assortments"),
        roles: [3, 8],
      },
      {
        path: PATHS.mealsMenu,
        name: t("sidebar_meal_menu"),
        roles: [3, 8],
      },
      {
        path: PATHS.mealsAllergy,
        name: t("sidebar_meal_allergies"),
        roles: [3],
      },
    ],
  },
  {
    icon: "sidebar-education-program-icon",
    name: t("sidebar_education_program"),
    id: "education",
    roles: [3],
    submenu: [
      {
        path: PATHS.educationList,
        name: t("sidebar_education_program_list"),
        roles: [3],
      },
      {
        path: PATHS.educationAgeGroups,
        name: t("sidebar_education_program_age_group"),
        roles: [3],
      },
    ],
  },
  {
    path: PATHS.educationList,
    icon: "sidebar-education-program-icon",
    name: t("sidebar_education_program"),
    roles: [1, 2, 4],
  },
  {
    path: PATHS.performance,
    icon: "sidebar-performance-icon",
    name: t("sidebar_performance"),
    roles: [2, 4],
  },
  {
    path: PATHS.childrensCategories,
    icon: "sidebar-children-categories-icon",
    name: t("sidebar_children_category"),
    roles: [3],
  },

  {
    icon: "sidebar-nursey-icon",
    name: t("sidebar_nursery"),
    id: "applications-nursery",
    roles: [1],
    submenu: [
      {
        path: PATHS.applicationsNursery,
        name: t("sidebar_list_of_applications"),
        roles: [1],
      },
      {
        path: PATHS.transersNurseryList,
        name: t("sidebar_transfers_list"),
        roles: [1],
      },
    ],
  },
  {
    icon: "sidebar-kindergarten-icon",
    name: t("sidebar_kindergarten"),
    roles: [1],
    id: "applications-kindergarten",
    submenu: [
      {
        path: PATHS.applicationsKindergarten,
        name: t("sidebar_list_of_applications"),
        roles: [1],
      },
      {
        path: PATHS.transersKindergartenList,
        name: t("sidebar_transfers_list"),
        roles: [1],
      },
      {
        path: PATHS.transfersNurseryToKindergarten,
        name: t("sidebar_transfers_nursery_kindergarten_list"),
        roles: [1],
      },
    ],
  },
  {
    path: PATHS.staff,
    icon: "sidebar-staff-icon",
    name: t("sidebar_staff"),
    id: "staff",
    roles: [6, 3],
  },
  // {
  //   path: PATHS.transersList,
  //   icon: "sidebar-transfers-icon",
  //   name: t("sidebar_transfers"),
  //   id: "transfers",
  //   roles: [6],
  // },
  {
    path: PATHS.groupsList,
    icon: "sidebar-groups-icon",
    name: t("sidebar_groups"),
    roles: [4],
  },
  {
    path: PATHS.unregistration,
    icon: "sidebar-unregister-app-icon",
    name: t("sidebar_unregister_application"),
    roles: [3, 4, 1],
  },
  {
    path: PATHS.reports,
    icon: "sidebar-reports-icon",
    name: t("sidebar_reports"),
    roles: [3],
  },
  {
    path: PATHS.gallery,
    icon: "sidebar-transfers-icon",
    name: t("sidebar_gallery"),
    id: "gallery",
    roles: [1, 2],
  },
  // {
  //   path: PATHS.email,
  //   icon: "sidebar-email-icon",
  //   name: t("sidebar_email"),
  //   roles: [],
  // },
  // {
  //   path: PATHS.chat,
  //   icon: "sidebar-chat-icon",
  //   name: t("sidebar_chat"),
  //   roles: [],
  // },
  {
    path: PATHS.logs,
    icon: "sidebar-logs-icon",
    name: t("sidebar_logs"),
    roles: [7],
  },
  {
    path: PATHS.backup,
    icon: "sidebar-backup-icon",
    name: t("sidebar_backup"),
    roles: [7],
  },
];

export default SidebarItems;
