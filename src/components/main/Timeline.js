import { useContext } from 'react';
import { userContext } from '../../App';
import { eyeIcon, rightArrowIcon } from './../../svg';

const Timeline = () => {
  const { user } = useContext(userContext);
  const tabNames = [user.domain, user.city, user.followers + ' followers'];
  return (
    <>
      <div className='flex flex-col w-full  rounded-md bg-white pb-4 '>
        <img
          className='object-cover h-32 w-full rounded-md relative'
          src={user.coverImage}
          alt='cover_image'
        />
        <img
          className='object-cover ml-4 mt-14 h-32 w-28 rounded-md absolute'
          src={user.profileImage}
          alt='profile_photo'
        />
        <div className='mt-20 ml-4 flex flex-col'>
          <div className='flex flex-col'>
            <h1 className='font-bold text-xl text-gray-800'>{user.name}</h1>
            <p className='text-sm text-gray-600 font-medium'>{user.description}</p>
          </div>
          <div class='flex space-x-2 py-2'>
            {tabNames.map((tab, i) => (
              <>
                <button className='text-xs text-gray-500 text-center'>{tab}</button>
                {i !== 2 && <div className='text-xs text-gray-500 text-center'>.</div>}
              </>
            ))}
          </div>
          <button className='flex space-x-2 items-center text-blue-600 w-60 text-xs text-left'>
            <button className='font-semibold'>
              {' '}
              See all {user.noOfEmployees} employees on LinkedIn
            </button>
            {rightArrowIcon}
          </button>
          <span className='flex space-x-2 pt-4'>
            <button className='flex space-x-2 items-center bg-blue-600 text-blue-50 font-semibold text-xs rounded-sm text-left py-2 px-4'>
              {eyeIcon}
              <button>Follow</button>
            </button>
            <button className='space-x-2 flex items-center text-gray-700 border w-auto border-blue-600 rounded-sm font-semibold text-xs text-left  py-2 px-4'>
              {rightArrowIcon}
              <button>Visit website</button>
            </button>
            <button className='text-gray-700 bg-gray-200 w-auto  rounded-sm font-semibold text-xs text-left  py-2 px-4'>
              ...
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Timeline;
