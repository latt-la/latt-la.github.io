import Block from '../components/Block';
import LogoFull from '../components/logo/LogoFull';

function App() {
  return (
    <>
      <div className='flex flex-col justify-between p-6 xl:col-start-2 xl:col-span-4 xl:row-start-1'>
        <LogoFull />
      </div>
      <div className='flex flex-col justify-center p-6 xl:col-start-7 xl:col-span-4 xl:row-start-1'>
        <Block>
          <div>test</div>
        </Block>
      </div>
    </>
  );
}

export default App;
