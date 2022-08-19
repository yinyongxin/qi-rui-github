import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './index';

export interface ExempleInterface {
  value: number;
  status: 'success' | 'fail' | 'loading';
}

const initialState: ExempleInterface = {
  value: 0,
  status: 'success',
};

function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve, rejected) =>
    setTimeout(() => resolve({ data: amount }), 1000)
  );
}

/**
 * 异步处理
 */
export const incrementAsync = createAsyncThunk(
  'value/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const exempleSlice = createSlice({
  name: 'exemple',
  initialState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'fail';
      });
    builder.addDefaultCase((state) => {});
  },
});

export const exempleActions = exempleSlice.actions;

export const selectCount = (state: RootState) => state.exemple.value;

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const {
      exemple: { value },
    } = getState();
    if (value % 2 === 1) {
      dispatch(exempleActions.incrementByAmount(amount));
    }
  };

export const exempleReducer = exempleSlice.reducer;
