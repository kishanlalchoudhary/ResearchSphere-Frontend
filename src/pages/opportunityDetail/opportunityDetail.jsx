// Imports
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Apis
import api from "../../api/axios";

// Components
import OpportunityLarge from "../../components/opportunityLarge/opportunityLarge";

const OpportunityDetail = () => {
  // Hooks
  const { opportunityId } = useParams();
  // console.log(opportunityId);

  // States
  const [opportunity, setOpportunity] = useState(null);

  // get Opportunity Details
  const getOpportunity = async () => {
    try {
      const response = await api.get(`/opportunities/all/${opportunityId}/`);
      // console.log(response.data);
      setOpportunity(response.data);
    } catch (err) {
      Object.keys(err.response.data).forEach((key) =>
        // console.log(
        // key[0].toUpperCase() +
        //   key.substring(1) +
        //   " : " +
        //   err.response.data[key]
        // )
        toast.error(
          key[0].toUpperCase() +
            key.substring(1) +
            " : " +
            err.response.data[key],
          {
            theme: "colored",
            closeOnClick: true,
            pauseOnHover: true,
          }
        )
      );
    }
  };

  useEffect(() => {
    getOpportunity();
  }, []);

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
    <div className="h-[90vh]">
      {opportunity && <OpportunityLarge opportunity={opportunity} />}
      <ToastContainer />
    </div>
  );
};

export default OpportunityDetail;
