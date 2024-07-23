import moment from "moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post, handleDelete }) => {
  return (
    <div className="p-3 sm:p-5 border border-secondary rounded-lg shadow-md bg-accent flex flex-col lg:flex-row justify-center w-full">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-semibold">{post?.title}</h2>
        <div>
          <div className="text-lg my-4 flex justify-start items-center">
            <b>Created On : </b> &nbsp;
            {moment(post?.createdAt).format("DD/MM/YYYY")}
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <Link to={`/post-applicants/${post?._id}`}>
              <button className="flex bg-accent hover:bg-primary text-primary border hover:text-accent border-primary font-semibold px-4 py-2 rounded-lg">
                Applications
              </button>
            </Link>
            <Link to={`/post-edit/${post?._id}`}>
              <button className="flex w-lg bg-accent hover:bg-primary text-primary border hover:text-accent border-primary font-semibold px-8 py-2 rounded-lg">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(post?._id)}
              className="flex w-lg bg-accent hover:bg-red-600 text-red-600 border hover:text-accent  border-red-600 font-semibold px-6 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Post;
