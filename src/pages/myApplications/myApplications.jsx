import Navbar from "../../components/navbar/navbar";
import Application from "../../components/applications/applications";

const MyApplications = () => {
  return (
    <div className="flex flex-col h-[90vh] items-center">
      <h2 className="flex text-3xl">My Applications</h2>
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
