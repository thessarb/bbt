import { accessData } from "./AppConfig";

export const RoleCheck = (roleId: string) => {
  return accessData("roleId") == roleId;
};
