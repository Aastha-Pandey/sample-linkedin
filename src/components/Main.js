import SideList from './SideList';
import Timeline from './Timeline';
import MidNavBar from './header/MidNavBar';
import About from './About';
import SideFooter from './SideFooter';

const tabNames = ['Overview', 'About', 'Products', 'Posts', 'Jobs', 'People', 'Videos'];
const Main = () => {
  return (
    <>
      <div className='bg-gray-100 py-4 h-full flex justify-center space-x-4 '>
        <div className='flex flex-col h-full w-2/4  space-y-4'>
          <Timeline />
          <MidNavBar tabNames={tabNames} size={tabNames.length} />
          <About />
        </div>
        <div className='flex flex-col h-full w-1/4  space-y-4'>
          <SideList />
          <SideFooter />
        </div>
      </div>
    </>
  );
};

export default Main;
