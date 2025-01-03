import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://assignment-4-server.vercel.app/api

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
