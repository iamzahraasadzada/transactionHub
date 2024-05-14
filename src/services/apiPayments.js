import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentsApi = createApi({
  reducerPath: "paymentsApi",
  tagTypes: ["Payment"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://acb-api.algoritmika.org/api/transaction",
  }),
  endpoints: (builder) => ({
    payments: builder.query({
      query: () => "/",
      providesTags: ["Payment"],
    }),
    addPayment: builder.mutation({
      query: (payment) => ({
        url: "/",
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      }),
      invalidatesTags: ["Payment"],
    }),
    updatePayment: builder.mutation({
      query: ({ id, from, to, amount }) => ({
        url: `/${id}`,
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify({ from, to, amount }),
      }),
      invalidatesTags: ["Payment"],
    }),
    deletePayment: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Payment"],
    }),
  }),
});

export const {
  usePaymentsQuery,
  useAddPaymentMutation,
  useUpdatePaymentMutation,
  useDeletePaymentMutation,
} = paymentsApi;
