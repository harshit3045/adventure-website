import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  isAuthenticated: false,
  user: null 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { username, password } = action.payload;
      // Simple authentication logic (you can replace this with real authentication)
      if (username === 'user' && password === 'password') {
        state.isAuthenticated = true;
        state.user = username;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
