import { createSlice, nanoid } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare: ({ title, content }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },

    postDeleted: {
      reducer: (state, action) =>
        state.filter((st) => st.id !== action.payload.id),
      prepare: ({ id }) => {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
