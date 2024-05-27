import homeImg from '../../assets/mainbg.png'

const MyPosts = () => {
  return (
    <div className="grid gap-6 px-10 xl:grid-cols-5 max-lg:grid-cols-2 max-md:grid-cols-1 lg:grid-cols-3 h-fit">
      <div className="bg-white border border-teal-500 rounded dark:bg-slate-950 ">
        <img src={homeImg} alt="home" className='flex object-cover w-full h-40 rounded-t' /> 
        <div className='flex flex-col gap-5 p-2'>
          <h4 className='text-lg font-medium'>Tailwind css with react js</h4>
          <p className='text-sm '>1 day ago</p>
          <button className='py-1 font-medium duration-300 border border-teal-500 rounded hover:scale-95'>
           View Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyPosts
