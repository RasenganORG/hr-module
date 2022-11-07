import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './slices/employees/employeesSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

export default store;
