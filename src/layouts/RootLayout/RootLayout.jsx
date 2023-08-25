import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const RootLayout = () => {
  return (
      <div className="bg-[#F5F5F5]">
      <Navbar classname ="h-[10vh]" />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
