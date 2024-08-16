import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-4-server.vercel.app/api",
    credentials: "include",
  }),
  tagTypes: ["Products"],
  endpoints: () => ({}),
});

export default baseApi;
