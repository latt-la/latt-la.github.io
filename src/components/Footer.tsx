import { FaCreativeCommons, FaCreativeCommonsBy, FaFileInvoice, FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col justify-between p-4 xl:p-6 xl:col-start-4 xl:col-span-6'>
      <div className='flex flex-col xl:flex-row justify-center text-center xl:justify-around mx-auto xl:gap-16 gap-y-2 xl:gap-y-0'>
        <div>
          <span className='flex flex-row gap-x-[0.35rem] justify-center align-middle'>
            <Link
              to='/'
              className='font-medium hover:text-blue-500 active:text-blue-300 transition-all ease-in-out duration-200'
            >
              Lattla.art
            </Link>{' '}
            © 2024 by{' '}
            <Link
              className='flex flex-row justify-center items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-blue-400 active:text-blue-600'
              target='_blank'
              rel='noreferrer noopener'
              to='https://github.com/Virkkunen'
            >
              <FaGithub />
              <span>Virkkunen</span>
            </Link>{' '}
            is licensed under{' '}
            <Link
              to='http://creativecommons.org/licenses/by-nc-nd/4.0/'
              className='flex flex-row justify-center items-center gap-x-1 font-medium transition-all ease-in-out duration-200 hover:text-blue-400 active:text-blue-600'
            >
              CC BY-NC-ND 4.0
              <FaCreativeCommons />
              <FaCreativeCommonsBy />
            </Link>
          </span>
        </div>

        <span className='max-lg:hidden'>•</span>

        <div className='flex flex-row gap-2 justify-center'>
          <Link
            to='/terms'
            className='flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-blue-400 active:text-blue-600'
          >
            <FaFileInvoice />
            <span>Terms of Service</span>
          </Link>
        </div>

        {/* <div className='flex flex-row gap-2 justify-center'>
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
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
