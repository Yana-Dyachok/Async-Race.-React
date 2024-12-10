import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getAPIWinners from '../../api/get-winners';
import { IWinnersResponse } from '../../types/interface';

interface WinnersState extends IWinnersResponse {
  loading: boolean;
}

const initialState: WinnersState = {
  items: [],
  totalItems: '0',
  loading: false,
};

export const getWinners = createAsyncThunk(
  'winners/getWinners',
  async (page: number) => {
    const response = await getAPIWinners(page);
    return response;
  },
);

const winnersSlice = createSlice({
  name: 'winners',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWinners.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWinners.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalItems = action.payload.totalItems;
        state.loading = false;
      });
  },
});

export default winnersSlice.reducer;
