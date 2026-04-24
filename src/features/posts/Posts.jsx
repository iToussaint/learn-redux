import Post from "./Post";
import AddPost from "./AddPost";
import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.posts);
  return (
    <div className="space-y-4 w-100">
      <AddPost />
      <h1 className="text-3xl">POSTS</h1>

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
}

export default Posts;
