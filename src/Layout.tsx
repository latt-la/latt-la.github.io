import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-12 xl:row-auto py-6 px-2 lg:p-0 place-content-center align-middle justify-center my-auto gap-y-8 xl:py-48">
      <div className="mb-auto lg:hidden"></div>
      <Outlet />
      {/* <div className="max-lg:mb-auto lg:hidden"></div> */}
      <Footer />
    </div>
  );
};

export default Layout;
