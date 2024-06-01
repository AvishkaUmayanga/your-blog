import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { app } from "../../firebase";
import { useGoogleSignInMutation } from "../../redux/api/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/slices/userSlice";

const OAuth = () => {
  const [signInData] = useGoogleSignInMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleGoogleSignIn = async() => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({prompt: 'select_account'})
    
    try{
        const resultsFromGoogle = await signInWithPopup(auth, provider)
        const userData = {
          userName: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googleProfileImg: resultsFromGoogle.user.photoURL
        }
        
        const response = await signInData(userData)
        if(response.data.message === 'Login successfull'){
          dispatch(signInSuccess(true))
          navigate('/')
        }
    }
    catch(error){
        console.log(error)
    }
  }  
  
  return (
    <button onClick={handleGoogleSignIn} type="submit" className="w-full border border-blue-300 hover:bg-blue-700 duration-200 dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base  py-2.5  dark:focus:ring-blue-800 flex justify-center items-center gap-1 group">
      <FcGoogle /> 
      <p className=" group-hover:text-white">Continue with Google</p>
    </button>
  )
}

export default OAuth
