import {
  FaCat,
  FaCreativeCommons,
  FaCreativeCommonsBy,
  FaFileInvoice,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col flex-wrap max-lg:text-sm xl:flex-row justify-center items-center text-center xl:justify-around xl:gap-16 gap-y-2 xl:gap-y-1 xl:p-6 xl:col-start-4 xl:col-span-6 max-lg:flex-row-reverse">
      <div className="flex flex-row flex-wrap justify-center gap-y-1 gap-x-1 lg:gap-x-1 lg:gap-y-0 items-center">
        <Link
          to="/"
          className="font-medium hover:text-blue-500 active:text-blue-300 transition-all ease-in-out duration-200"
        >
          Lattla.art
        </Link>{" "}
        © 2024 by
        <Link
          className="flex flex-row justify-center items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-blue-400 active:text-blue-600"
          target="_blank"
          rel="noreferrer noopener"
          to="https://vrkknn.net"
        >
          <FaCat />
          <span>Virkkunen</span>
        </Link>
        |
        <Link
          to="http://creativecommons.org/licenses/by-nc-nd/4.0/"
          className="flex flex-row justify-center items-center gap-x-1 font-medium transition-all ease-in-out duration-200 hover:text-blue-400 active:text-blue-600"
        >
          CC BY-NC-ND 4.0
          <FaCreativeCommons />
          <FaCreativeCommonsBy />
        </Link>
      </div>

      <span className="max-2xl:hidden">•</span>

      <Link
        to="/terms"
        className="flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-blue-400 active:text-blue-600"
      >
        <FaFileInvoice />
        <span>Terms of Service</span>
      </Link>
    </div>
  );
};

export default Footer;
