import testImg from '../../assets/mainbg.png'
const PostPage = () => {
  return (
    <div className="flex flex-col items-center w-full gap-10 px-10 py-16 dark:text-white">
      <h2 className='text-3xl font-semibold text-center max-lg:text-2xl'>Installing Next.js with Tailwind CSS</h2>
      <img src={testImg} alt="logo" className='w-1/3 ' />
      <div className='flex flex-col w-3/4 gap-5 max-sm:w-full'>
        <div className='flex flex-col gap-4 px-5'>
          <div className='flex justify-between'>
            <p>@Avishka</p>  
            <p>2024/10/10</p>  
          </div>
          <hr/>
        </div>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, tempore cupiditate nam dolores nemo impedit corporis voluptas placeat veritatis blanditiis voluptatem vero veniam quos velit voluptate debitis, fugiat incidunt ducimus?
        
        nom i scs

             Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum suscipit dicta unde, rem architecto praesentium enim fugiat inventore consequatur ducimus ipsam dolore ex sit cumque ipsa voluptas sequi quam.
        </p>
      </div>
    </div>
  )
}

export default PostPage
