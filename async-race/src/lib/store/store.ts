import { configureStore } from '@reduxjs/toolkit';
import carSlice from '../slices/car-slice';

export const store = configureStore({
  reducer: {
    cars: carSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
