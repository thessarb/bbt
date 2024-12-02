import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./Routes";
import { makeApiCall } from "src/api/apiRequests";
import { useUserdata } from "src/store/UserData";
import ScrollToTop from "src/helpers/ScrollToTop";
import API_PATHS from "src/api/apiPaths";
import API_HEADERS from "src/api/apiConfig";
import PATHS from "./Paths";
import Error404 from "src/pages/notfound/Error404";
import * as AppConfig from "src/helpers/AppConfig";
import { useSidebarData } from "src/store/sidebar/SidebarData";

const AppRouter: React.FC = () => {
  interface UserData {
    role: string;
  }
  type AddUserData = (userData: UserData) => void;

  const [loading, setLoading] = useState<boolean>(true);

  const [isRequesting, setIsRequesting] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  const addLoggedUserData: AddUserData = useUserdata(
    (state: any) => state.addUserData
  );
  
  const userData = useCallback(async () => {
    // setIsRequesting(true);
    try {
      const response: any = await makeApiCall<ResponseType>(
        API_PATHS.profile,
        "GET",
        API_HEADERS.authenticated
      );
      addLoggedUserData(response.response);
    } catch (error: any) {
      AppConfig.deleteAccessToken();
      window.location.href = PATHS.login;
      // setIsRequesting(false);
    }
  }, []);

  useEffect(() => {
    if (isRequesting) {
      setIsAppLoaded(true);
    }
  }, [isRequesting]);

  useEffect(() => {
    if (AppConfig.isLogged()) {
      userData();
    }
  }, [userData]);

  const memoizedPrivateRoutes = useMemo(() => PrivateRoutes, []);
  const memoizedPublicRoutes = useMemo(() => PublicRoutes, []);
 
  return (
    <Router>
      <ScrollToTop />
      {!isRequesting && (
        <Routes>
          {
          // !loading &&
            memoizedPrivateRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
             ))
            }

          {memoizedPublicRoutes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
          {<Route path="*" element={<Error404 />} />}
        </Routes>
     )} 
    </Router>
  );
};

export default AppRouter;
