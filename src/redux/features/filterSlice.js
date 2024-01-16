const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  search: "",
  title: "",
  ingredients:"",
};

const filterSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    searched: (state, action) => {
      state.search = action.payload;
    },

    clearAllFilter: (state) => {
      state.search = "";
      state.title = "";
      state.ingredients = ""
    },
  },
});

export default filterSlice.reducer;
export const {
  searched,

  clearAllFilter,
} = filterSlice.actions;
