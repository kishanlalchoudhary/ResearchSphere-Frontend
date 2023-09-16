import { useEffect } from "react";
import Application from "../../components/applications/applications";
import api from "../../api/axios";
import { useState } from "react";

const MyApplications = () => {
  const [applicationsData, setApplicationsData] = useState([]);

  const getApplications = async () => {
    try {
      const response = await api.get("/myapplications/");
      console.log(response.data);
      setApplicationsData(response.data);
    } catch (err) {
      console.log(err);
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
      <div className="mb-2 w-full sm:w-5/6 lg:w-4/6 ">
        {applicationsData.map((application) => (
          <Application key={application.id} application={application} />
        ))}
      </div>
    </div>
  );
};
export default MyApplications;
