import { useDispatch } from "react-redux";
import { postsActions } from "./postsSlice";

function Reaction({ postId, emoji, count }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      postsActions.postReacted({
        postId,
        emoji,
      }),
    );
  }

  return (
    <button
      onClick={handleClick}
      className="bg-slate-200 flex gap-1 p-1 justify-center items-center rounded-sm"
    >
      <span>{emoji}</span> <span>{count}</span>
    </button>
  );
}

export default Reaction;
