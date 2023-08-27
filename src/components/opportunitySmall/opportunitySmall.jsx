import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const OpportunitySmall = ({ opportunity }) => {
  // const opportunity = {
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
    <div className="p-6 border-2 border-secondary rounded-lg shadow-md bg-accent flex flex-col mx-4">
      <div className="flex justify-between sm:flex-row flex-col">
        <h2 className="text-2xl font-semibold">{opportunity.title}</h2>
        <div className="flex gap-4 mt-5 sm:mt-0">
          {opportunity.domains.map((domain) => (
            <h3
              key={domain.id}
              className="text-md rounded-lg border border-primary px-2 py-1 font-semibold text-primary"
            >
              {domain.name}
            </h3>
          ))}
        </div>
      </div>
      <div className="px-2">
        <div className="text-lg my-5 flex flex-wrap justify-between gap-2 items-start">
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
      </div>
      <Link to={`/opportunity-detail/${opportunity.id}`}>
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
