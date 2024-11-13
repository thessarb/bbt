import CryptoJS from "crypto-js";
import PATHS from "src/routes/Paths";

// Api key from backend
// export const apiKey = process.env.REACT_APP_API_KEY;

// Api base url
export const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

// Auth key
export const authKey = process.env.REACT_APP_AUTH_KEY_TOKEN;

// Base url
export const baseUrl = process.env.REACT_APP_BASE_URL;

// Pusher key
// export const pusherKey = process.env.REACT_APP_PUSHER_KEY;


// Set access token
interface AuthData {
  token: string;
  roleId: number;
}

export const setAuth = <T extends AuthData>(data: T) => {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    authKey || ""
  ).toString();
  localStorage.setItem("access", ciphertext);
};

// Get access data
export const accessData = (key: "token" | "roleId"): string | undefined => {
  const access = localStorage.getItem("access");
  if (access) {
    try {
      const bytes = CryptoJS.AES.decrypt(access, authKey || "");
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      const value = decryptedData[key];

      if (value) {
        return value;
      }
    } catch (error) {
      console.error("Failed to decrypt or parse access data", error);
    }
  }
  return undefined;
};

// Delete access token and role
export const deleteAccessToken = () => {
  localStorage.removeItem("access");
  window.location.href = PATHS.login;
};

// Check if is logged in
export const isLogged = () => {
  if (accessData("token") && accessData("roleId")) {
    return true;
  } else {
    return false;
  }
};
