// Api Base URL
import { apiBaseUrl } from "../helpers/AppConfig";

const API_PATHS = {
  login: apiBaseUrl + "login",
  logout: apiBaseUrl + "logout",
  register: apiBaseUrl + "request-access",
  profile: apiBaseUrl + "user/profile",
  forgotPassword: apiBaseUrl + "forgot-password/check/user",
  updatePassword: (resetToken: string | undefined) =>
    apiBaseUrl + `forgot-password/update/${resetToken}`,
  getPasswordData: (token: string | undefined) =>
    apiBaseUrl + `forgot-password/reset/view/${token}`,
  updateProfile: apiBaseUrl + "user/profile/change-password",
  notificationList: apiBaseUrl + "notification/list",
};

export default API_PATHS;
