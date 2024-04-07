import { FaFileInvoice, FaGithub } from 'react-icons/fa6';
import Block from './Block';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Block>
      <div className='flex flex-row justify-around xl:mx-auto xl:gap-16'>
        <div>
          <span>© 2024 Latt-la</span>
        </div>

        <span className=''>•</span>

        <div className='flex flex-row gap-2'>
          <Link
            to='/terms'
            className='flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-blue-400 active:text-blue-600'
          >
            <FaFileInvoice />
            <span>Terms of Service</span>
          </Link>
        </div>

        <span className=''>•</span>

        <div className='flex flex-row gap-2'>
          <span>Made by</span>
          <Link
            className='flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-blue-400 active:text-blue-600'
            target='_blank'
            rel='noreferrer noopener'
            to='https://github.com/Virkkunen'
          >
            <FaGithub />
            <span>Virkkunen</span>
          </Link>
        </div>
      </div>
    </Block>
  );
};

export default Footer;
