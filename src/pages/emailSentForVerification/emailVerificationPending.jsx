// Imports
import { Link } from "react-router-dom";

// Assets
import Logo from "../../assets/logo.png";
import pageImage from "../../assets/emailVerificationPending/emailVerificationPending.png";

const EmailVerificationPending = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/3 bg-secondary px-5 lg:pl-16">
        <div className="py-5 flex items-center justify-center lg:justify-start">
          <img
            src={Logo}
            className="w-[50px]"
            style={{ width: "50px" }}
            alt="Logo"
          />
          <Link
            to="/"
            className="btn btn-ghost normal-case text-3xl text-left text-primary ml-2"
          >
            ResearchSphere
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-2/3  bg-accent lg:px-20 px-10">
        <div className="pt-10 lg:pt-20">
          <div className="lg:p-12 text-center lg:text-left">
            <h1 className="lg:text-4xl text-2xl font-bold">
              A Email verification link has been sent to you email ID{" "}
            </h1>
            <h1 className="lg:text-2xl text-xl font-bold py-5">
              Please open the link to activate the account
            </h1>
            <div className="absolute bottom-20 right-16 p-4 hidden  lg:flex lg:p-2 ">
              <Link to="/">
                <button className="btn border-primary btn-accent text-primary hover:text-accent hover:btn-primary h-12 text-xl">
                  Back to HomePage
                </button>
              </Link>
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
