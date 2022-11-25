import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface TrackState {
  data: Array<any>;
  status: string;
  error: any;
}

const initialState: TrackState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchTracks: any = createAsyncThunk("track/fetchAll", async () => {
  const res = await axios.get("http://localhost:8000/track_day/");
  return res.data;
});

export const registerDay: any = createAsyncThunk(
  "track/registerDay",
  async () => {
    const res = await axios.post("http://localhost:8000/track_day/", {
      feeling: "good",
      track: { connect: { id: 1 } },
    });
    console.log("Registered? ", res.data);
    return res.data;
  }
);

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTracks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTracks.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "suceeded";
        state.data = action.payload;
      })
      .addCase(fetchTracks.rejected, (state) => {
        state.error = "error";
      });
  },
});

export default trackSlice.reducer;
