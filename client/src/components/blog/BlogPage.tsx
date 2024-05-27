import PostCard from "../post card/PostCard"

const BlogPage = () => {
  return (
    <div className="w-full px-10 my-16 dark:text-white md:px-20 2xl:px-28">
       <div className="grid justify-between gap-10 mt-16 lg:grid-cols-cols3 sm:grid-cols-cols2 max-sm:justify-center 2xl:grid-cols-cols4">
       <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        </div>
    </div>
  )
}

export default BlogPage
