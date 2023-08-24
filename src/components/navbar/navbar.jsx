import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  // States
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/sign-in");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 drop-shadow-md px-5 py-0 border-b-1">
      <div className="navbar-start">
        <details className="dropdown">
          <summary tabIndex={0} className="btn btn-ghost px-0 lg:hidden">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </summary>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a  className="text-base">Home</a>
            </li>
            <li>
              <a className="text-base">Explore</a>
            </li>
            {/* you need to make sure that the about us gets hidden  after  login */}
            <li>
              <a className="text-base">About Us</a>       
            </li>
            {/* you need to make sure that the my applicaitons and opportunities be hidden  before  login */}
            <li>
              <a className="text-base">My Application</a>
            </li>
            <li>
              <a className="text-base">My Opportunities</a>
            </li>
          </ul>
        </details>
        <div className="hidden lg:flex flex-row items-center">
          <img src={Logo} className="w-9 h-9 mb-2" />
          <a className="btn btn-ghost normal-case text-xl px-2 text-blue-500">
            ResearchSphere
          </a>
        </div>
      </div>
      <div className="lg:hidden">
        <a className="btn btn-ghost normal-case text-xl px-2 text-blue-500">
          ResearchSphere
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 p-0 space-x-8">
          <li>
            <a className="text-lg">Home</a>
          </li>
          <li>
            <a className="text-lg">Explore</a>
          </li>
          <li>
            <a className="text-lg">About Us</a>
          </li>
          <li>
            <a className="text-base">My Application</a>
          </li>
          <li>
            <a className="text-base">My Opportunities</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <button
            onClick={handleLoginClick}
            className="btn bg-blue-400 text-white btn-sm px-3 md:px-5 h-9"
          >
            Login
          </button>
        </div>
        <div className="lg:hidden">
          <button
            onClick={handleLoginClick}
            className="btn bg-blue-400 text-white btn-sm h-10"
          >
            <span className="material-symbols-outlined">LOGIN</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
