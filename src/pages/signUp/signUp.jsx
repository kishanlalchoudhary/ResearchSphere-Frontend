// Imports
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

// Assets
import Logo from "../../assets/logo.png";
import pageImage from "../../assets/signUp/signUp.png";

// Apis
import api from "../../api/axios";

const SignUp = () => {
  // Hooks
  const navigate = useNavigate();

  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Register handling
  const handleEmailClick = async (e) => {
    e.preventDefault();
    if (confirmPassword == password) {
      try {
        const request = {
          name,
          email,
          password,
        };
        await api.post("/auth/users/", request);
        navigate("/sign-in");
        // navigate("../email-verification-pending");
      } catch (err) {
        Object.values(err.response.data).forEach((value) =>
          // console.log(value[0])
          toast.error(value[0], {
            theme: "colored",
            closeOnClick: true,
            pauseOnHover: true,
          })
        );
      }
    } else {
      toast.error("Passwords Don't Match", {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row max-h-screen">
      {/* Left Column */}

      <div className="flex flex-col lg:h-[100vh] w-full lg:w-2/5 bg-secondary px-10 lg:pl-20 ">
        {/* topbar */}
        <div className="h-[10vh] flex items-center justify-center lg:justify-start w-full">
          <img src={Logo} style={{ width: "50px" }} alt="Logo" />
          <Link
            to="/"
            className="btn btn-ghost normal-case text-3xl lg:text-2x text-left text-primary ml-2"
          >
            ResearchSphere
          </Link>
        </div>

        <div className="lg:p-8 h-[60vh] hidden lg:flex lg:flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Already a member ?</h1>
          <div className="p-4 lg:p-5 ">
            <Link to="/sign-in">
              <button className="btn btn-primary text-accent h-12 lg:h-12 text-2xl px-10 lg:px-20">
                LOGIN
              </button>
            </Link>
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
      <div className="flex flex-col lg:flex-col w-full lg:w-3/5 bg-secondary lg:bg-accent px-5 lg:pl-16 justify-center items-center">
        {/* signUp section */}
        <div className="lg:h-[90vh] flex flex-col justify-center items-center w-full">
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
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered bg-accent border-primary h-12 lg:h-12"
                />
              </div>
              <div className="form-control lg:px-5">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered bg-accent border-primary h-12 lg:h-12"
                />
              </div>
              <div className="form-control lg:px-5">
                <label className="label">
                  <span className="label-text text-xl">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered bg-accent border-primary h-12 lg:h-12"
                />
              </div>
              <div className="form-control lg:px-5">
                <label className="label">
                  <span className="label-text text-xl">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input input-bordered bg-accent border-primary h-12 lg:h-12"
                />
              </div>
              <div className="form-control items-center mt-6 mb-2">
                <button
                  onClick={handleEmailClick}
                  className="btn btn-primary text-accent btn-md w-full lg:w-fit lg:px-20 text-xl"
                >
                  REGISTER
                </button>
              </div>
              <div className="form-control lg:hidden items-center mt-2">
                <Link to="../sign-in">
                  Already a member ? <u>SignIn</u>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};
export default SignUp;
