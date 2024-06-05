import PostCard from "../post card/PostCard"

const BlogPage = () => {
  return (
    <div className="w-full px-10 mb-16 dark:text-white md:px-20 2xl:px-28">
       <div className="grid gap-10 px-10 mt-16 lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-4">
        <PostCard/>
      </div>
    </div>
  )
}

export default BlogPage
