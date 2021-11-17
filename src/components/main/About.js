import { useContext } from 'react';
import { userContext } from '../../App';

const About = () => {
  const { user } = useContext(userContext);
  return (
    <>
      <div className='bg-white rounded-md p-4 flex flex-col space-y-6'>
        <h1 className='text-gray-800 font-semibold'>About</h1>
        <div className='flex flex-col space-y-4'>
          <p className='text-sm text-gray-500 '>{user.about}</p>
          <div className='flex justify-center space-x-4'>
            <div className='flex flex-col justify-end space-y-2 px-2 w-80 border border-gray-200'>
              <label className='text-sm font-semibold text-gray-700'>Website url</label>
              <a className='text-blue-600 text-sm font-medium '>{user.webSiteURL}</a>
            </div>
            <div className='flex flex-col space-y-2 w-80 px-2  border border-gray-200'>
              <h2 className='text-gray-500 text-sm'>{user.extraInfo.fundVia}</h2>
              <label className='text-sm text-gray-800 font-medium'>{user.extraInfo.series}</label>
              <a className='text-blue-600 font-semibold'>{user.extraInfo.fund}</a>
            </div>
          </div>
        </div>
        <button className='text-sm font-medium text-blue-600'>See all details</button>
      </div>
    </>
  );
};

export default About;
