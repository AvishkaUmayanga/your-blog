import homeImg from '../../assets/mainbg.png'
import LatestPosts from './latest posts/LatestPosts'

const Home = () => {
  return (
    <div className="flex flex-col w-full gap-10 my-16">
      <div className="relative flex flex-col">
        <div className='flex justify-center'>
          <img src={homeImg} alt="home" className='w-3/4 max-h-96' /> 
        </div>
        <div className='absolute bottom-0 p-5 text-lg bg-white border-2 shadow-md md:-mb-20 rounded-tl-3xl rounded-br-3xl w-96 md:ml-80 dark:shadow-indigo-500/50 max-md:w-64 max-md:text-sm max-md:ml-20 max-md:p-2 max-md:-mb-24'>
          <p>Welcome to YOURblog, a modern and intuitive blog posting web application designed for writers, thinkers, and creatives. This platform provides a seamless experience for authors to share their thoughts, stories, and insights with a global audience.</p>
        </div>
      </div>
      <LatestPosts />
    </div>
  )
}

export default Home