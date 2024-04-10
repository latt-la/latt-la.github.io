import { Link } from 'react-router-dom';

interface Button {
  text: string;
  link: string;
}

const Button: React.FC<Button> = ({ text, link }) => {
  return (
    <Link
      to={link}
      className='bg-green-400 px-6 py-4 xl:px-4 xl:py-2 rounded-2xl drop-shadow-sm text-crust font-semibold transition-all ease-in-out duration-200 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl active:brightness-75 active:translate-y-1 active:scale-95 active:drop-shadow-none flex flex-row justify-center xl:justify-between gap-x-2 items-center text-2xl xl:text-xl z-10'
    >
      {text}
    </Link>
  );
};

export default Button;
