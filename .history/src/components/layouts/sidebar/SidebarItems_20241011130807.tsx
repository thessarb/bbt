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
