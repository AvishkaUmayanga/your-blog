import ProfileSection from "../profile section/ProfileSection";
import SideBar from "../sidebar/SideBar";
import MyPosts from "../my posts/MyPosts";
import CreatePost from "../create post/CreatePost";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const DashBoard = () => {
  const activeTab = useSelector((state: RootState) => state.sideBarSlice.activeTab)
  return (
    <div className="flex w-full dark:text-white max-sm:flex-col">
      <SideBar/>
      <div className="flex justify-center my-20 grow">
        {activeTab === 'Profile' && <ProfileSection />}
        {activeTab === 'my posts' && <MyPosts />}
        {activeTab === 'create post' && <CreatePost />}
      </div>
    </div>
  )
}

export default DashBoard