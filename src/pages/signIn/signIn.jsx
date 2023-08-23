import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import pageImage from "../../assets/signIn/signIn.png";

function SignIn() {
  // Hooks
  const navigate = useNavigate();

  // States
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleHomeClick = () => {
    navigate("/");
  };
  const handleRegisterClick = () => {
    navigate("../sign-up");
  };
  // const handleEmailClick = () => {                  -----> remove this code after the login function starts
  //     navigate('../email-verification-pending');
  // };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      newEmail
    );
    setEmailIsValid(isValid);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    const isValid = newPassword.length >= 8;
    setPasswordIsValid(isValid);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    // try {
    // const response = await axios.post('', {       //  -----> remove this code after the login function starts
    //     email,
    //     password
    // });

    // if (response.data.token) {

    //     // yaha storing the token in localStorage ka code add kar dena
    //     navigate('../explore');                //  -----> add the position to send after sucessful login
    // } else {
    //     console.log('Login failed');
    // }
    // } catch (error) {
    //      console.error('An error occurred', error);
    // }
    console.log(email, password);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Column ------------------------------------------------------------------------------------------------*/}

      <div className="flex flex-col lg:flex-col h-[100dvh] w-full lg:w-3/5 bg-secondary px-5 lg:pl-20 justify-center items-center">
        {/* topbar */}
        <div className="h-[10vh] flex items-center justify-center lg:justify-start w-full">
          <img src={Logo} style={{ width: "50px" }} alt="Logo" />
          <a
            onClick={handleHomeClick}
            className="btn btn-ghost normal-case text-3xl lg:text-2x text-left text-primary ml-2"
          >
            ResearchSphere
          </a>
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

              {/* email input form with validator */}
              <div className="form-control lg:px-5">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
                </label>
                <input
                  type="email"
                //   placeholder="Email"
                  className={`input input-bordered bg-accent border-primary h-12 ${
                    emailIsValid ? "" : "border-red-500"
                  }`}
                  value={email}
                  onChange={handleEmailChange}
                  
                />
                {!emailIsValid && (
                  <p className="text-red-500 mt-1">
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              {/* password input form with validator */}
              <div className="form-control lg:px-5">
                <label className="label">
                  <span className="label-text text-xl">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                //   placeholder="Password"
                  className={`input input-bordered bg-accent border-primary h-12 ${
                    passwordIsValid ? "" : "border-red-500"
                  }`}
                  value={password}
                  onChange={handlePasswordChange}
                />
                {/* <div className="relative">
                  <button
                    type="button"
                    className="absolute right-2 text-gray-600"
                    onClick={toggleShowPassword}
                    style={{ zIndex: 1 }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div> */}
                {!passwordIsValid && (
                  <p className="text-red-500 mt-1">
                    Password must length minimun 8
                  </p>
                )}
                <div className="flex justify-end">
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt lg:text-xl text-sm link link-hover py-2 pt-2"
                    >
                      <u>Forgot password?</u>
                    </a>
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
                <Link to="../sign-up">Don't have an account ? <u>Register</u></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column -----------------------------------------------------------------------------------------------*/}
      <div className="w-full lg:w-2/5 hidden  lg:flex bg-accent px-20 justify-center items-center">
        <div className="h-[40vh] lg:p-8">
          <h1 className="text-3xl font-bold">New to the Platform ?</h1>
          <div className="p-4 lg:p-5 flex items-center justify-center">
            <button
              onClick={handleRegisterClick}
              className="btn btn-primary text-accent btn-md w-full lg:w-fit lg:px-16 text-xl"
            >
              REGISTER
            </button>
          </div>
        </div>
        <div className="absolute bottom-20 right-16 p-4 hidden  lg:flex lg:p-2 ">
          <button
            onClick={handleHomeClick}
            className="btn border-primary btn-accent text-primary hover:text-accent hover:btn-primary h-12 text-xl"
          >
            Back to HomePage
          </button>
        </div>
        <div className="absolute lg:right-80 lg:bottom-0 hidden lg:flex  ">
          <img src={pageImage} className="lg:max-w-sm min-w-xs rounded-lg" />
        </div>
      </div>
    </div>
  );
}
export default SignIn;
