import  { useEffect, useState } from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMoonSharp } from "react-icons/io5";

function ModeButton() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(()=>{
    if(theme === 'dark'){
        document.documentElement.classList.add('dark')
    }
    else{
        document.documentElement.classList.remove('dark')
    }
  },[theme])

  const handleTheme = () =>{
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <div onClick={handleTheme} className="flex items-center justify-center p-1 bg-white rounded-full cursor-pointer w-9 h-9 max-sm:w-8 max-sm:h-8">
      <HiOutlineLightBulb className="hidden w-6 h-6 dark:flex max-sm:w-5"/>
      <IoMoonSharp className="w-6 h-6 dark:hidden"/>
    </div>
  )
}

export default ModeButton