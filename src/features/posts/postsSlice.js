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
            reactions: {
              "🔥": 0,
              "❤️": 5,
              "🍻": 0,
              "👂": 0,
              "🙏": 0,
            },
          },
        };
      },
    },

    postDeleted: {
      reducer(state, action) {
        return state.filter((st) => st.id !== action.payload.id);
      },
      prepare: ({ id }) => {
        return {
          payload: {
            id,
          },
        };
      },
    },

    postReacted: {
      reducer(state, action) {
        state.find((post) => post.id === action.payload.postId).reactions[
          action.payload.emoji
        ]++;
      },

      prepare: ({ postId, emoji }) => {
        return {
          payload: {
            postId,
            emoji,
          },
        };
      },
    },
  },
});

export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
