import ConfirmationalModal from "../confirmationalModal/confirmationalModal";
import PropTypes from "prop-types";

const OpportunityLarge = ({ opportunity }) => {
  console.log(opportunity);
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
    <div className="lg:flex lg:items-center lg:justify-center">
      <div className="lg:m-10 m-4 p-4 lg:p-6 border border-secondary rounded-lg shadow-md bg-accent flex flex-col lg:max-w-5xl">
        <h2 className="text-2xl font-semibold w-full">{opportunity.title}</h2>
        <div className="flex flex-wrap mt-1 py-3">
          {opportunity.domains?.map((domain, index) => (
            <h3
              key={index}
              className="text-xl rounded-lg border border-primary px-1 font-semibold my-1 mx-1 text-primary w-fit"
            >
              {domain.name}
            </h3>
          ))}
        </div>
        <div className="mx-2">
          <div className="text-lg mt-2 flex flex-col justify-between items-center">
            <div>
              <b>Start Date : </b>
              {opportunity.start_date}
            </div>
            <div>
              <b>End Date : </b>
              {opportunity.end_date}
            </div>
            <div>
              <b>Created by : </b>
              {opportunity.created_by}
            </div>
          </div>
          {/* <div className="text-lg">
            <b>Created by : </b>
            {opportunity.created_by}
          </div> */}
          <p className="mt-10 px-1 text-lg text-justify">
            <b>
              Descripition : <br />
            </b>
            <p className="px-1">{opportunity.description}</p>
          </p>
          <p className="mt-3 px-1 text-lg text-justify">
            <b>
              Skills : <br />
            </b>
            <div className="flex flex-col px-">
              {opportunity.skills?.map((skill, index) => (
                <h3 key={index} className="text-xl w-fit">
                  {skill.name}
                </h3>
              ))}
            </div>
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => window.my_modal_2.showModal()}
            className="mt-4 bg-primary text-white px-4 py-2 w-full rounded-lg max-w-sm "
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
