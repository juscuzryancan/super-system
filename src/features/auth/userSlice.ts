import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

export type UserState = {
  username: string;
  token: string;
};

const initialState: UserState = {
  username: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: state => {
      state.username = '';
      state.token = '';
    },
  },
});

export const { clearUser } = userSlice.actions;

//custom selectors
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
