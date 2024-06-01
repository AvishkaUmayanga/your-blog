import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ModeButton from "../mode button/ModeButton";
import testImg from '../../assets/userTest.png'
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const Header= () => {
 const isLoggedIn = useSelector((state: RootState) => state.userSlice.isLoggedIn) 
 const [isOpen, setIsOpen] = useState<boolean>(false)
 
 const toggleMenu = () =>{
    setIsOpen(!isOpen)
 }
 const activeStyle = " text-red-500"
 const inactiveStyle = " text-black dark:text-gray-50 "
  return (
    <>
    <div className=" h-[8vh]  flex items-center px-5 justify-between w-full sticky top-0 bg-slate-100 shadow-md dark:bg-gray-900 dark:shadow-indigo-500/50 z-50">
      <h2 className="text-2xl font-bold text-red-500 max-sm:text-xl">YOUR<span className="text-black dark:text-white">blog</span></h2>
      <div className=" max-sm:hidden">
        <ul className="flex gap-8 text-lg font-medium ">
          <NavLink to='/' className={({isActive}) => ( isActive ? activeStyle : inactiveStyle )}><li>Home</li></NavLink>
          <NavLink to='/blog' className={({isActive}) => ( isActive ? activeStyle : inactiveStyle )}><li>Blog</li></NavLink> 
          <NavLink to='/about' className={({isActive}) => ( isActive ? activeStyle : inactiveStyle )}><li>About</li></NavLink>     
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <ModeButton />
        { !isLoggedIn && 
          <Link to='/login'><button className="flex items-center justify-center px-5 py-1 rounded-full cursor-pointer max-sm:px-3 max-sm:text-sm hover:bg-gradient-to-br from-[#020024] via-[#090979] to-[#00d4ff] duration-300 hover:scale-95 text-white bg-slate-900 font-medium dark:bg-gray-50 dark:text-black dark:hover:text-white">Login</button></Link>
        }
        { isLoggedIn && 
          <Link to='/dashboard'><div className="flex items-center justify-center p-1 bg-white rounded-full w-9 max-sm:w-8"><img src={testImg} alt="user" /></div></Link>
        }
        <div className="w-6 ">
          {isOpen ?
           <IoMdClose className="text-2xl md:hidden dark:text-white" onClick={toggleMenu}/> :
           <FaBars className="text-xl md:hidden dark:text-white" onClick={toggleMenu}/> 
          }
        </div>  
      </div>
    </div>
    {/* side bar */}
    <div className={`${isOpen ? " translate-x-0" : "translate-x-full"}  h-[92vh] bg-gray-100 w-1/2 fixed right-0 duration-500 dark:bg-gray-900 z-50 bottom-0`}>
      <ul className="flex flex-col items-center w-full h-full gap-10 mt-16 font-medium dark:text-gray-50">
        <NavLink to='/' onClick={toggleMenu} className={({isActive}) => ( isActive ? activeStyle : inactiveStyle )}><li>Home</li></NavLink>
        <NavLink to='/blog' onClick={toggleMenu} className={({isActive}) => ( isActive ? activeStyle : inactiveStyle )}><li>Blog</li></NavLink> 
        <NavLink to='/about'onClick={toggleMenu} className={({isActive}) => ( isActive ? activeStyle : inactiveStyle )}><li>About</li></NavLink> 
      </ul>
    </div>
    </>
  )
}

export default Header