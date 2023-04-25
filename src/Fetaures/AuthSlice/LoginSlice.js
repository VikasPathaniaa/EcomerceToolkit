import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      name: "",
      password: "",
      imgUrl: "",
      authUser: false,
    },
  },
  reducers: {
    login: (state, { payload }) => {
      const userId = payload;
      state.user = userId;
      state.user.authUser = true;
      const saveData = JSON.stringify(userId);
      sessionStorage.setItem("authUser", saveData);
      sessionStorage.setItem("authFlag", true);
    },
    logout: (state , {payload}) => {
state.user = {
    name: "",
    password: "",
    imgUrl: "",
    authUser: false,
  }
  sessionStorage.clear()

},
  },
});
export const { login, logout } = LoginSlice.actions;

export default LoginSlice.reducer;
