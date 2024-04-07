import Footer from './components/Footer';
import LogoFull from './components/logo/LogoFull';

function App() {
  return (
    <div className='flex flex-col xl:grid xl:grid-cols-12 xl:row-auto max-md:p-6 xl:h-full xl:place-content-center xl:my-auto xl:min-h-screen gap-y-8 xl:py-48'>
      <div className='flex flex-col justify-between p-6 xl:col-start-4 xl:col-span-6'>
        <LogoFull />
      </div>
      <Footer />
    </div>
  );
}

export default App;
