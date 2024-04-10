import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div className='flex flex-col xl:grid xl:grid-cols-12 xl:row-auto max-md:p-6 h-screen place-content-center my-auto min-h-screen gap-y-8 xl:py-48'>
      <div className='max-lg:my-auto lg:hidden'></div>
      <Outlet />
      <div className='max-lg:mb-auto lg:hidden'></div>
      <Footer />
    </div>
  );
};

export default Layout;
