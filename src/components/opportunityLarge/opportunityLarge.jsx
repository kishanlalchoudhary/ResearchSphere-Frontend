import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
import ConfirmationalModal from "../confirmationalModal/confirmationalModal";

const OpportunityLarge = ({ opportunity }) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-center ">
      <div className="my-10 mx-5 p-4 lg:p-6 border border-secondary rounded-lg shadow-md bg-accent flex flex-col w-6/6 lg:w-3/6 ">
        <div className="flex justify-between sm:flex-row flex-col">
          <h2 className="text-2xl font-semibold">{opportunity?.title}</h2>
          <div className="flex gap-4 mt-5 sm:mt-0">
            {opportunity.domains?.map((domain, index) => (
              <h3
                key={index}
                className="text-md rounded-lg border border-primary px-2 py-1 font-semibold text-primary"
              >
                {domain}
              </h3>
            ))}
          </div>
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
        <div className="sm:mb-6 px-1 text-lg text-justify">
          <b>
            Descripition : <br />
          </b>
          <p className="px-1">{opportunity?.description}</p>
        </div>
        <div className="flex flex-wrap justify-start items-center text-lg gap-4 my-5 sm:mt-0 px-1">
          <b>Skills</b>
          {opportunity?.skills?.map((skill, index) => (
            <h3
              key={index}
              className="text-md rounded-lg border border-primary px-2 py-1 font-semibold text-primary"
            >
              {skill}
            </h3>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => window.my_modal_2.showModal()}
            className="bg-primary text-white font-semibold px-4 py-3 rounded-lg w-full"
          >
            APPLY NOW
          </button>
          <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box bg-accent">
              <ConfirmationalModal opportunityId={opportunity._id} />
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

OpportunityLarge.propTypes = {
  opportunity: PropTypes.object.isRequired,
};

export default OpportunityLarge;
