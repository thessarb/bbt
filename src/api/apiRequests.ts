import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import * as AppConfig from "../helpers/AppConfig";

export const makeApiCall = async <T>(
  url: string,
  method: AxiosRequestConfig["method"],
  headers?: AxiosRequestConfig["headers"],
  data?: any,
  responseType?: AxiosRequestConfig["responseType"]
): Promise<T> => {
  try {
    const requestConfig: AxiosRequestConfig = {
      method,
      url,
      data,
      headers,
    };

    if (responseType) {
      requestConfig.responseType = responseType;
    }
    const response: AxiosResponse<T> = await axios(requestConfig);

    return response.data;
  } catch (error: any) {
    if (error.code === "ERR_NETWORK") {
    } else if (
      error.response.status === 401 &&
      error.response.data.message === "Unauthenticated."
    ) {
      AppConfig.deleteAccessToken();
    }

    throw error;
  }
};

export const makeApiCallDownload = async <T>(
  url: string,
  method: AxiosRequestConfig["method"],
  headers?: AxiosRequestConfig["headers"],
  data?: any,
  responseType?: AxiosRequestConfig["responseType"]
): Promise<AxiosResponse<T>> => {
  try {
    const requestConfig: AxiosRequestConfig = {
      method,
      url,
      data,
      headers,
      responseType: "blob",
    };

    const response: AxiosResponse<T> = await axios(requestConfig);

    return response;
  } catch (error: any) {
    if (error.code === "ERR_NETWORK") {
      AppConfig.deleteAccessToken();
    } else if (
      error.response.status === 401 &&
      error.response.data.message === "Unauthenticated."
    ) {
      AppConfig.deleteAccessToken();
    }

    throw error;
  }
};
