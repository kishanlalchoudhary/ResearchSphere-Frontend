import moment from "moment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api/axios";
import Applicants from "../../components/applicants/applicants";

const PostApplicants = () => {
  const { postId } = useParams();
  const [opportunity, setOpportunity] = useState({});

  const getOpportunity = async () => {
    try {
      const response = await api.get(`/opportunities/all/${postId}`);
      setOpportunity(response.data?.data?.opportunity);
      // toast.success(response.data.message, {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
    } catch (err) {
      console.error(err);
      toast.err(err.response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  useEffect(() => {
    getOpportunity();
  }, []);

  return (
    <div className="lg:flex lg:items-center lg:justify-center ">
      <div className="my-10 mx-5 p-4 lg:p-6 border border-secondary rounded-lg shadow-md bg-accent flex flex-col w-6/6 lg:w-3/6 ">
        <div className="flex justify-between sm:flex-row flex-col">
          <h2 className="text-2xl font-semibold">{opportunity?.title}</h2>
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
        </div>
        <div className="px-1">
          <div className="text-lg my-5 flex flex-wrap justify-between gap-2 items-start">
            <div>
              <b>Start Date : </b>
              {moment(opportunity?.startDate).format("DD/MM/YYYY")}
            </div>
            <div>
              <b>End Date : </b>
              {moment(opportunity?.endDate).format("DD/MM/YYYY")}
            </div>
            <div>
              <b>Created On : </b>
              {moment(opportunity?.createdAt).format("DD/MM/YYYY")}
            </div>
          </div>
        </div>
        <div className="sm:mb-6 px-1 text-lg text-justify">
          <b>
            Descripition : <br />
          </b>
          <p className="px-1">{opportunity?.description}</p>
        </div>
        <div className="flex flex-wrap justify-start items-center text-lg gap-4 mt-5 sm:mt-0 px-1">
          <b>Skills : </b>
          {opportunity?.skills?.map((skill, index) => (
            <h3
              key={index}
              className="text-md rounded-lg border border-primary px-2 py-1 font-semibold text-primary"
            >
              {skill}
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
