import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import api from "../../api/axios";
import Cookies from "js-cookie";
import "./Navbar.css";

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
    <div className="navbar bg-white drop-shadow-md px-5 py-0 border-b-1 top-0 left-0 right-0 sticky z-40 h-[8vh]">
      <div className="navbar-start">
        {token && (
          <details className="dropdown">
            <summary tabIndex={0} className="btn btn-ghost px-0 lg:hidden">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </summary>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content z-1 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
            >
              <li>
                <NavLink to="/" className="text-base font-bold">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/explore" className="text-base font-bold">
                  Explore
                </NavLink>
              </li>
              <li>
                <NavLink to="/post-opportunity" className="text-base font-bold">
                  Post Opportunity
                </NavLink>
              </li>
              <li>
                <Link to="/my-applications" className="text-base">
                  My Applications
                </Link>
              </li>
              <li>
                <Link to="/my-posts" className="text-base">
                  My Posts
                </Link>
              </li>
            </ul>
          </details>
        )}
        <div className="hidden lg:flex flex-row items-center">
          <img src={Logo} className="w-9 h-9 mb-2" />
          <Link
            to="/"
            className="btn-sm btn-ghost normal-case text-xl font-semibold px-2 text-primary"
          >
            ResearchSphere
          </Link>
        </div>
      </div>
      <div className="lg:hidden">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl px-2 text-primary"
        >
          ResearchSphere
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {token && (
          <ul className="menu menu-horizontal px-1 p-0 space-x-8">
            <li className="text-base">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-base">
              <NavLink to="/explore">Explore</NavLink>
            </li>
            <li>
              <NavLink to="/post-opportunity" className="text-base">
                Post Opportunity
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-applications" className="text-base">
                My Applications
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-posts" className="text-base">
                My Posts
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          {token ? (
            <button
              onClick={handleLogoutClick}
              className="btn bg-primary text-white btn-sm px-3 md:px-5 h-9"
            >
              Logout
            </button>
          ) : (
            <Link to="/sign-in">
              <button className="btn bg-primary text-white btn-sm px-3 md:px-5 h-9">
                Login
              </button>
            </Link>
          )}
        </div>
        <div className="lg:hidden">
          {token ? (
            <button
              onClick={handleLogoutClick}
              className="btn bg-primary text-white btn-sm h-10"
            >
              <span className="material-symbols-outlined">logout</span>
            </button>
          ) : (
            <Link to="/sign-in">
              <button className="btn bg-primary text-white btn-sm h-10 hidden">
                LOGIN
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
