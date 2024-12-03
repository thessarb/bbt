// Api Base URL
import {apiBaseUrl} from "../helpers/AppConfig";

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
    notificationUpdate: (notificationId: number) =>
      apiBaseUrl + `notification/${notificationId}/update`,
    notificationFilter: apiBaseUrl + "filter/notifications/",
    
    userList: apiBaseUrl + "user/list",
    createUser: apiBaseUrl + "user/store",
    getUser: (userId: number) =>
        apiBaseUrl + `user/get/${userId}`,
    updateUser: (userId: number) =>
        apiBaseUrl + `user/update/${userId}`,
    deleteUser: (userId: number) =>
        apiBaseUrl + `user/delete/${userId}`,
    restoreUser: (userId: number) =>
        apiBaseUrl + `user/restore/${userId}`,
    customerList: apiBaseUrl + "customer/list",
    activateCustomer: apiBaseUrl + `user/store/customer`,

    orderList: apiBaseUrl + "order/list",
    orderFilter: apiBaseUrl + "filter/orders/system_id",
    orderFind: (orderId: number) =>
       apiBaseUrl + `order/find/${orderId}`,
    orderResponsiblePerson: (orderId: number) =>
        apiBaseUrl + `order/${orderId}/responsible-persons`,
};

export default API_PATHS;
