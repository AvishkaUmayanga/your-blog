import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { app } from "../../firebase";

const OAuth = () => {
  const handleGoogleSignIn = async() => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({prompt: 'select_account'})
    try{
        const resultFromGoogle = await signInWithPopup(auth, provider)
        console.log(resultFromGoogle)
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
