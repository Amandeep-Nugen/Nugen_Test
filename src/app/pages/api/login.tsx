import httpService from "../http/http";
import { IAuth } from "./interfaces";
import { setCookie } from "../actions";

export const login = async (payload: IAuth) => {
  const response = await httpService.post("auth/login", payload);
  if (response) {
    const { email, userType, accessToken: token } = response;
    setCookie("token", token);
    setCookie(
      "userDetails",
      JSON.stringify({
        email,
        userType,
      })
    );
  }
  return { ...response };
};
