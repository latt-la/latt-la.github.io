import Block from '../components/Block';
import Button from '../components/Button';
import LogoFull from '../components/logo/LogoFull';

function App() {
  return (
    <>
      <div className='flex flex-col justify-between p-6 xl:col-start-2 xl:col-span-4 xl:row-start-1'>
        <LogoFull />
      </div>
      <div className='flex flex-col justify-center p-6 xl:col-start-7 xl:col-span-4 xl:row-start-1 gap-y-2'>
        <Block>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-2'>
            test
            <Button
              text='first'
              link='/'
            />
            <Button
              text='second'
              link='/'
            />
            <Button
              text='third'
              link='/'
            />
            <Button
              text='fourth'
              link='/'
            />
          </div>
        </Block>
      </div>
    </>
  );
}

export default App;
