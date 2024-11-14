// Api Base URL
import { apiBaseUrl } from "../helpers/AppConfig";

const API_PATHS = {
  login: apiBaseUrl + "login",
  logout: apiBaseUrl + "logout",
  register: apiBaseUrl + "request-access",
  profile: apiBaseUrl + "user/profile",
  forgotPassword: apiBaseUrl + "forgot-password/check/user",
  resetPassword: (token: string | undefined) =>
    apiBaseUrl + `forgot-password/update/${token}`,
  getPasswordData: (token: string | undefined) =>
    apiBaseUrl + `forgot-password/reset/view/${token}`,
};

export default API_PATHS;
