import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICar } from '../../types/interface';

interface ISelectedCar {
  selectedCar: ICar | null;
}

const initialState: ISelectedCar = {
  selectedCar: null,
};

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setSelectedCar: (state, action: PayloadAction<ICar>) => {
      state.selectedCar = action.payload;
    },
  },
});

export const { setSelectedCar } = selectedSlice.actions;

export const selectSelectedCar = (state: { selected: ISelectedCar }) =>
  state.selected.selectedCar;

export default selectedSlice.reducer;
