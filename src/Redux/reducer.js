import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: window.localStorage.getItem("token"),
    user: {}
  },
  reducers: {
    setToken(state, { payload: { token } }) {
      if (token) {
        window.localStorage.setItem("token", token);
      } else {
        window.localStorage.removeItem("token");
      }
      return { ...state, token };
    },
    setUserData(state, { payload: { first, last, email } }) {
      return { ...state, user: { first, last, email } };
    }
  }
});

export const { setToken, setUserData } = userSlice.actions;

export default userSlice.reducer;
