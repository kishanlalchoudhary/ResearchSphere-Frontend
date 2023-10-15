// Imports
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Components
import Post from "../../components/post/post";

// Apis
import api from "../../api/axios";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await api.get("/opportunities/me/");
      // console.log(response.data);
      // toast.success("Posts Fetched Successfully", {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
      setPosts(response.data);
    } catch (err) {
      // console.log(err.message);
      toast.err(err.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  // Delete Post Handler
  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/opportunities/me/${id}/`);
      toast.success("Opportunity Deleted Successfully", {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
      // console.log(response.data);
      getPosts();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col h-[92vh] items-center pt-2 pb-6 overflow-scroll scrollbar-none">
      <h2 className="flex text-4xl font-bold text-primary my-4">My Posts</h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-4 w-full lg:w-5/6 xl:4/6">
        {posts.map((post) => (
          <Post key={post.id} post={post} handleDelete={handleDelete} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyPosts;
