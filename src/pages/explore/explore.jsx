// Imports
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Api
import api from "../../api/axios";

// Components
import OpportunitySmall from "../../components/opportunitySmall/opportunitySmall";
import Filter from "../../components/filter/filter";
import PostOpportunity from "../../components/postOpportunity/postOpportunity";

const Explore = () => {
  // States
  const [opportunityList, setOpportunityList] = useState([]);

  // Get Opportunity List
  const getOpportunityList = async () => {
    try {
      const response = await api.get("/opportunities/all/");
      // console.log(response.data);
      // toast.success("Opportunity List Fetched Successfully", {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
      setOpportunityList(response.data);
    } catch (err) {
      // console.log(err.message);
      // toast.err(err.message, {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
    }
  };

  useEffect(() => {
    getOpportunityList();
  }, []);

  // const opportunityList = [
  //   {
  //     id: 0,
  //     title: "Title for the research opportunity ",
  //     description:
  //       "We are a US-based software company that has been around for the past 7 years and provides software services for niche markets. Our company is already highly successful, profitable, and operating fast-paced in our development roadmap as we continue to gain market share. The company stability is extremely strong as we already have an established client base and sound financials. Currently, we have 6-7 members based in India and work exclusively remotely using platforms, such as Slack, GoogleMeet, and other technologies.",
  //     start_date: "2023-08-23",
  //     end_date: "2023-08-23",
  //     created_at: "2023-08-23T21:07:14.000Z",
  //     created_by: "Prof. Abhishek Bhosale",
  //     opportunity_type: "string",
  //     domains: [
  //       {
  //         id: 0,
  //         name: "Domain1",
  //       },
  //       {
  //         id: 1,
  //         name: "Domain2",
  //       },

  //       {
  //         id: 0,
  //         name: "Domain1",
  //       },
  //     ],
  //     skills: [
  //       {
  //         id: 0,
  //         name: "skill no 1 ",
  //       },
  //       {
  //         id: 1,
  //         name: "skill no 2",
  //       },
  //       {
  //         id: 2,
  //         name: "skill no 3",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="flex flex-col lg:flex-row h-[90vh] max-w-7xl mx-auto lg:gap-10 gap-0 lg:pt-10 py-0">
      <div className="lg:w-3/12 flex flex-col gap-10">
        {/* <Filter /> */}
        <PostOpportunity />
      </div>
      <div className="lg:w-8/12 overflow-y-auto scrollbar-none flex flex-col gap-7 lg:py-0 py-7">
        {opportunityList.map((opportunity) => (
          <OpportunitySmall key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
export default Explore;
