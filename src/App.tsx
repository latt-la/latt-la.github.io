import Block from './components/Block';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col xl:grid xl:grid-cols-12 xl:row-auto max-md:p-6 xl:h-full xl:place-content-center xl:my-auto xl:min-h-screen gap-y-8 xl:py-48'>
      <Block>
        <div className='flex flex-row justify-between items-center'>
          <div className='font-medium text-2xl'>
            <span>Latt-la</span>
          </div>
        </div>
      </Block>
      <Footer />
    </div>
  );
}

export default App;
