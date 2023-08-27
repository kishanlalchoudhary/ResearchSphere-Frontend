// Imports
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";

// Assets
import Logo from "../../assets/logo.png";
import pageImage from "../../assets/signIn/signIn.png";

// Apis
import axios from "axios";

const SignIn = () => {
  // Hooks
  const navigate = useNavigate();

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const request = {
        email,
        password,
      };
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/auth/token/login/`,
        request
      );
      const token = response.data.auth_token;
      Cookies.set("token", token);
      navigate("/explore");
      window.location.reload();
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
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Column */}
      <div className="flex flex-col lg:flex-col h-[100dvh] w-full lg:w-3/5 bg-secondary px-5 lg:pl-20 justify-center items-center">
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

        {/* signin section */}
        <div className="h-[90vh] flex flex-col lg:justify-center py-16 items-center w-full">
          <div className="card w-full lg:w-fit ">
            <div className="card-body shadow-2xl bg-accent rounded-lg lg:py-16">
              <h1 className="text-3xl text-center hidden lg:flex lg:px-24  font-bold text-primary">
                Sign In to Your Account
              </h1>
              <h1 className="text-3xl text-center lg:hidden lg:px-24  font-bold text-primary">
                Sign In
              </h1>
              <hr className="border-t-2  w-2/3 mx-auto my-4 " />
              <div className="form-control lg:px-5">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={`input input-bordered bg-accent border-primary h-12`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control lg:px-5">
                <label className="label">
                  <span className="label-text text-xl">Password</span>
                </label>
                <input
                  type={"password"}
                  className={`input input-bordered bg-accent border-primary h-12`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-end">
                  <label className="label">
                    <Link
                      to="#"
                      className="label-text-alt lg:text-xl text-sm link link-hover py-2 pt-2"
                    >
                      <u>Forgot password?</u>
                    </Link>
                  </label>
                </div>
              </div>

              <div className="form-control items-center">
                <button
                  onClick={handleLogin}
                  className="btn btn-primary text-accent btn-md w-full lg:w-fit lg:px-20 text-xl"
                >
                  Login
                </button>
              </div>

              <div className="form-control lg:hidden items-center mt-3">
                <Link to="../sign-up">
                  Don&apos;t have an account ? <u>Register</u>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-2/5 hidden  lg:flex bg-accent px-20 justify-center items-center">
        <div className="h-[40vh] lg:p-8">
          <h1 className="text-3xl font-bold">New to the Platform ?</h1>
          <div className="p-4 lg:p-5 flex items-center justify-center">
            <Link to="/sign-up">
              <button className="btn btn-primary text-accent btn-md w-full lg:w-fit lg:px-16 text-xl">
                REGISTER
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-20 right-16 p-4 hidden  lg:flex lg:p-2 ">
          <Link to="/">
            <button className="btn border-primary btn-accent text-primary hover:text-accent hover:btn-primary h-12 text-xl">
              Back to HomePage
            </button>
          </Link>
        </div>
        <div className="absolute lg:right-80 lg:bottom-0 hidden lg:flex  ">
          <img src={pageImage} className="lg:max-w-sm min-w-xs rounded-lg" />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};
export default SignIn;
