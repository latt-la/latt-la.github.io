import { faCreativeCommonsBy } from "@fortawesome/free-brands-svg-icons";
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons/faCreativeCommons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.div
      className="flex flex-col flex-wrap max-lg:text-sm xl:flex-row justify-center items-center text-center xl:justify-around xl:gap-16 gap-y-2 xl:gap-y-1 xl:p-6 xl:col-start-4 xl:col-span-6 max-lg:flex-row-reverse max-md:mb-8"
      key="footer"
      initial={{ opacity: 0, y: 2500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -2500 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="flex flex-row flex-wrap justify-center gap-y-1 gap-x-1 lg:gap-x-1 lg:gap-y-0 items-center">
        <Link
          to="/"
          className="font-medium hover:text-gruv-blue active:text-gruv-blue-alt transition-all ease-in-out duration-200"
        >
          Lattla.art
        </Link>{" "}
        © 2024 by
        <Link
          className="flex flex-row justify-center items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-gruv-blue active:text-gruv-blue-alt"
          target="_blank"
          rel="noreferrer noopener"
          to="https://vrkknn.net"
        >
          <FontAwesomeIcon icon={faCat} />
          <span>Virkkunen</span>
        </Link>
        <span className="max-lg:hidden">|</span>
        <Link
          to="http://creativecommons.org/licenses/by-nc-nd/4.0/"
          className="flex flex-row justify-center items-center gap-x-1 font-medium transition-all ease-in-out duration-200 hover:text-gruv-blue active:text-gruv-blue-alt"
        >
          CC BY-NC-ND 4.0
          <FontAwesomeIcon icon={faCreativeCommons} fixedWidth />
          <FontAwesomeIcon icon={faCreativeCommonsBy} fixedWidth />
        </Link>
      </div>

      {/* <span className="max-2xl:hidden">•</span> */}

      {/* <Link
        to="/terms"
        className="flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-gruv-blue active:text-gruv-blue-alt"
      >
        <FaFileInvoice />
        <span>Terms of Service</span>
      </Link> */}
    </motion.div>
  );
};

export default Footer;
