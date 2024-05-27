import { ChangeEvent, FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const inputStyle = "block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-blue-400  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:outline-blue-500"
  
  interface SignupData{
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
  }
  
  interface InputErrors{
    userName?: string,
    email?: string
    password?: string
    confirmPassword?: string
  }
  
  const [formData, setFormData] = useState<SignupData>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [errors, setErrors] = useState<InputErrors>({})
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }
  
  const handleSubmit = (e: FormEvent) =>{
    e.preventDefault()
    const validationErrors: InputErrors = {}

    if(!formData.userName.trim()){
      validationErrors.userName = '* Username is required'
    }
  
    if(!formData.email.trim()){
        validationErrors.email = '* Email is required'
    }else if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)){
      validationErrors.email = '* email is not valid'
    }
    
    if(!formData.password.trim()){
        validationErrors.password = '* password is required'
    }else if(formData.password.length < 6){
        validationErrors.password = '* password should be at least 6 characters'
    }

    if(!formData.confirmPassword.trim()){
        validationErrors.confirmPassword = '* comfirm password is required'
    }
    else if(formData.confirmPassword !== formData.password){
        validationErrors.confirmPassword = '* Passwords do not match'
    }
    setErrors(validationErrors)
    
    if(Object.keys(validationErrors).length === 0) {
      console.log(formData);
    }
  }
  
  return (
    <div className="flex items-center justify-center w-full my-32 lg:my-10">
      <div className="p-5 bg-white rounded-lg shadow sm:w-1/2 border xl:w-1/3 dark:bg-gray-800 dark:border-gray-700 w-96 max-[385px]:w-[360px]">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <h1 className="text-xl font-semibold text-center md:text-2xl dark:text-white">Sign Up </h1>
          <div>
            <label htmlFor="userName" className="block mb-2 font-medium text-gray-900 dark:text-white">Your username</label>
            <input onChange={handleChange} type="text" name="userName" id="userName" className={inputStyle}  />
            {errors.userName && <span className="text-red-500 ">{errors.userName}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white">Your email</label>
            <input onChange={handleChange} type="email" name="email" id="email" className={inputStyle} placeholder="name@company.com" />
            {errors.email && <span className="text-red-500 ">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 font-medium text-gray-900 dark:text-white">Password</label>
            <input onChange={handleChange} type="password" name="password" id="password" placeholder="******" className={inputStyle} />
            {errors.password && <span className="text-red-500 ">{errors.password}</span>}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 font-medium text-gray-900 dark:text-white">Confirm Password</label>
            <input onChange={handleChange} type="password" name="confirmPassword" id="confirmPassword" placeholder="******" className={inputStyle} />
            {errors.confirmPassword && <span className="text-red-500 ">{errors.confirmPassword}</span>}
          </div>
          <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center dark:focus:ring-blue-800">Sign Up</button>
          <button type="submit" className="w-full border border-blue-300 hover:bg-blue-700 duration-200 dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base  py-2.5  dark:focus:ring-blue-800 flex justify-center items-center gap-1 group"><FcGoogle /> <p className=" group-hover:text-white">Continue with Google</p></button>
          <p className="text-gray-500 dark:text-gray-400">
            Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login</Link>
          </p>
          {/* <div className="flex items-center justify-center w-full py-5 text-white bg-red-400 rounded">
            <p>Error message is here</p>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default SignupPage