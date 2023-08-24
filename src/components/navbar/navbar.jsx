import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import api from "../../api/axios";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    api.post("/api/auth/token/logout/");
    Cookies.remove("token");
    navigate("/");
    window.location.reload(false);
  };

  const token = Cookies.get("token");

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
              <NavLink to="/" className="text-base">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore" className="text-base">
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink className="text-base">About Us</NavLink>
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
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl px-2 text-blue-500"
        >
          ResearchSphere
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 p-0 space-x-8">
          <li className="text-lg">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/explore">Explore</NavLink>
          </li>
          <li className="text-lg">
            <NavLink>About Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          {token ? (
            <button
              onClick={handleLogoutClick}
              className="btn bg-blue-400 text-white btn-sm px-3 md:px-5 h-9"
            >
              Logout
            </button>
          ) : (
            <Link to="/sign-in">
              <button className="btn bg-blue-400 text-white btn-sm px-3 md:px-5 h-9">
                Login
              </button>
            </Link>
          )}
        </div>
        <div className="lg:hidden">
          {token ? (
            <button
              onClick={handleLogoutClick}
              className="btn bg-blue-400 text-white btn-sm h-10"
            >
              <span className="material-symbols-outlined">LOGOUT</span>
            </button>
          ) : (
            <Link to="/sign-in">
              <button className="btn bg-blue-400 text-white btn-sm h-10">
                <span className="material-symbols-outlined">LOGIN</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
