import Reaction from "./Reaction";

function Reactions({ postId, reactions }) {
  return (
    <div className="flex gap-2">
      {Object.keys(reactions).map((emoji, index) => (
        <Reaction key={index} postId={postId} emoji={emoji} count={reactions[emoji]} />
      ))}
    </div>
  );
}

export default Reactions;
