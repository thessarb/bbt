import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserdata } from "src/store/UserData";
import * as AppConfig from "src/helpers/AppConfig";

interface SidebarButtonProps {
    path?: string;
    name: string;
    icon?: string;
    roles: number[];
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ path, icon, name, roles }) => {
    const userData = useUserdata((state: any) => state.userData);
    const [roleId, setRoleId] = useState<number | null | undefined>(userData.role_id);

    useEffect(() => {
        if (roles && AppConfig.accessData("roleId") && userData.role_id) {
            if (userData.role_id == AppConfig.accessData("roleId")) {
                setRoleId(userData.role_id);
            } else {
                AppConfig.deleteAccessToken();
            }
        }
    }, [userData]);

    return (
        <>
            {roleId && roles.includes(roleId) && (
                <NavLink to={path ? path : ""} className="sidebar__menu-item">
                    <button className="collapsed" type="button">
                        {icon && <i className={`icon ${icon}`} />}
                        <span>{name}</span>
                    </button>
                </NavLink>
            )}
        </>
    );
};

export default SidebarButton;
