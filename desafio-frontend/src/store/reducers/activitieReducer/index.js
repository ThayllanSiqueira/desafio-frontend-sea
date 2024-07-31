import { createSlice } from '@reduxjs/toolkit'

export const activitieSlice = createSlice({
  name: 'activitie',
  initialState: {
    activities: [],
  },
  reducers: {
    setActivitiesAction: (state, action) => {
      state.activities = action.payload;
    },
  },
});

export const { setActivitiesAction } = activitieSlice.actions;
export default activitieSlice.reducer;
