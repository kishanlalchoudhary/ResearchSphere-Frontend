import Post from "../../components/post/post";

const MyPosts = () => {
  return (
    <div className="flex flex-col h-[90vh] items-center">
      <h2 className="flex text-3xl">My Posts</h2>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
export default MyPosts;
