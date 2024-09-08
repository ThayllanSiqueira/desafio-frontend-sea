import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
    employeeId: 0,
    employee: null,
  },
  reducers: {
    setEmployeesAction: (state, action) => {
      state.employees = action.payload;
    },
    setEmployeeIdAction: (state, action) => {
      state.employeeId = action.payload;
    },
    setEmployeeAction: (state, action) => {
      state.employee = action.payload;
    },
  },
});

export const { setEmployeesAction, setEmployeeIdAction, setEmployeeAction } = employeeSlice.actions;
export default employeeSlice.reducer;
