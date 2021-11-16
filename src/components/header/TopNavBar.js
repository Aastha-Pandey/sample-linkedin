import { gridIcon, messageIcon, notificationIcon, searchIcon } from '../../svg';

const TopNavBar = () => {
  return (
    <>
      <nav className='bg-blue-500 h-16 flex space-x-4 justify-center'>
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
        <span className='flex items-center space-x-4'>
          {notificationIcon}
          {messageIcon}

          <img
            className='object-cover  h-8  rounded-md '
            src='https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
            alt='code'
          />
          {gridIcon}
          <button className='bg-yellow-400 h-8 text-blue-900 font-semibold text-sm py-2 px-4 rounded'>
            Upgrade to premium
          </button>
        </span>
      </nav>
    </>
  );
};

export default TopNavBar;
