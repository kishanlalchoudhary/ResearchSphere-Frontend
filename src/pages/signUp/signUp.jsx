import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import pageImage from "../../assets/signUp/signUp.png";

function SignUp() {
  //navigation links
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  const handleLoginClick = () => {
    navigate("../sign-in");
  };
  const handleEmailClick = () => {
    navigate("../email-verification-pending");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Column ------------------------------------------------------------------------------------------------*/}

      <div className="flex flex-col lg:h-[100vh] w-full lg:w-2/5 bg-secondary px-10 lg:pl-20 ">
        {/* topbar */}
        <div className="h-[10vh] flex items-center justify-between lg:justify-start w-full">
          <img src={Logo} style={{ width: "50px" }} alt="Logo" />
          <a
            onClick={handleHomeClick}
            className="btn btn-ghost normal-case text-3xl text-left text-primary ml-2"
          >
            ResearchSphere
          </a>
        </div>

        <div className="lg:p-8 h-[60vh] hidden lg:flex lg:flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Already a member ?</h1>
          <div className="p-4 lg:p-5 ">
            <button
              onClick={handleLoginClick}
              className="btn btn-primary text-accent h-12 lg:h-12 text-2xl px-10 lg:px-10"
            >
              LOGIN
            </button>
          </div>
        </div>

        {/* back home button  */}
        {/* <div className="absolute bottom-20 right-16 p-4 hidden  lg:flex lg:p-2 ">
                    <button onClick ={handleHomeClick} className="btn btn-primary btn-outline text-accent h-14 lg:h-16 text-xl">Back to HomePage</button>
                </div> */}

        {/* absolute image at bottom */}
        <div className="absolute lg:left-96 lg:bottom-0 hidden lg:flex  ">
          <img src={pageImage} className="max-w-xs rounded-lg" />
        </div>
      </div>

      {/* Right Column -----------------------------------------------------------------------------------------------*/}
      <div className="flex flex-col lg:flex-col w-full lg:w-3/5 bg-accent px-5 lg:pl-16 justify-center items-center">
        {/* signUp section */}
        <div className="lg:h-[100vh] flex flex-col justify-center items-center w-full">
          <div className="card min-w-full lg:min-w-fit">
            <div className="card-body shadow-2xl bg-accent rounded-lg">
              <h1 className="lg:text-3xl text-2xl text-center lg:px-24  font-bold text-primary">
                Create Your Account
              </h1>
              <hr className="border-t-2  w-2/3 mx-auto my-4 lg:my-2" />
              <div className="form-control lg:px-5">
                <label className="label">
                  <span className="label-text text-xl">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered bg-accent border-primary h-12 lg:h-12"
                />
              </div>
              <div className="form-control lg:px-5">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered bg-accent border-primary h-12 lg:h-12"
                />
              </div>
              <div className="form-control lg:px-5">
                <label className="label">
                  <span className="label-text text-xl">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered bg-accent border-primary h-12 lg:h-12"
                />
              </div>
              <div className="form-control lg:px-5">
                <label className="label">
                  <span className="label-text text-xl">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered bg-accent border-primary h-12 lg:h-12"
                />
              </div>
              <div className="form-control items-center px-10 mt-6">
                <button
                  onClick={handleEmailClick}
                  className="btn btn-primary text-accent h-12 w-full lg:h-16 text-2xl"
                >
                  REGISTER
                </button>
              </div>
              <div className="form-control lg:hidden items-center px-10">
                <button
                  onClick={handleLoginClick}
                  className="btn btn-primary btn-outline h-12 w-full lg:h-16 text-2xl"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
