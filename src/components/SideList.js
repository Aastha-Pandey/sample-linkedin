import { eyeIcon } from '../svg';

const list = {
  InVision: (
    <div class='flex justify-center items-center font-semibold rounded-full bg-red-400 h-10 w-10 text-white'>
      I
    </div>
  ),
  Sketch: (
    <div class=' flex justify-center items-center font-semibold rounded-full bg-green-400 h-10 w-10 text-white'>
      S
    </div>
  ),
  Dribbble: (
    <div class=' flex justify-center items-center font-semibold rounded-full bg-blue-400 h-10 w-10 text-white'>
      D
    </div>
  ),
  BeHance: (
    <div class=' flex justify-center items-center font-semibold rounded-full bg-yellow-400 h-10 w-10 text-white'>
      B
    </div>
  ),
  'Overlap studio': (
    <div class='flex justify-center items-center font-semibold  rounded-full bg-purple-400 text-white h-10 w-10'>
      O
    </div>
  ),
  Medium: (
    <div class='flex justify-center items-center font-semibold  rounded-full bg-indigo-800 h-10 w-10 text-white'>
      M
    </div>
  ),
  Adobe: (
    <div class='flex justify-center items-center font-semibold  rounded-full bg-pink-700 h-10 w-10 text-white'>
      A
    </div>
  ),
  Slack: (
    <div class='flex justify-center items-center font-semibold  rounded-full bg-red-800 h-10 w-10 text-white'>
      S
    </div>
  ),
};

const SideList = () => {
  return (
    <>
      <div className='flex flex-col space-y-4 bg-white p-4 w-full rounded-md'>
        <h1 className='text-left pl-5 text-sm font-semibold text-gray-800'>
          Pages people also viewed
        </h1>
        {Object.keys(list).map((name) => (
          <button className='justify-around items-center flex text-sm text-left font-semibold text-gray-700'>
            {list[name]}

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
