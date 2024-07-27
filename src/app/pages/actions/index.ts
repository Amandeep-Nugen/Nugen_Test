"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setCookie = (cookieName: string, cookieValue: string) => {
  try {
    cookies().set(cookieName, cookieValue);
  } catch (error) {
    console.log(error, `error while updating cookie :: ${error}`);
  }
};

export const removeCookie = (cookieName: string) => {
  try {
    cookies().set(cookieName, "", { expires: new Date(0) });
  } catch (error) {
    console.log(error, `error while updating cookie :: ${error}`);
  }
};

export const serverRedirect = (url: string) => {
  try {
    redirect(url);
  } catch (error) {
    console.log(error, `error while redirecting url :: ${error}`);
  }
};
