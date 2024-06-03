import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
  const isUserLoggedIn = useSelector((state: RootState) => state.userSlice.isLoggedIn)  
  return (
    <>
      {isUserLoggedIn ? <Outlet/> : <Navigate to = '/login' />}
    </>
  )
}

export default PrivateRoutes
