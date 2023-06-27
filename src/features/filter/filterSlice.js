import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: [],
  search: '',
  currentPage: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    tagAdded(state, action) {
      !state.tags.includes(action.payload) && state.tags.push(action.payload);
    },
    tagRemoved(state, action) {
      const indexOfTag = state.tags.indexOf(action.payload);
      if (indexOfTag !== -1) state.tags.splice(indexOfTag, 1);
    },
    searched(state, action) {
      state.search = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  tagAdded,
  tagRemoved,
  searched,
  setCurrentPage,
} = filterSlice.actions;
