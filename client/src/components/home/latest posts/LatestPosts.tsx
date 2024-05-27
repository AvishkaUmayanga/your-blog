import { Link } from "react-router-dom"
import PostCard from "../../post card/PostCard"

const LatestPosts = () => {
  return (
    <div className="flex flex-col gap-16 px-10 mt-40 md:px-20 2xl:px-44 dark:text-white">
      <h2 className="justify-around text-2xl font-semibold text-center ">Latest Posts</h2>
      <div className="grid gap-10 gap-y-16 lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-cols4">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </div>
      <div className="flex justify-center">
        <Link to='/blog'><button className="px-2 py-1 -mt-5 -skew-x-6 border bg-gradient-to-br from-[#020024] via-[#090979] to-[#00d4ff] duration-300 hover:skew-x-0 border-teal-800 text-white hover:bg-none hover:text-black dark:hover:text-white">View all posts</button></Link>
      </div>
    </div>
  )
}

export default LatestPosts