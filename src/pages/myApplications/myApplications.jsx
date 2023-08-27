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
        <div className="flex flex-col h-[90vh] items-center px-6 lg:px-0">
            <h2 className="flex text-3xl my-4 mt-8">My Applications</h2>
            {applicationsData.map((application) => (
                <Application key={application.id} application={application} />
            ))}
        </div>
    );
};
export default MyApplications;
