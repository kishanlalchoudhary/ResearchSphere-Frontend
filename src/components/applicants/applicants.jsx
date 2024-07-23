import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api/axios";
import { Link } from "react-router-dom";

const Applicants = ({ postId }) => {
  const [applicationList, setApplicationList] = useState([]);

  const getApplicationList = async () => {
    try {
      const response = await api.get(
        `/opportunities/my/${postId}/applications`
      );
      setApplicationList(response.data?.data?.applications);
      // toast.success(response.data?.message, {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
    } catch (err) {
      console.log(err);
      toast.error(err.response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  useEffect(() => {
    getApplicationList();
  }, []);

  const handleAccept = async (applicationId) => {
    try {
      const response = await api.put(
        `/opportunities/my/applications/${applicationId}/accept`
      );
      getApplicationList();
      toast.success(response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    } catch (err) {
      console.log(err);
      toast.error(err.response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  const handleReject = async (applicationId) => {
    try {
      const response = await api.put(
        `/opportunities/my/applications/${applicationId}/reject`
      );
      getApplicationList();
      toast.success(response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    } catch (err) {
      console.log(err);
      toast.error(err.response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div className="flex flex-col w-full gap-6 sm:gap-4">
      <h2 className="text-2xl text-center font-bold mt-6 mb-0 sm:mb-4">
        Applications
      </h2>
      {applicationList.map((application) => (
        <div
          key={application?._id}
          className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-between"
        >
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 w-full">
            <div className="font-semibold">
              Name :&nbsp;
              <Link
                to={`/profile-details/${application?.user?._id}`}
                className="text-primary underline"
              >
                {application?.user?.name}
              </Link>
            </div>
            <div className="font-semibold">{application?.user?.email}</div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            {application.status !== "Pending" ? (
              <div className="bg-slate-300 border border-slate-600 w-full sm:w-[170px] text-center font-semibold px-4 py-1 rounded-md">
                {application?.status}
              </div>
            ) : (
              <>
                <button
                  className="flex w-1/2 justify-center bg-green-400 hover:bg-green-500 text-white border border-green-600 font-semibold px-4 py-1 rounded-md"
                  onClick={() => handleAccept(application?._id)}
                >
                  Accept
                </button>
                <button
                  className="flex w-1/2 justify-center bg-red-400 hover:bg-red-500 text-white border border-red-600 font-semibold px-4 py-1 rounded-md"
                  onClick={() => handleReject(application?._id)}
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
