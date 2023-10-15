// Imports
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import ConfirmationalModal from "../confirmationalModal/confirmationalModal";

const OpportunityLarge = ({ opportunity }) => {
  // console.log(opportunity);
  // opportunity = {
  //   id: 0,
  //   title: "Title for the research opportunity ",
  //   description:
  //     "We are a US-based software company that has been around for the past 7 years and provides software services for niche markets. Our company is already highly successful, profitable, and operating fast-paced in our development roadmap as we continue to gain market share. The company stability is extremely strong as we already have an established client base and sound financials. Currently, we have 6-7 members based in India and work exclusively remotely using platforms, such as Slack, GoogleMeet, and other technologies.",
  //   start_date: "2023-08-23",
  //   end_date: "2023-08-23",
  //   created_at: "2023-08-23T21:07:14.000Z",
  //   created_by: "Prof. Abhishek Bhosale",
  //   opportunity_type: "string",
  //   domains: [
  //     {
  //       id: 0,
  //       name: "Domain1",
  //     },
  //     {
  //       id: 1,
  //       name: "Domain2",
  //     },

  //     {
  //       id: 0,
  //       name: "Domain1",
  //     },
  //     {
  //       id: 1,
  //       name: "Domain2",
  //     },
  //   ],
  //   skills: [
  //     {
  //       id: 0,
  //       name: "skill no 1 ",
  //     },
  //     {
  //       id: 1,
  //       name: "skill no 2",
  //     },
  //     {
  //       id: 2,
  //       name: "skill no 3",
  //     },
  //   ],
  // };

  return (
    <div className="lg:flex lg:items-center lg:justify-center ">
      <div className="my-10 mx-5 p-4 lg:p-6 border border-secondary rounded-lg shadow-md bg-accent flex flex-col w-6/6 lg:w-3/6 ">
        <div className="flex justify-between sm:flex-row flex-col">
          <h2 className="text-2xl font-semibold">{opportunity.title}</h2>
          <div className="flex gap-4 mt-5 sm:mt-0">
            {opportunity.domains?.map((domain, index) => (
              <h3
                key={index}
                className="text-md rounded-lg border border-primary px-2 py-1 font-semibold text-primary"
              >
                {domain.name}
              </h3>
            ))}
          </div>
        </div>

        <div className="px-1">
          <div className="text-lg my-5 flex flex-wrap justify-between gap-2 items-start">
            <div>
              <b>Start Date :&nbsp;</b>
              {opportunity.start_date}
            </div>
            <div>
              <b>End Date :&nbsp;</b>
              {opportunity.end_date}
            </div>
            <div className="flex">
              <b>Created by :&nbsp;</b>
              <Link to={`/profile-details/${opportunity.created_by_id}`}>
                <p className="underline text-primary">
                  {opportunity.created_by}
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="sm:mb-6 px-1 text-lg text-justify">
          <b>
            Descripition : <br />
          </b>
          <p className="px-1">{opportunity.description}</p>
        </div>

        <div className="flex flex-wrap justify-start items-center text-lg gap-4 my-5 sm:mt-0 px-1">
          <b>Skills</b>
          {opportunity.skills?.map((skill, index) => (
            <h3
              key={index}
              className="text-md rounded-lg border border-primary px-2 py-1 font-semibold text-primary"
            >
              {skill.name}
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
              <ConfirmationalModal opportunityId={opportunity.id} />
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
