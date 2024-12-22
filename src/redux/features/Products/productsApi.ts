import baseApi from "@/redux/api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: ({product, token}) => ({
        url: "/products/create-product",
        method: "POST",
        body: product,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      invalidatesTags: ["Products"],
    }),
    getAllProducts: builder.query({
      query: ({ searchTerm, minPrice, maxPrice, sort }) => {
        //adding query fields for filters
        const params = new URLSearchParams();
        if (searchTerm) params.append("searchTerm", searchTerm);
        if (minPrice !== undefined)
          params.append("minPrice", minPrice.toString());
        if (maxPrice !== undefined)
          params.append("maxPrice", maxPrice.toString());
        if (sort) params.append("sort", sort);

        return {
          url: `/products?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    updateProduct: builder.mutation({
      query: ({id, payload, token}) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: payload,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useAddProductMutation,
  useUpdateProductMutation
} = productsApi;
