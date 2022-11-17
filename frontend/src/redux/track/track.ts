import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { dataGraphic as mydata } from "../../data";

interface dataGraphic {
  x: string;
  y: number;
}

export interface TrackState {
  listTrack: Array<dataGraphic>;
}

const initialState: TrackState = {
  listTrack: mydata,
};

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    addToMonth: (state) => {
      const date = new Date();
      const actual_month = date.toLocaleDateString("en-us", { month: "short" });
      const item = state.listTrack.find((obj) => obj.x === actual_month);
      if (item) {
        item.y++;
      }
    },
  },
});

export const { addToMonth } = trackSlice.actions;

export default trackSlice.reducer;
