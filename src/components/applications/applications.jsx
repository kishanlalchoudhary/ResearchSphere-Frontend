import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Application = ({ application, handleWithdraw }) => {
  let textColorClass = "";

  if (application.status == "Pending") {
    textColorClass = "text-primary";
  } else if (application.status == "Accepted") {
    textColorClass = "text-success";
  } else if (application.status == "Rejected") {
    textColorClass = "text-error";
  }

  return (
    <>
      {/* FOR LG */}
      <div className="hidden md:flex card w-full rounded-lg bg-white shadow-md my-4">
        <div className="card-body p-4 px-6">
          <div className="flex flex-row items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold text-primary underline underline-offset-4">
              <Link to={`/opportunity-detail/${application.opportunity}`}>
                {application.opportunity_title}
              </Link>
            </h2>
            <div className={`text-2xl ${textColorClass} font-semibold`}>
              {application.status}
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-lg">
              <b>Applied at : </b>
              {application.created_at.slice(0, 10)}
            </div>
            <button
              className="px-5 py-1 bg-red-500 hover:bg-white hover:text-red-500 border text-accent rounded-lg text-lg hover:border-red-500 font-semibold"
              onClick={() => handleWithdraw(application.id)}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>

      {/* FOR MOBILE */}
      <div className="md:hidden card w-full rounded-lg bg-white shadow-md my-5">
        <div className="card-body p-5">
          <div className="flex mb-4">
            <h2 className="text-2xl font-semibold">
              {application.opportunity_title}
            </h2>
          </div>
          <div className="flex flex-row items-center justify-between mb-4">
            <div className="w-1/2 text-lg">
              <span className="material-symbols-outlined align-middle mr-2">
                schedule
              </span>
              {application.created_at.slice(0, 10)}
            </div>
            <div
              className={`w-1/2 text-end text-xl font-semibold ${textColorClass}`}
            >
              {application.status}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="px-5 py-2 font-semibold w-full bg-red-500 hover:bg-white hover:text-red-500 border text-accent rounded-lg text-lg hover:border-red-500"
              onClick={() => handleWithdraw(application.id)}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Application.propTypes = {
  application: PropTypes.object.isRequired,
  handleWithdraw: PropTypes.func.isRequired,
};

export default Application;
