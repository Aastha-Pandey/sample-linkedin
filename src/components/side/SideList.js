import { sideList } from '../../constants';
import { eyeIcon } from './../../svg';

const SideList = () => {
  return (
    <>
      <div className='flex flex-col space-y-4  bg-white p-4 w-full rounded-md'>
        <h1 className='text-left pl-5 text-sm font-semibold text-gray-800'>
          Pages people also viewed
        </h1>
        {Object.keys(sideList).map((name) => (
          <button className='justify-around items-center flex text-sm text-left font-semibold text-gray-700'>
            <div
              class={`flex justify-center items-center font-semibold rounded-full ${sideList[name].profileImage} h-10 w-10 text-white`}
            >
              {name.slice(0, 1)}
            </div>
            <div className='flex flex-col w-48'>
              {name}
              <div className='flex flex-wrap space-x-2 justify-start'>
                <div className='text-xs text-gray-500'>{sideList[name].domain} .</div>

                <div className='text-xs text-gray-500'>{sideList[name].followers} followers</div>
              </div>
            </div>

            <div className='text-blue-700'>{eyeIcon}</div>
          </button>
        ))}
      </div>
    </>
  );
};
export default SideList;
