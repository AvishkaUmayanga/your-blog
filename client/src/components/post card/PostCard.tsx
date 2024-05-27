import homeImg from '../../assets/mainbg.png'

const PostCard = () => {
  return (
    <div className="duration-300 bg-white border border-teal-500 rounded 2xl:w-80 hover:scale-105 dark:bg-slate-950 w-72">
      <img src={homeImg} alt="home" className='flex object-cover w-full h-64 rounded-t' /> 
      <div className='flex flex-col gap-5 p-2'>
        <h4 className='text-xl font-medium'>Tailwind css with react js</h4>
        <div className='flex items-center justify-between'>
          <p>@avishka</p>
          <p className='text-sm '>1 day ago</p>
        </div>
        <button className='py-1 font-medium duration-300 border border-teal-500 rounded hover:scale-95'>
        View Post
        </button>
      </div>
    </div>
  )
}

export default PostCard