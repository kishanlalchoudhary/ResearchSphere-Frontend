import Navbar from "../../components/navbar/navbar";
import Application from "../../components/applications/applications";

const MyApplications = () => {
  return (
    <div className="flex flex-col h-[90vh] items-center px-6 lg:px-0">
      <h2 className="flex text-3xl my-4 mt-8">My Applications</h2>
      <Application />
      <Application />
      <Application />
      <Application />
      <Application />
      <Application />
      <Application />
      <Application />
    </div>
  );
};
export default MyApplications;
