import { eyeIcon } from '../svg';

const list = [
  'InVision',
  'Sketch',
  'Dribbble',
  'BeHance',
  'Overlap studio',
  'Medium',
  'Adobe',
  'slack',
];

const SideList = () => {
  return (
    <>
      <div className='flex flex-col space-y-4 bg-white p-4 w-full rounded-md'>
        <h1 className='text-left pl-5 text-sm font-semibold text-gray-800'>
          Pages people also viewed
        </h1>
        {list.map((name) => (
          <button className='justify-around items-center flex text-sm text-left font-semibold text-gray-700'>
            <div class='rounded-full bg-red-400 h-10 w-10'></div>

            <div className='flex flex-col w-36 '>
              {name}
              <div className='text-xs text-gray-500'>Internet</div>
            </div>

            <div className='text-blue-700'>{eyeIcon}</div>
          </button>
        ))}
      </div>
    </>
  );
};
export default SideList;
