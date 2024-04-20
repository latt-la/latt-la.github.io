import { Link } from "react-router-dom";
import Block from "../components/Block";
import Button from "../components/Button";
import LogoFull from "../components/logo/LogoFull";
import data from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between p-6 xl:col-start-4 xl:col-span-6 xl:row-start-1">
        <LogoFull />
      </div>
      <Block buttonGroup>
        <Link
          to="/terms"
          className="bg-gruv-red px-6 py-4 xl:px-4 xl:py-2 rounded-2xl drop-shadow-sm text-gruv-bg0_h font-semibold transition-all ease-in-out duration-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl active:brightness-75 active:translate-y-1 active:scale-95 active:drop-shadow-none flex flex-row justify-center xl:justify-between gap-x-2 items-center text-2xl xl:text-xl z-10"
        >
          <FontAwesomeIcon icon={faFileInvoice} />
          Terms of Service
        </Link>
        {data.contact.map((item) => (
          <Button
            title={item.title}
            icon={item.icon}
            color={item.color}
            link={item.link}
            key={item.title}
            tooltipTarget={item.title.replace(/\s/g, "")}
            tooltip={item.tooltip}
          />
        ))}
      </Block>
    </>
  );
}

export default App;
