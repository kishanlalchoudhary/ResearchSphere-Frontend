// Imports
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";

const OpportunitySmall = ({ opportunity }) => {
  return (
    <div className="p-6 border-2 border-secondary rounded-lg shadow-md bg-accent flex flex-col mx-4">
      <div className="flex justify-between sm:flex-row flex-col">
        <h2 className="text-2xl font-semibold">{opportunity?.title}</h2>
        {opportunity?.domains && (
          <div className="flex gap-4 mt-5 sm:mt-0">
            {opportunity?.domains?.map((domain, index) => (
              <h3
                key={index}
                className="text-md rounded-lg border border-primary px-2 py-1 font-semibold text-primary"
              >
                {domain}
              </h3>
            ))}
          </div>
        )}
      </div>
      <div className="px-1">
        <div className="text-lg my-5 flex flex-wrap justify-between gap-2 items-start">
          <div>
            <b>Start Date :&nbsp;</b>
            {moment(opportunity?.startDate).format("DD/MM/YYYY")}
          </div>
          <div>
            <b>End Date :&nbsp;</b>
            {moment(opportunity?.endDate).format("DD/MM/YYYY")}
          </div>
          <div className="flex">
            <b>Created By :&nbsp;</b>
            <Link to={`/profile-details/${opportunity?.owner?._id}`}>
              <p className="underline text-primary">
                {opportunity?.owner?.name}
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Link to={`/opportunity-detail/${opportunity?._id}`}>
        <button className="btn bg-primary text-slate-100 hover:text-black font-semibold px-4 py-2 rounded-lg w-full">
          Read More
        </button>
      </Link>
    </div>
  );
};

OpportunitySmall.propTypes = {
  opportunity: PropTypes.object.isRequired,
};

export default OpportunitySmall;
