const PATHS = {
  homepage: "/",

  login: "/login",
  forgotPassword: "/forgot-password",
  resetPasswordParam: "/reset-password/:token",
  activateAccountParam: "/register/:token",
  createNewAccount: "/create-account",

  myProfile: "/profile",
  editProfile: `/profile/edit`,
  userProfile: "/profile/1",

  dashboard: "/dashboard",
  orders: "/auftrage",
  administration: "/verwaltung",
  administrationOrder: " /verwaltung/auftrag/:id",
  approvalGranted: "/freigabe-erteilt",
  documents:"",

  notifications: "/notifications",
};

export default PATHS;
