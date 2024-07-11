import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "Products",
    baseQuery: fetchBaseQuery({baseUrl: "https://assignment-4-server.vercel.app/api"}),
    endpoints: () => ({}),
});

export default baseApi;