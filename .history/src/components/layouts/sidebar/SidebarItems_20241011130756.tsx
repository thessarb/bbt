// import PATHS from "src/routes/Paths";

const SidebarItems = [
  {
    // path: PATHS.dashboard,
    icon: "sidebar-dashboard-icon",
    name: "Übersicht",
    // roles: [1, 3],
  },
  {
    // path: PATHS.children,
    icon: "sidebar-children-icon",
    name: "Aufträge",
    // roles: [2, 4, 8],
  },
  {
    // path: PATHS.participation,
    icon: "sidebar-participation-icon",
    name: "Verwaltung",
    // roles: [2],
  },
  {
    // path: PATHS.evaluations,
    icon: "sidebar-evaluations-icon",
    name: "Bibliothek",
    // roles: [2],
  },
  {
    // path: PATHS.teachers,
    icon: "sidebar-teachers-icon",
    name: "Systemnachrichten",
    // roles: [4],
  },
 
 
  ,

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
