// Imports
import { format } from "date-fns";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post, handleDelete }) => {
  // dummy request
  // opportunity = {
  //   id: 0,
  //   title: "Title for the opportunity",
  //   description: "string",
  //   start_date: "2023-08-25",
  //   end_date: "2023-08-25",
  //   created_at: "2023-08-28T18:13:53.234Z",
  //   created_by: "string",
  //   opportunity_type: "string",
  //   domains: [
  //     {
  //       id: 0,
  //       name: "string",
  //     },
  //   ],
  //   skills: [
  //     {
  //       id: 0,
  //       name: "string",
  //     },
  //   ],
  // };

  // Formating Date into Required Formate
  const parsedDate = new Date(post.created_at);
  const formattedDate = format(parsedDate, "yyyy-MM-dd");

  return (
    <div className="p-3 sm:p-5 border border-secondary rounded-lg shadow-md bg-accent flex flex-col lg:flex-row justify-center w-full">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <div>
          <div className="text-lg my-4 flex justify-start items-center">
            <b>Created At :</b>
            {formattedDate}
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <Link to={`/post-applicants/${post.id}`}>
              <button className="flex bg-accent hover:bg-primary text-primary border hover:text-accent border-primary font-semibold px-4 py-2 rounded-lg">
                Applicants
              </button>
            </Link>
            <Link to={`/post-edit/${post.id}`}>
              <button className="flex w-lg bg-accent hover:bg-primary text-primary border hover:text-accent border-primary font-semibold px-8 py-2 rounded-lg">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(post.id)}
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
