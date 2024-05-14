import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenedEdit: false,
  editedData: {},
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    toggleForm(state, action) {
      state.isOpenedEdit = action.payload;
    },
    setEditedData(state, action) {
      state.editedData = action.payload;
    },
  },
});

export const { toggleForm, setEditedData } = paymentSlice.actions;

export default paymentSlice.reducer;
