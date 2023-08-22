import { Outlet } from "react-router-dom";
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

const RootLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
