export enum BASE_URL {
  AUTH_URL = "auth",
  CORE_URL = "core",
  HOTEL_URL = "hotel",
}

export type URL_TYPE = {
  AUTH_URL: string;
  CORE_URL: string;
  HOTEL_URL: string;
};

export const GET_BASE_URL: URL_TYPE = {
  AUTH_URL: process.env.NEXT_PUBLIC_AUTH_API_URL || "", //get your base url from env or any file,
  CORE_URL: process.env.NEXT_PUBLIC_CORE_API_URL || "", //get your base url from env or any file,
  HOTEL_URL: process.env.NEXT_PUBLIC_HOTEL_API_URL || "", //get your base url from env or any file,
};
