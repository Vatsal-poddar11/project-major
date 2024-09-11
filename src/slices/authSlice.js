import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setUserId(state, action) { 
      state.userId = action.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken, setUserId } = authSlice.actions;
export default authSlice.reducer;
