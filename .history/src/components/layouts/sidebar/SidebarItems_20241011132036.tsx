// import PATHS from "src/routes/Paths";

const SidebarItems = [
  {
    // path: PATHS.ubersicht,
    icon: "icon-squares-four",
    name: "Übersicht",
    // roles: [],
  },
  {
    // path: PATHS.aufträge,
    icon: "icon-file-text",
    name: "Aufträge",
    // roles: [],
  },
  {
    // path: PATHS.verwaltung,
    icon: "icon-book-open",
    name: "Verwaltung",
    // roles: [],
  },
  {
    // path: PATHS.dokumente,
    icon: "icon-files",
    name: "Dokumente",
    // roles: [],
  },
  {
    // path: PATHS.bibliothek,
    icon: "icon-books",
    name: "Bibliothek",
    // roles: [],
  },
  {
    // path: PATHS.systemnachrichten,
    icon: "icon-envelope-simple",
    name: "Systemnachrichten",
    // roles: [],
  },

  export const useSidebarItems = () => {
    const sidebarData = useSidebarData((state: any) => state.sidebarData);
    const sidebarItems = [...SidebarItems];
  
    if (sidebarData.length > 0) {
      var childrenData: any = {
        icon: "sidebar-children-icon",
        name: t("sidebar_children"),
        id: "children",
        roles: [1],
        submenu: sidebarData,
      };
  
      sidebarItems.splice(1, 0, childrenData);
    }
  
    return sidebarItems;
  };
];

export default SidebarItems;
