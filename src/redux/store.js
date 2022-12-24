import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { spotifyApi, spotifyApi2, spotifyApi3 } from './services/spotify';

export const store = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    [spotifyApi2.reducerPath]: spotifyApi2.reducer,
    [spotifyApi3.reducerPath]: spotifyApi3.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware)
});
