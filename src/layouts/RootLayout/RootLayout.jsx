import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <div>RootLayout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
