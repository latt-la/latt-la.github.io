import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <div className="flex flex-col justify-between p-6 xl:col-start-4 xl:col-span-6">
      <Link
        to=".." // amazing feature
        className="flex flex-row gap-x-1 items-center transition-all ease-in-out duration-200 hover:text-blue-500 active:text-blue-600"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="font-medium text-sm">Go Back</span>
      </Link>
    </div>
  );
};

export default Back;
