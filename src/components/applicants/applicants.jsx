// Imports
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Api
import api from "../../api/axios";
import { Link } from "react-router-dom";

const Applicants = ({ postId }) => {
  // States
  const [applicationList, setApplicationList] = useState([]);

  // Get Application List
  const getApplicationList = async () => {
    try {
      const response = await api.get(
        `/opportunities/me/${postId}/applications`
      );
      // console.log(response.data);
      // toast.success("Application List Fetched Successfully", {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
      setApplicationList(response.data);
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
    getApplicationList();
  }, []);

  // dummy request
  // const applicationList = [
  //   {
  //     id: 2,
  //     status: "Pending",
  //     opportunity_title: "Hack For Good",
  //     applicant: {
  //       id: 1,
  //       email: "kisanchoudhary000@gmail.com",
  //       name: "Kishanlal Choudhary",
  //     },
  //     created_at: "2023-09-15T11:21:00.734842Z",
  //     opportunity: 1,
  //   },
  //   {
  //     id: 2,
  //     status: "Accepted",
  //     opportunity_title: "Hack For Good",
  //     applicant: {
  //       id: 1,
  //       email: "kisanchoudhary000@gmail.com",
  //       name: "Kishanlal Choudhary",
  //     },
  //     created_at: "2023-09-15T11:21:00.734842Z",
  //     opportunity: 1,
  //   },
  //   {
  //     id: 2,
  //     status: "Rejected",
  //     opportunity_title: "Hack For Good",
  //     applicant: {
  //       id: 1,
  //       email: "kisanchoudhary000@gmail.com",
  //       name: "Kishanlal Choudhary",
  //     },
  //     created_at: "2023-09-15T11:21:00.734842Z",
  //     opportunity: 1,
  //   },
  // ];

  // Accept application Handler
  const handleAccept = async (applicationId) => {
    try {
      const response = await api.post(
        `/opportunities/me/applications/${applicationId}/accept`
      );
      // console.log(response.data);
      toast.success("Application Accepted Successfully", {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
      getApplicationList();
    } catch (err) {
      console.log(err);
    }
  };

  // Accept application Handler
  const handleReject = async (applicationId) => {
    try {
      const response = await api.post(
        `/opportunities/me/applications/${applicationId}/reject`
      );
      // console.log(response.data);
      toast.success("Application Rejected Successfully", {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
      getApplicationList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col w-full gap-6 sm:gap-4">
      <h2 className="text-2xl text-center font-bold my-6 sm:my-4 mb-0 sm:mb-4">
        Applicants
      </h2>
      {applicationList.map((application) => (
        <div
          key={application.id}
          className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-between"
        >
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 w-full">
            <div className="font-semibold">
              <Link
                to={`/profile-details/${application.applicant.id}`}
                className="text-primary underline"
              >
                {application.applicant.name}
              </Link>
            </div>
            <div className="font-semibold">{application.applicant.email}</div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            {application.status !== "Pending" ? (
              <div className="bg-slate-300 border border-slate-600 w-full sm:w-[170px] text-center font-semibold px-4 py-1 rounded-md">
                {application.status}
              </div>
            ) : (
              <>
                <button
                  className="flex w-1/2 justify-center bg-green-400 hover:bg-green-500 text-white border border-green-600 font-semibold px-4 py-1 rounded-md"
                  onClick={() => handleAccept(application.id)}
                >
                  Accept
                </button>
                <button
                  className="flex w-1/2 justify-center bg-red-400 hover:bg-red-500 text-white border border-red-600 font-semibold px-4 py-1 rounded-md"
                  onClick={() => handleReject(application.id)}
                >
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

Applicants.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default Applicants;
