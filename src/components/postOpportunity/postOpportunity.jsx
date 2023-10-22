import { Link } from "react-router-dom";

const PostOpportunity = () => {
  return (
    <div className="mx-4 p-6 border border-secondary rounded-lg shadow-md bg-accent lg:flex flex-col hidden  ">
      <h2 className="text-2xl font-semibold mb-4 w-full text-center ">
        Want to Post a Research Opportunity?
      </h2>
      <div className="form-control items-center">
        <Link to="/post-opportunity">
          <button className="btn btn-primary text-accent btn-md w-full lg:w-full  text-lg">
            Post Opportunity
          </button>
        </Link>
      </div>
    </div>
  );
};
export default PostOpportunity;
