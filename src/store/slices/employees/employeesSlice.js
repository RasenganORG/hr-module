import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import employeesService from './employeesService';

const initialState = {
  employee: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

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

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    reset(state) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const { reset } = employeesSlice.actions;
export default employeesSlice.reducer;
