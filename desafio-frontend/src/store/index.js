import { configureStore } from '@reduxjs/toolkit'

import employeeReducer from './reducers/employeeReducer'
import activitieReducer from './reducers/activitieReducer'
import epiReducer from './reducers/epiReducer'

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    activitie: activitieReducer,
    epi: epiReducer,
  },
});

export default store;
