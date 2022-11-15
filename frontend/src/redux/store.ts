import { configureStore } from "@reduxjs/toolkit";

import meditationReducer from "./meditation/meditation";

export const store = configureStore({
  reducer: {
    meditation: meditationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
