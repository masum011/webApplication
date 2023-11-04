import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  data: [],
  loading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk("userData/fetch", async () => {
  try {
    const response = await fetch(
      `https://640b149381d8a32198d8fdbb.mockapi.io/api/v1/again_curd_operation`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const fetchUserDatabyId = createAsyncThunk("userDataid/byid", async (id) => {
    try {
      const response = await fetch(
        `https://640b149381d8a32198d8fdbb.mockapi.io/api/v1/again_curd_operation/${id}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  });
  

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      })


      .addCase(fetchUserDatabyId.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserDatabyId.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserDatabyId.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      })
  },

});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
