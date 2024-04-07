import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import LogoWhiteOutline from '../components/logo/LogoWhiteOutline';
import Block from '../components/Block';

const Terms = () => {
  return (
    <>
      <div className='flex flex-col justify-between p-6 xl:col-start-4 xl:col-span-6 gap-8'>
        <Link
          to='/'
          className='flex flex-row gap-2 items-center'
        >
          <FaArrowLeft />
          <span>Go Back</span>
        </Link>
        <div className='flex justify-center'>
          <LogoWhiteOutline width='50px' />
        </div>
        <Block>
          <div className='flex flex-col justify-center text-center'>
            <div className='font-bold text-2xl flex flex-col'>
              <span>TERMS OF SERVICE (TOS) AND PRICES - 2022</span>
              <span>BY LATT-LA</span>
            </div>

            <div className='mt-4 flex flex-col mb-8'>
              <span className='text-lg font-medium mb-2'>
                BY COMMISSIONING ME YOU ARE AGREEING TO RESPECT MY TERMS OF SERVICE!
              </span>
              <span>This applies to my commissions, YCHs, adopts ect!</span>
              <span>You can find the price list under the TOS!</span>
            </div>
            <div className='flex flex-col text-left'>
              <span className='font-medium'>MY SERVICES THAT YOU CAN ASK FOR:</span>
              <ul className='list-disc ml-6'>
                <li>Illustrations</li>
                <li>Concept art</li>
                <li>Drawing comics</li>
                <li>Character Designs</li>
                <li>Story writing for comics</li>
                <li>Environmental drawings</li>
                <li>Simple character animations</li>
              </ul>
            </div>
          </div>
        </Block>
      </div>
    </>
  );
};

export default Terms;
