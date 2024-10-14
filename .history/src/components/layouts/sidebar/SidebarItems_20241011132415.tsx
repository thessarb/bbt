// import PATHS from "src/routes/Paths";
import { useSidebarData } from "src/store/sidebar/SidebarData";

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
  },];

  export const useSidebarItems = () => {
    const sidebarData = useSidebarData((state: any) => state.sidebarData);
    const sidebarItems = [...SidebarItems];
  
  
      sidebarItems.splice(1, 0);
    }
  
    return sidebarItems;
  };


export default SidebarItems;
