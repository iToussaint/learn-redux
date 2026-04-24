import { useDispatch } from "react-redux";

function Post({ id, title, content }) {
  const dispatch = useDispatch();
  function deletePost() {
    dispatch(deletePost({ id }));
  }
  return (
    <div className="bg-green-600 p-4 flex flex-col gap-6 rounded-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{content}</p>

      <button
        onClick={deletePost}
        className="bg-red-500 text-slate-200 py-2 rounded-sm"
      >
        delete
      </button>
    </div>
  );
}

export default Post;
