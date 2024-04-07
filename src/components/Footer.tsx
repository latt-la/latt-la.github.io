import { FaGithub } from 'react-icons/fa6';
import Block from './Block';

const Footer = () => {
  return (
    <Block>
      <div className='flex flex-row justify-around xl:mx-auto xl:gap-24 text-neutral-300'>
        <div>
          <span>© 2024 Latt-la</span>
        </div>
        <span className=''>•</span>
        <div className='flex flex-row gap-2'>
          <span>Made by</span>
          <a
            className='flex flex-row items-center gap-x-1 transition-all ease-in-out duration-200 hover:text-blue-400 active:text-blue-600'
            target='_blank'
            rel='noreferrer noopener'
            href='https://github.com/Virkkunen'
          >
            <FaGithub />
            <span>Virkkunen</span>
          </a>
        </div>
      </div>
    </Block>
  );
};

export default Footer;
