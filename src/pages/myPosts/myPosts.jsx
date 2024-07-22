import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Post from "../../components/post/post";
import api from "../../api/axios";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await api.get("/opportunities/my");
      // toast.success(response.data.message, {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
      setPosts(response.data?.data?.opportunities);
    } catch (err) {
      toast.err(err.response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/opportunities/my/${id}`);
      toast.success(response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
      getPosts();
    } catch (err) {
      toast.error(err.response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col h-[92vh] items-center pt-2 pb-6 overflow-scroll scrollbar-none">
      <h2 className="flex text-4xl font-bold text-primary my-4">My Posts</h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-4 w-full lg:w-5/6 xl:4/6">
        {posts?.map((post) => (
          <Post key={post?._id} post={post} handleDelete={handleDelete} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyPosts;
