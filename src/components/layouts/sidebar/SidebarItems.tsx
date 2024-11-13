import PATHS from "src/routes/Paths";

const SidebarItems = [
    {
        path: PATHS.dashboard,
        icon: "icon-squares-four",
        name: "Übersicht",
        roles: [3, 4],
    },
    {
        path: PATHS.orders,
        icon: "icon-file-text",
        name: "Aufträge",
        roles: [3, 4],
    },
    {
        path: PATHS.documents,
        icon: "icon-files",
        name: "Dokumente",
        roles: [3, 4],
    },
    {
        path: PATHS.library,
        icon: "icon-books",
        name: "Bibliothek",
        roles: [3, 4],
    },
    {
        path: PATHS.messages,
        icon: "icon-envelope-simple",
        name: "Systemnachrichten",
        roles: [3, 4],
    },
    {
        path: PATHS.userManagement,
        icon: "icon-user",
        name: "Benutzerverwaltung",
        roles: [1],
    },
];

export const useSidebarItems = () => {
    const sidebarItems = [...SidebarItems];

    return sidebarItems;
};

export default SidebarItems;
