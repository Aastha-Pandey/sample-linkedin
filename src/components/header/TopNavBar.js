import { useContext } from 'react';
import { userContext } from '../../App';
import { gridIcon, messageIcon, notificationIcon, searchIcon } from '../../svg';

const TopNavBar = () => {
  const { user } = useContext(userContext);
  return (
    <>
      <nav className='bg-blue-500 h-16 flex space-x-1 md:space-x-4 lg:space-x-4 justify-center'>
        <span className='flex  items-center space-x-2  w-7/12'>
          <img
            className='bg-blue-50 rounded-sm h-8'
            src='https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/linkedin-color.png'
            alt='LinkedIn icon'
          ></img>
          <span className='flex items-center space-x-4 bg-blue-400 rounded-sm px-3 w-full'>
            {searchIcon}
            <input
              className='h-8 w-full text-sm focus:outline-none rounded-sm bg-blue-400 placeholder-blue-50'
              placeholder='Search'
            />
          </span>
        </span>
        <span className='flex items-center space-x-2 md:space-x-4 lg:space-x-4'>
          {notificationIcon}
          {messageIcon}

          <img className='object-cover  h-8  rounded-md ' src={user.profileImage} alt='code' />
          {gridIcon}
          <button className='bg-yellow-400 flex items-center text-xs h-8 w-auto text-blue-900 font-bold md:font-semibold lg:font-semibold md:text-sm lg:text-sm py-2 px-4 rounded'>
            Upgrade to premium
          </button>
        </span>
      </nav>
    </>
  );
};

export default TopNavBar;
