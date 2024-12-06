import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAPICars from '../../api/get-cars';
import createAPICar from '../../api/create-car';
import deleteAPICar from '../../api/delete-car';
import { ICarsResponse } from '../../types/interface';

interface CarState extends ICarsResponse {
  loading: boolean;
}

const initialState: CarState = {
  items: [],
  totalItems: '0',
  loading: false,
};

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (page: number) => {
    const response = await getAPICars(page);
    return response;
  },
);

export const addCar = createAsyncThunk(
  'cars/addCar',
  async (car: { name: string; color: string }) => {
    await createAPICar(car);
    return car;
  },
);

export const deleteCar = createAsyncThunk(
  'cars/deleteCar',
  async (carId: number) => {
    await deleteAPICar(carId);
    return carId;
  },
);

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalItems = action.payload.totalItems;
        state.loading = false;
      })
      .addCase(addCar.fulfilled, () => {})
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.items = state.items.filter((car) => car.id !== action.payload);
        state.totalItems = (parseInt(state.totalItems, 10) - 1).toString();
      });
  },
});

export default carSlice.reducer;
