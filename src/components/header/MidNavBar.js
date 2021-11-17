const MidNavBar = ({ tabNames }) => {
  return (
    <>
      <nav
        className={
          Array.isArray(tabNames)
            ? `bg-white grid grid-cols-${tabNames.length} divide-x divide-gray-300 h-12 justify-around py-2`
            : `bg-white grid grid-cols-${
                Object.keys(tabNames).length
              } divide-x divide-gray-300 h-12 justify-around py-2`
        }
      >
        {Array.isArray(tabNames) ? (
          <>
            {tabNames.map((tab, i) => (
              <button
                className={
                  i === 0
                    ? 'font-bold text-xs mx-4 border border-green-500 border-r-0 border-l-0 border-t-0 text-green-500'
                    : 'font-bold text-xs  text-gray-500'
                }
              >
                {tab}
              </button>
            ))}
          </>
        ) : (
          <>
            {' '}
            {Object.keys(tabNames).map((tab) => (
              <>
                <button className='flex justify-center items-center space-x-4'>
                  {tabNames[tab]}
                  <button className='font-bold text-xs  text-gray-500'>{tab}</button>
                </button>
              </>
            ))}
          </>
        )}
      </nav>
    </>
  );
};

export default MidNavBar;
