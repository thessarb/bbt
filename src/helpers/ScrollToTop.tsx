import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SidebarStatus } from "src/store/sidebar/SidebarStatus";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const addSidebarStatus = SidebarStatus((state: any) => state.addSidebar);

  useEffect(() => {
    window.scrollTo(0, 0);
    addSidebarStatus(false);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
