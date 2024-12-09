import { configureStore } from '@reduxjs/toolkit';
import carSlice from '../slices/car-slice';
import selectedSlice from '../slices/selected-car-slice';
import animationSlice from '../slices/animation-slice';

export const store = configureStore({
  reducer: {
    cars: carSlice,
    selected: selectedSlice,
    animation: animationSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
