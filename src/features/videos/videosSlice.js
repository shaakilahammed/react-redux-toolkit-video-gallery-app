import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getVideos from './videosAPI';

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: '',
  totalPages: 0,
};

export const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  async ({ tags, searchText, page }) => {
    const { videos, totalPages } = await getVideos(tags, searchText, page);
    return { videos, totalPages };
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
        state.videos = action.payload.videos;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
        state.totalPages = 0;
      });
  },
});

export default videosSlice.reducer;
