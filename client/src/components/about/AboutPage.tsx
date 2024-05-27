
const AboutPage = () => {
  const textStyle = "text-sm text-gray-800 max-sm:text-justify sm:text-lg dark:text-gray-200 "
  return (
    <div className="flex justify-center text-center dark:text-white">
      <div className="flex flex-col w-2/3 gap-20 my-20 xl:my-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl max-sm:xl">About</h1>
          <p className={textStyle}>Welcome to YOURblog! We are a community-driven platform where passionate writers and readers come together to share and discover new ideas. Whether you're an experienced blogger or just starting, YOURblog is the perfect place to express your thoughts and connect with like-minded individuals.</p>  
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl max-sm:xl">Our Mission</h1>
          <p className={textStyle}>Our mission is to provide a welcoming and engaging space for users to share their knowledge, stories, and experiences. We believe everyone has a unique perspective worth sharing, and YOURblog is dedicated to amplifying those voices.</p>  
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl max-sm:xl">How to Get Started</h1>
          <div className={`${textStyle} text-start`}>
            <ul className="list-decimal">
              <li>Create an Account: Click the "Login" button at the top right corner of the page to create an account.</li>
              <li>Write Your Blog: Once logged in, navigate to the "Create Blog" section from your user dashboard. Use our user-friendly editor to start writing your blog post.</li>
              <li>Publish and Share: Publish your blog and share it with the YOURblog community.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
