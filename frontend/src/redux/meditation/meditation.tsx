import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MeditationState {
  key: number;
  isPlaying: boolean;
  duration: number;
}

const initialState: MeditationState = {
  key: 0,
  isPlaying: false,
  duration: 0,
};

export const meditationSlice = createSlice({
  name: "meditation",
  initialState,
  reducers: {
    restartTimer: (state) => {
      state.key = state.key ? 0 : 1;
    },
    playOrPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
  },
});

export const { restartTimer, playOrPause, setTimer } = meditationSlice.actions;

export default meditationSlice.reducer;
