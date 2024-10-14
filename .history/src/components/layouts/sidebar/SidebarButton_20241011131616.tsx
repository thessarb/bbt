import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { useUserdata } from "src/store/UserData";
// import * as AppConfig from "src/helpers/AppConfig";

interface SidebarButtonProps {
  path?: string;
  name: string;
  id?: string;
  icon?: string;
  // roles: number[];
  // submenu: SubmenuProps[];
}

interface SubmenuProps {
  // path: string;
  name: string;
  icon?: string;
  // roles: number[];
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  id,
  // path,
  icon,
  name,
  // roles,
  // submenu,
}) => {
  // const userData = useUserdata((state: any) => state.userData);

  const [roleId, setRoleId] = useState<number | null | undefined>(
    // userData.role_id
  );

  // useEffect(() => {
  //   if (roles && AppConfig.accessData("roleId") && userData.role_id) {
  //     if (userData.role_id == AppConfig.accessData("roleId")) {
  //       setRoleId(userData.role_id);
  //     } else {
  //       AppConfig.deleteAccessToken();
  //     }
  //   }
  // }, [userData]);

  return (
    <>
      {/* {roleId &&
        roles.includes(roleId) &&
        (submenu.length > 0 ? (
          <div className="menu-item">
            <button
              className="collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${id}`}
              aria-expanded="false"
              aria-controls={id}
            >
              tehtey{icon && <i className={`icon ${icon}`} />}
              <span>{name}</span>
              <i className="icon sidebar-arrow ms-auto" />
            </button>
            <div
              aria-labelledby={id}
              data-bs-parent="#sidebar-menu"
              id={id}
              className="collapse"
            >
              <ul className="sub-menu list-unstyled">
              
                ggggg
              </ul>
            </div>
          </div>
        ) : ( */}
          <NavLink  className="menu-item">
            <button className="collapsed" type="button">
              {/* {icon && <i className={`icon ${icon}`} />} */}
              <i className="icon icon-squares-four"/><span className="body-normal__regular">LALALAL</span>
              
            </button>
          </NavLink>
        {/* ))} */}
    </>
  );
};

export default SidebarButton;
