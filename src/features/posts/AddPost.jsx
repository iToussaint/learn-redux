import { useState } from "react";
import { useDispatch } from "react-redux";
import { postsActions } from "./postsSlice";

function AddPost() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(postsActions.postAdded({
      title: postTitle,
      content: postContent,
    }));
  }

  function handlePostTitleTyped(event) {
    setPostTitle(event.target.value);
  }

  function handlePostContentTyped(event) {
    setPostContent(event.target.value);
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-slate-800 p-4"
    >
      <h1 className="text-2xl font-bold text-slate-100">Add A Post</h1>
      <input
        value={postTitle}
        onChange={handlePostTitleTyped}
        type="text"
        placeholder="Add Post Title"
        className="bg-slate-300 px-3 py-2 rounded-sm"
      />
      <input
        value={postContent}
        onChange={handlePostContentTyped}
        type="text"
        placeholder="Add Post Content"
        className="bg-slate-300 px-3 py-2 rounded-sm"
      />

      <button className="bg-slate-500 py-2 font-bold rounded-md">
        Add Post
      </button>
    </form>
  );
}

export default AddPost;
