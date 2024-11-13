// Api Base URL
import { apiBaseUrl } from "../helpers/AppConfig";

const API_PATHS = {
  login: apiBaseUrl + "login",
  logout: apiBaseUrl + "logout",
  profile: apiBaseUrl + "user/profile",
  resetPassword: (token: string | undefined) =>
    apiBaseUrl + `forgot-password/update${token}`,
  getPasswordData: (token: string | undefined) =>
    apiBaseUrl + `forgot-password/reset/view/${token}`,
};

export default API_PATHS;
