import { Link } from "react-router-dom"
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 px-2 py-5 shadow-inner dark:bg-gray-900 xl:px-56 md:px-20 bg-slate-100">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold text-red-500 max-sm:text-lg">YOUR<span className="text-black dark:text-white">blog</span></h2>
        <ul className="flex flex-col gap-3 dark:text-white max-sm:text-sm">
          <Link to="/"><li>Home</li></Link>
          <Link to="/blog"><li>Blog</li></Link>
          <Link to="/about"><li>About</li></Link>
        </ul>
        <ul className="flex flex-col gap-3 dark:text-white max-sm:text-sm">
        <li>avishkas97@gmail.com</li>
        <li>+94764009627</li>
      </ul>
      </div>
      <hr className="border-black dark:border-white" />
      <div className="flex justify-between dark:text-white">
        <div className="flex items-center gap-1 ">
          <FaRegCopyright/>
          <p>2024 YOURblog</p>
        </div>
        <div className="flex gap-3 text-lg">
        <a href='https://bit.ly/avishkaLinkedIN' target='blank' rel='noreferrer'><FaLinkedin/></a>
          <a href='https://bit.ly/avishkaGitHub' target='blank' rel='noreferrer'><FaGithub /></a>
          <a href= "mailto: avishkas97@gmail.com"><MdOutlineEmail/></a>
          <a href='https://bit.ly/avishkaFbAcc' target='blank' rel='noreferrer'><FaFacebook /></a>
          <a href='https://bit.ly/3tHxriH' target='blank' rel='noreferrer'><FaXTwitter /></a>
          <a href='https://bit.ly/AvishkaWhatsApp' target='blank' rel='noreferrer'><FaWhatsappSquare /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer