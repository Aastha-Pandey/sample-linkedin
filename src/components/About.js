const About = () => {
  return (
    <>
      <div className='bg-white rounded-md p-4 flex flex-col space-y-6'>
        <h1 className='text-gray-800 font-semibold'>About</h1>
        <div className='flex flex-col space-y-4'>
          <p className='text-sm text-gray-500 '>
            Figma is the first professional-grade online tool created specifically for interface
            design. Born on the web, Figma helps the entire product team create, test, and ship
            better designs, faster.
          </p>
          <div className='flex justify-center space-x-4'>
            <div className='flex flex-col justify-end space-y-2 px-2 w-80 border border-gray-400'>
              <label className='text-sm font-semibold text-gray-700'>Website url</label>
              <a className='text-blue-700 text-sm font-medium '>Figma.com</a>
            </div>
            <div className='flex flex-col space-y-2 w-80 px-2  border border-gray-400'>
              <h2 className='text-gray-500 text-sm'>Funding via crunchbase</h2>
              <label className='text-sm text-gray-800 font-medium'>Series D</label>
              <a className='text-blue-700 font-semibold'>US$ 50M</a>
            </div>
          </div>
        </div>
        <button className='text-sm font-medium text-blue-700'>See all details</button>
      </div>
    </>
  );
};

export default About;
