import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api/axios";
import Application from "../../components/applications/applications";

const MyApplications = () => {
  const [applicationsData, setApplicationsData] = useState([]);

  const getApplications = async () => {
    try {
      const response = await api.get("/applications/my");
      setApplicationsData(response.data?.data?.applications);
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

  const handleWithdraw = async (app_id) => {
    try {
      const response = await api.delete(`/applications/my/${app_id}/withdraw`);
      toast.success(response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
      getApplications();
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
    getApplications();
  }, []);

  return (
    <div className="flex flex-col items-center px-6 lg:px-0 pt-2 pb-6">
      <h2 className="flex text-4xl font-bold text-primary my-4">
        My Applications
      </h2>
      <div className="mb-2 w-full sm:w-5/6 lg:w-3/6 ">
        {applicationsData?.map((application) => (
          <Application
            key={application._id}
            application={application}
            handleWithdraw={handleWithdraw}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
export default MyApplications;
