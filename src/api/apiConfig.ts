import * as AppConfig from "../helpers/AppConfig";

const API_HEADERS = {
  unauthenticated: {
    "api-key": AppConfig.apiKey,
  },
  authenticated: {
    authorization: `Bearer ${AppConfig.accessData("token")}`,
    "api-key": AppConfig.apiKey,
  },
  blob: {
    Authorization: `Bearer ${AppConfig.accessData("token")}`,
    "api-key": AppConfig.apiKey,
    responseType: "blob",
  },
};

export default API_HEADERS;
