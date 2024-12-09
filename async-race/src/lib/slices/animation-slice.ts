import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAnimationCar {
  carId: number | null;
  isAnimation: boolean;
  duration: number;
}

const initialState: IAnimationCar[] = [];

const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    setAnimationCar: (state, action: PayloadAction<IAnimationCar>) => {
      const existingCar = state.find(
        (car) => car.carId === action.payload.carId,
      );
      if (existingCar) {
        existingCar.isAnimation = action.payload.isAnimation;
        existingCar.duration = action.payload.duration;
      } else {
        state.push(action.payload);
      }
    },
    clearAnimation: (state, action: PayloadAction<number>) => {
      return state.filter((car) => car.carId !== action.payload);
    },
  },
});

export const { setAnimationCar, clearAnimation } = animationSlice.actions;

export const getAnimationCar = (state: { animation: IAnimationCar[] }) =>
  state.animation;

export default animationSlice.reducer;
