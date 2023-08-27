// Imports
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../../components/navbar/navbar";

const RootLayout = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar classname="h-[10vh]" />
      <Outlet />
    </div>
  );
};

export default RootLayout;
