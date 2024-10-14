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
  
    nursery: "/nursery",
    showNursery: "/nursery/details/",
    showNurseryId: "/nursery/details/:id",
  
    kindergarten: "/kindergarten",
    showKindergarten: "/kindergarten/details/",
    showKindergartenId: "/kindergarten/details/:id",
  
    mealsAgegroups: "/meals/age-group",
    mealsAssortment: "/meals/assortment",
    mealsMenu: "/meals/menu",
    mealsAllergy: "/meals/allergy",
    mealsAllergyProducts: (Id: number) => `/meals/allergy/${Id}/products`,
    mealsAllergyIdProducts: "/meals/allergy/:Id/products",
  
    educationList: "/education-program/list",
    educationAgeGroups: "/education-program/age-groups",
    educationEditView: (educationProgramId: number) =>
      `/education-program/list/${educationProgramId}`,
    educationEditViewId: "/education-program/list/:educationProgramId",
    educationView: (educationProgramId: number) =>
      `/education-program/list/view/${educationProgramId}`,
    educationViewId: "/education-program/list/view/:educationProgramId",
  
    childrensCategories: "/children/categories",
  
    applications: "/applications",
    registerApplicationsNursery: "/list/nursery/applications",
    registerApplicationsKindergarten: "/list/kindergarten/applications",
  
    showApplicationKindergarten: "/list/kindergarten/applications/details/",
    showApplicationKindergartenId: "/list/kindergarten/applications/details/:id",
    showApplicationNursery: "/list/nursery/applications/details/",
    showApplicationNurseryId: "/list/nursery/applications/details/:id",
  
    applicationsKindergarten: "/applications/kindergarten",
    applicationsNursery: "/applications/nursery",
  
    showApplicationsKindergarten: "/applications/kindergarten/details/",
    showApplicationsKindergartenId: "/applications/kindergarten/details/:id",
    showApplicationsNursery: "/applications/nursery/details/",
    showApplicationsNurseryId: "/applications/nursery/details/:id",
  
    makeApplicationKindergarten: "/applications/kindergarten/create",
    makeApplicationStepOneKindergarten: "/applications/kindergarten/create",
    editApplicationStepOneKindergarten: "/applications/kindergarten/edit/",
    editApplicationStepOneIdKindergarten: "/applications/kindergarten/edit/:id",
  
    makeApplicationNursery: "/applications/nursery/create",
    makeApplicationStepOneNursery: "/applications/nursery/create",
    editApplicationStepOneNursery: "/applications/nursery/edit/",
    editApplicationStepOneIdNursery: "/applications/nursery/edit/:id",
  
    makeApplicationStepTwoKindergarten:
      "/applications/kindergarten/create/category/",
    makeApplicationStepTwoIdKindergarten:
      "/applications/kindergarten/create/category/:id",
    editApplicationStepTwoKindergarten:
      "/applications/kindergarten/edit/category/",
    editApplicationStepTwoIdKindergarten:
      "/applications/kindergarten/edit/category/:id",
  
    makeApplicationStepTwoNursery:  "/applications/nursery/create/category/",
    makeApplicationStepTwoIdNursery: "/applications/nursery/create/category/:id",
    editApplicationStepTwoNursery: "/applications/nursery/edit/category/",
    editApplicationStepTwoIdNursery: "/applications/nursery/edit/category/:id",
  
    makeApplicationStepThreeKindergarten:
      "/applications/kindergarten/create/documents/",
    makeApplicationStepThreeIdKindergarten:
      "/applications/kindergarten/create/documents/:id",
    editApplicationStepThreeKindergarten:
      "/applications/kindergarten/edit/documents/",
    editApplicationStepThreeIdKindergarten:
      "/applications/kindergarten/edit/documents/:id",
  
    makeApplicationStepThreeNursery:  "/applications/nursery/create/documents/",
    makeApplicationStepThreeIdNursery: "/applications/nursery/create/documents/:id",
    editApplicationStepThreeNursery:     "/applications/nursery/edit/documents/",
    editApplicationStepThreeIdNursery: "/applications/nursery/edit/documents/:id",
  
    transersListNursery: "/list/nursery/transfers",
    transersListKindergarten: "/list/kindergarten/transfers",
    transersListNurseryKindergarten: "/list/nurserytokindergarten/transfers",
    transersList: "/transfers",
  
    transersNurseryList: "/transfers/nursery",
    transersKindergartenList: "/transfers/kindergarten",
    transfersNurseryToKindergarten: "/transfers/nurserytokindergarten",
    requestsList: "/requests",
  
    unregistration: "/unregistration",
    showUnregistration: "/unregistration/details/",
    showUnregistrationId: "/unregistration/details/:id",
  
    gallery: "/gallery",
    showAlbum: "/album/",
    showAlbumId: "/album/:id",
  
    chat: "/chat",
  
    email: "/email",
  
    staff: "/staff",
  
    kindergartenNursery: "/kindergarten&nursery/list",
    showKindergartenNursery: "/kindergarten&nursery/list/details/",
    showKindergartenNurseryId: "/kindergarten&nursery/list/details/:id",
  
    groupsList: "/groups",
    addGroup: "/groups/create",
    editGroup: (groupId: number) => `/groups/${groupId}`,
    editGroupId: "/groups/:groupId",
  
    reports: "/reports",
  
    teachers: "/teachers",
    showTeacher: "/teachers/",
    showTeacherId: "/teachers/:id",
  
    children: "/children",
    showChild: (childId: number) => `/children/${childId}`,
    showChildId: "/children/:childId",
  
    participation: "/participation",
  
    evaluations: "/evaluations",
  
    performance: "/performance",
  
    notifications: "/notifications",
  
    backup: "/backup",
  
    logs: "/logs",
  };
  
  export default PATHS;
  