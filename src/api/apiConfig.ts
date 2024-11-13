import * as AppConfig from "../helpers/AppConfig";

const API_HEADERS = {
  unauthenticated: {
    "Accept-Language": "de",
  },
  authenticated: {
    authorization: `Bearer ${AppConfig.accessData("token")}`,
    "Accept-Language": "de",

  },
  blob: {
    Authorization: `Bearer ${AppConfig.accessData("token")}`,
    "Accept-Language": "de",
    responseType: "blob",
  },
};

export default API_HEADERS;
