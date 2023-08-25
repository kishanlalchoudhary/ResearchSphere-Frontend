import { Link } from "react-router-dom";

const OpportunitySmall = () => {
  const result = {
    id: 0,
    title: "Title for the research opportunity ",
    description:
      "We are a US-based software company that has been around for the past 7 years and provides software services for niche markets. Our company is already highly successful, profitable, and operating fast-paced in our development roadmap as we continue to gain market share. The company stability is extremely strong as we already have an established client base and sound financials. Currently, we have 6-7 members based in India and work exclusively remotely using platforms, such as Slack, GoogleMeet, and other technologies.",
    start_date: "2023-08-23",
    end_date: "2023-08-23",
    created_at: "2023-08-23T21:07:14.000Z",
    created_by: "string",
    opportunity_type: "string",
    domains: [
      {
        id: 0,
        name: "Domain1",
      },
      {
        id: 1,
        name: "Domain2",
      },

      {
        id: 0,
        name: "Domain1",
      },
    ],
    skills: [
      {
        id: 0,
        name: "string",
      },
    ],
  };

  return (
    <div className="p-6 border-2 border-secondary rounded-lg shadow-md bg-accent flex flex-col">
      <h2 className="text-2xl font-semibold w-full">{result.title}</h2>
      <div className="flex flex-wrap mt-1 py-3">
        {result.domains.map((domain, index) => (
          <h3
            key={index}
            className="text-xl rounded-lg border border-primary px-1 font-semibold my-1 mx-1 text-primary w-fit"
          >
            {domain.name}
          </h3>
        ))}
      </div>
      <div className="px-2">
        <p className="text-lg mt-2 flex justify-between items-center">
          <div>
            <b>Start Date: </b>
            {result.start_date}
          </div>
          <div>
            <b>End Date: </b>
            {result.end_date}
          </div>
          <div className="hidden lg:flex">
            <p>
              {" "}
              <b>Created by: </b>
              {result.created_by}
            </p>
          </div>
        </p>
        <p className="lg:hidden text-lg">
          <b>Created by: </b>
          {result.created_by}
        </p>
      </div>
      <Link to="/opportunity-detail" className="min-w-full">
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg w-full">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default OpportunitySmall;
