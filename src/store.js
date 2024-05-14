import { configureStore } from "@reduxjs/toolkit";
import paymentSlice from "./slices/paymentSlice";
import { paymentsApi } from "./services/apiPayments";

const store = configureStore({
  reducer: {
    payment: paymentSlice,
    [paymentsApi.reducerPath]: paymentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(paymentsApi.middleware),
});

export default store;
