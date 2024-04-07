import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div className='flex flex-col xl:grid xl:grid-cols-12 xl:row-auto max-md:p-6 xl:h-full xl:place-content-center xl:my-auto xl:min-h-screen gap-y-8 xl:py-48'>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
