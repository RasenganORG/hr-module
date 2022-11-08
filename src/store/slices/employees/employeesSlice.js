import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import employeesService from './employeesService';

const initialState = {
  employee: {},
  employees: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getAllEmployees = createAsyncThunk(
  'employees/getAllEmployees',
  async (thunkAPI) => {
    try {
      return await employeesService.getAllEmployees();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getEmployee = createAsyncThunk(
  'employees/getEmployee',
  async (id, thunkAPI) => {
    try {
      return await employeesService.getEmployee(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editEmployee = createAsyncThunk(
  'users/editEmployee',
  async (data, thunkAPI) => {
    try {
      return await employeesService.editEmployee(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    reset(state) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
      state.employees = [];
      state.employee = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employees = action.payload;
      })
      .addCase(getAllEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.employees = [];
      })
      .addCase(getEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employee = action.payload;
      })
      .addCase(getEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.employee = {};
      })
      .addCase(editEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editEmployee.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(editEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = employeesSlice.actions;
export default employeesSlice.reducer;
