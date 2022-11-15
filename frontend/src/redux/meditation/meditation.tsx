import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MeditationState {
  key: number;
  isPlaying: boolean;
  playingMusic: boolean;
  duration: number;
  song: string;
}

const initialState: MeditationState = {
  key: 0,
  isPlaying: false,
  playingMusic: false,
  duration: 0,
  song: "",
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
      state.playingMusic = !state.playingMusic;
    },
    pauseMeditation: (state) => {
      state.isPlaying = false;
      state.playingMusic = false;
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setSong: (state, action: PayloadAction<string>) => {
      state.song = action.payload;
    },
  },
});

export const { restartTimer, playOrPause, pauseMeditation, setTimer, setSong } =
  meditationSlice.actions;

export default meditationSlice.reducer;
