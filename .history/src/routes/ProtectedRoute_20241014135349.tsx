import { useNavigate } from "react-router-dom";
import { accessData, isLogged } from "../helpers";
import AccessDenied from "src/pages/accessdenied/AccessDenied";

interface ProtectedRouteProps {
  roles: number[];
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles, children }) => {
  const navigate = useNavigate();

  const isAuthorized = isLogged();
  const rolesRequired = !!roles?.length;
  const rolesMatch = rolesRequired
    ? roles.includes(Number(accessData("roleId")))
    : false;

  if (isAuthorized && rolesMatch) {
    return <>{children}</>;
  } else if (isAuthorized && !rolesMatch) {
    return <AccessDenied />;
  } else {
    navigate(-1);
    return null;
  }
};

export default ProtectedRoute;
