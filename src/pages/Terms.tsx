import Block from '../components/Block';
import Back from '../components/Back';

const Terms = () => {
  return (
    <>
      <div className='flex flex-col justify-between p-6 xl:col-start-4 xl:col-span-6 gap-8'>
        <Back />
        <div className='flex justify-center'>
          <img
            src='./Allan_icon.png'
            className='w-20 xl:w-24'
          />
        </div>
        <Block>
          <div className='flex flex-col justify-center text-center'>
            <div className='font-bold text-2xl flex flex-col'>
              <span>TERMS OF SERVICE (TOS) AND PRICES - 2024</span>
              <span>BY LATT-LA</span>
            </div>

            <div className='mt-4 flex flex-col mb-8'>
              <span className='text-lg font-medium mb-2'>
                BY COMMISSIONING ME YOU ARE AGREEING TO RESPECT MY TERMS OF SERVICE!
              </span>
              <span>This applies to my commissions, YCHs, adopts ect!</span>
              <span>You can find the price list under the TOS!</span>
            </div>

            <div className='flex flex-col text-left mb-8'>
              <span className='font-medium'>MY SERVICES THAT YOU CAN ASK FOR:</span>
              <ul className='list-disc ml-10 mb-2 leading-relaxed'>
                <li>Illustrations</li>
                <li>Concept art</li>
                <li>Drawing comics</li>
                <li>Character Designs</li>
                <li>Story writing for comics</li>
                <li>Environmental drawings</li>
                <li>Simple character animations</li>
              </ul>
              <span className='font-medium'>
                My style is fluid so you can ask about semi-real paintings, lineart illustrations or
                lineless drawings!
              </span>
            </div>

            <div className='text-left flex flex-col mb-8'>
              <span className='font-semibold text-xl underline'>PRICES AND PAYMENTS:</span>
              <ul className='list-disc ml-10 mb-2 leading-relaxed'>
                <li>
                  The commission won't be started until the payment is received,{' '}
                  <span className='font-semibold'>
                    full price in the beginning or 50% pay in advance!
                  </span>
                </li>
                <li>
                  After accpeting the final sketch, payment for the remaining amount agreed must be
                  done, in case the full amount wasn't paid in advance.
                </li>
                <li>
                  Keep in mind prices may change due to character complexity, background,
                  accessories etc.
                </li>
                <li>
                  I can charge extra for lack of proper reference e.g. you only send sketches
                  without colors.
                </li>
                <li className='font-semibold'>I can only receive payment via PayPal or Ko-Fi!</li>
                <li>
                  <span className='font-semibold'>My prices are in USD! </span>You can send it
                  either that way or let PayPal convert it to HUF or EUR.
                </li>
                <li>
                  When making a payment please write your username in the payment's textbox so I
                  know who is the sender!
                </li>
              </ul>
            </div>

            <div className='text-left flex flex-col mb-8'>
              <span className='font-semibold text-xl underline'>WHAT YOU WILL RECEIVE:</span>
              <ul className='list-disc ml-10 mb-2 leading-relaxed'>
                <li>
                  I provide <span className='font-semibold'>2-3 WIP sketches</span> about the
                  concept so you can ask for changes during the sketch part
                </li>
                <li>
                  After the sketch is done, changes are limited. Keep in mind you have{' '}
                  <span className='font-semibold'>3 free changes</span> (extra changes come with
                  extra charges). After the lineart is done you can not ask big changes, e.g.
                  another pose or drastic changes like a new face expression.
                </li>
                <li>
                  After the commission is done I'll upload the full resolution drawing on my google
                  drive and I'll share the link so you can download it.
                </li>
              </ul>
            </div>

            <div className='text-left flex flex-col mb-8'>
            <span className='font-semibold text-xl underline'>DISCLAIMER:</span>

            </div>

            <div className='text-left flex flex-col mb-8'>
            <span className='font-semibold text-xl underline'>MY RIGHTS:</span>

            </div>

            <div className='text-left flex flex-col mb-8'>
            <span className='font-semibold text-xl underline'>REFUND POLICIES:</span>

            </div>

            <div className='text-left flex flex-col mb-8'>
            <span className='font-semibold text-xl underline'>USAGE AND RESELLING:</span>

            </div>
          </div>
        </Block>
        <Block>
        <div className='flex flex-col justify-center text-center'>
        <span className='font-bold text-2xl'>THE COMISSION PROCESS</span>

        </div>
        </Block>
      </div>
    </>
  );
};

export default Terms;
