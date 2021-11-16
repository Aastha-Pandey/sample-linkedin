const list = [
  'About',
  'Accessibility',
  'Help center',
  'Privacy and terms',
  'Ad choices',
  'Advertising',
  'Buisness Services',
  'Get the LinkedIn App',
];

const SideFooter = () => {
  return (
    <>
      <div className='flex space-y-2 flex-wrap justify-evenly pb-3 items-end border border-r-0 border-l-0 border-t-0 w-full space-x-4'>
        {list.map((name) => (
          <button className='justify-self-start text-sm text-gray-500 font-medium text-left  '>
            {name}
          </button>
        ))}
      </div>
    </>
  );
};

export default SideFooter;
