import React, { Fragment, useEffect, useState, useRef } from "react";
// import { useUserdata } from "src/store/UserData";
import SimpleBar from "simplebar-react";
// import SidebarButton from "./SidebarButton";
// import SidebarItems, { useSidebarItems } from "./SidebarItems";

const SidebarContent: React.FC = () => {
  // const userData = useUserdata((state: any) => state.userData);

  const simplebarRef = useRef<any>();
  const sidebarRef = useRef<any>();

  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    // if (Object.keys(userData).length > 0) {
      setSidebar(true);
      if (sidebarRef.current.querySelector(".active")) {
        const activeItem = sidebarRef.current.querySelector(".active");
        const activeLi = activeItem.parentElement;
        const activeUl = activeLi.parentElement;
        const activeDiv = activeUl.parentElement;
        activeDiv.classList.add("show");
        activeDiv.parentElement.classList.add("active");
        const btn = activeDiv.parentElement.querySelector("button");
        btn.classList.remove("collapsed");
      }
    // }
  }, [sidebarRef.current, sidebar]);

  return (
    <Fragment>
      <SimpleBar className="h-100" ref={simplebarRef}>
        <div id="sidebar-menu" ref={sidebarRef}>
          {/* {useSidebarItems().map((item, index) => (
            <SidebarButton
              id={item.id ? item.id : ""}
              key={index}
              path={item.path ? item.path : ""}
              icon={item.icon}
              name={item.name}
              permissions={item.permissions}
              submenu={item.submenu ? item.submenu : []}
            />
          ))} 
        </div>
      </SimpleBar>
    </Fragment>
  );
};
export default SidebarContent;
