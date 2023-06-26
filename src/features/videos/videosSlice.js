import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getVideos from './videosAPI';

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: '',
};

export const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  async ({ tags, searchText }) => {
    const videos = await getVideos(tags, searchText);
    return videos;
  }
);

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;
