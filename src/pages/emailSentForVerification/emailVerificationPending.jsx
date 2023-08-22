import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

import pageImage from "../../assets/emailVerificationPending/emailVerificationPending.png";
const EmailVerificationPending = () => {
  // Hooks
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Column ------------------------------------------------------------------------------------------------*/}
      <div className="w-full lg:w-1/3 bg-secondary px-5 lg:pl-16">
        {/* topbar */}
        <div className="py-5 flex items-center justify-between lg:justify-start">
          <img src={Logo} style={{ width: "50px" }} alt="Logo" />
          <a
            onClick={handleHomeClick}
            className="btn btn-ghost normal-case text-3xl text-left text-primary ml-2"
          >
            ResearchSphere
          </a>
        </div>
      </div>

      {/* Right Column -----------------------------------------------------------------------------------------------*/}
      <div className="w-full lg:w-2/3  bg-accent lg:px-20 px-10">
        <div className="pt-10 lg:pt-20">
          <div className="lg:p-12">
            <h1 className="lg:text-5xl text-3xl font-bold">
              A Email verification link has been sent to you email ID{" "}
            </h1>
            <h1 className="lg:text-3xl text-xl font-bold pt-5">
              Please open the link to activate the account
            </h1>
            <div className="absolute bottom-20 right-16 p-4 hidden  lg:flex lg:p-2 ">
              <button
                onClick={handleHomeClick}
                className="btn btn-primary btn-outline text-accent h-14 lg:h-16 text-xl"
              >
                Back to HomePage
              </button>
            </div>
            <div className="absolute lg:left-60 lg:bottom-0 hidden lg:flex  ">
              <img
                src={pageImage}
                className="lg:max-w-sm min-w-xs rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmailVerificationPending;
