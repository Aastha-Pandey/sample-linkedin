import SideList from './../side/SideList';
import Timeline from './Timeline';
import MidNavBar from './../header/MidNavBar';
import About from './About';
import SideFooter from './../side/SideFooter';
import { mainTabNames } from '../../constants';

const Main = () => {
  return (
    <>
      <div className='bg-gray-100 py-4 h-full space-y-4  flex flex-col md:flex md:flex-row lg:flex lg:flex-row justify-center md:space-x-4 lg:space-x-4'>
        <div className='flex flex-col h-full  w-full md:w-2/4 lg:w-2/4 space-y-4'>
          <Timeline />
          <MidNavBar tabNames={mainTabNames} />
          <About />
        </div>
        <div className='flex flex-col  h-full  md:w-1/4  lg:w-1/4 space-y-4'>
          <SideList />
          <SideFooter />
          <div className='flex justify-between'>
            {' '}
            <div className=' flex text-xs font-semibold text-gray-900'>
              Linked
              <img
                className='h-4'
                src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
              ></img>
            </div>
            <div className='text-xs font-medium text-gray-400'>LinkedIn © 2021</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
