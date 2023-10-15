// Imports
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Api
import api from "../../api/axios";

// Components
import Applicants from "../../components/applicants/applicants";

const PostApplicants = () => {
  // Hooks
  const { postId } = useParams();
  // console.log(postId);

  // States
  const [opportunity, setOpportunity] = useState({});

  // Get Opportunity List
  const getOpportunity = async () => {
    try {
      const response = await api.get(`/opportunities/all/${postId}/`);
      // console.log(response.data);
      // toast.success("Opportunity Fetched Successfully", {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
      setOpportunity(response.data);
    } catch (err) {
      // console.log(err.message);
      toast.err(err.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  useEffect(() => {
    getOpportunity();
  }, []);

  // dummy request
  // const opportunity = {
  //   id: 0,
  //   title: "Title for the research opportunity ",
  //   description: "string",
  //   start_date: "2023-08-25",
  //   end_date: "2023-08-25",
  //   created_at: "2023-08-25T18:13:53.234Z",
  //   created_by: "string",
  //   opportunity_type: "string",
  //   domains: [
  //     {
  //       id: 0,
  //       name: "string",
  //     },
  //   ],
  //   skills: [
  //     {
  //       id: 0,
  //       name: "string",
  //     },
  //   ],
  // };

  // Formating Date into Required Formate
  const parsedDate = new Date(
    opportunity.created_at ? opportunity.created_at : "2023-08-25T18:13:53.234Z"
  );
  const formattedDate = format(parsedDate, "yyyy-MM-dd");

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
              <b>Start Date : </b>
              {opportunity.start_date}
            </div>
            <div>
              <b>End Date : </b>
              {opportunity.end_date}
            </div>
            <div>
              <b>Created at : </b>
              {formattedDate}
            </div>
          </div>
        </div>

        <div className="sm:mb-6 px-1 text-lg text-justify">
          <b>
            Descripition : <br />
          </b>
          <p className="px-1">{opportunity.description}</p>
        </div>

        <div className="flex flex-wrap justify-start items-center text-lg gap-4 mt-5 sm:mt-0 px-1">
          <b>Skills : </b>
          {opportunity.skills?.map((skill, index) => (
            <h3
              key={index}
              className="text-md rounded-lg border border-primary px-2 py-1 font-semibold text-primary"
            >
              {skill.name}
            </h3>
          ))}
        </div>

        <div className="flex justify-center items-center w-full">
          <Applicants postId={postId} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PostApplicants;
