// Imports
import { Link } from "react-router-dom";

// Assets
import Img from "../../assets/appliedModal/appliedModal.png";

const AppliedModal = () => {
  return (
    <div className="my-6 bg-accent flex flex-col justify-center items-center ">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
      <div className="flex lg:flex-row flex-col-reverse items-center">
        <h2 className="px-5 text-2xl font-semibold  text-center lg:text-start">
          <span className="text-success">Congratulations</span> you have
          successfully applied for the opportunity
        </h2>
        <img src={Img} className="max-w-xs w-48 mb-6" />
      </div>
      <p className="text-sm pl-2 mt-6 text-justify">
        We have forwarded your application to them, you can check the status
        on&nbsp;
        <Link to="/my-applications">
          <u className="text-primary">My Application</u>
        </Link>{" "}
        page.
      </p>
    </div>
  );
};

export default AppliedModal;
