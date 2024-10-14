const PATHS = {
  homepage: "/",

  login: "/login",
  forgotPassword: "/passwort-vergessen",
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
  documents:"/dokumente",
  messges:"/systemnachrichten",
  library:"/bibliothek",
  news:"/nachricht-lessen",

  notifications: "/notifications",
};

export default PATHS;
