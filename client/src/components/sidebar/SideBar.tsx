import { FaUserLarge } from "react-icons/fa6";
import { IoCreateSharp } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { signOutSuccess } from "../../redux/slices/userSlice";
import { setActiveTab } from "../../redux/slices/sideBarSlice";
import { RootState  } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";
import  { useSignOutMutation } from "../../redux/api/userApi";



const SideBar = () => {
  const buttonStyles = "flex items-center gap-3 p-3 font-medium rounded-md text-start dark:hover:bg-slate-700 hover:bg-slate-300 max-sm:p-2 max-sm:text-sm xl:w-56"
  
  const [signOutDetails] = useSignOutMutation()
  const dispatch = useDispatch()
  const activeTab = useSelector((state: RootState) => state.sideBarSlice.activeTab)
  const navigate = useNavigate()

  const handleSetActive = (tab: string) =>{
    dispatch(setActiveTab(tab))
  }

  const handleLogout = async () => {
    try {
        await signOutDetails({})
        dispatch(signOutSuccess(false))
        navigate('/')
    } catch (error) {
        console.error('Logout failed:', error);

    }
  }
  
  return (
    <div className="flex flex-col w-48 gap-5 p-4 bg-slate-100 lg:w-56 xl:w-64 dark:bg-gray-900 max-sm:w-full max-sm:p-2 max-sm:text-sm">
      <div onClick={()=>{handleSetActive('Profile')}} className={`${activeTab === 'Profile' ? 'dark:bg-slate-700 bg-slate-300' : '' } flex items-center justify-between p-3 rounded-md text-star dark:hover:bg-slate-700 hover:bg-slate-300 cursor-pointer`} >
        <button className='flex items-center gap-3 font-medium'><FaUserLarge />Profile</button>
        <span className='flex px-2 text-white rounded texslt-sm bg-slate-800 '>User</span>
      </div>
      <button onClick={()=>{handleSetActive('create post')}} className={`${activeTab === 'create post' ? 'dark:bg-slate-700 bg-slate-300' : '' } ${buttonStyles}`}><IoCreateSharp />Create Post</button>
      <button onClick={()=>{handleSetActive('my posts')}} className={`${activeTab === 'my posts' ? 'dark:bg-slate-700 bg-slate-300' : '' } ${buttonStyles}`}><BsPostcard />My Posts</button>
      <button onClick={handleLogout} className={buttonStyles}><IoArrowForwardOutline />Sign Out</button>
    </div>
  )
}

export default SideBar
