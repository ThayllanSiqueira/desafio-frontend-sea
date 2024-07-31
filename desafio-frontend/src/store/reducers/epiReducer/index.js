import { createSlice } from '@reduxjs/toolkit'

export const epiSlice = createSlice({
  name: 'epi',
  initialState: {
    epis: [],
  },
  reducers: {
    setEpisAction: (state, action) => {
      state.epis = action.payload;
    },
  },
});

export const { setEpisAction } = epiSlice.actions;
export default epiSlice.reducer;
