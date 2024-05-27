import { useState } from "react";
import ProfileSection from "../profile section/ProfileSection";
import SideBar from "../sidebar/SideBar";
import MyPosts from "../my posts/MyPosts";
import CreatePost from "../create post/CreatePost";

const DashBoard = () => {
  const [activeTab, setActiveTab] = useState<string>('Profile')
  const setActiveFunc = (tab: string) =>{
    setActiveTab(tab)
  }
  return (
    <div className="flex grow dark:text-white max-sm:flex-col">
      <SideBar activeFunc={setActiveFunc} activeTab={activeTab}/>
      <div className="flex justify-center my-20 grow">
        {activeTab === 'Profile' && <ProfileSection />}
        {activeTab === 'my posts' && <MyPosts />}
        {activeTab === 'create post' && <CreatePost />}
      </div>
    </div>
  )
}

export default DashBoard