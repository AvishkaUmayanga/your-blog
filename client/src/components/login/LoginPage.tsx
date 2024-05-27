import { ChangeEvent,  FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const inputStyles = "block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-blue-400  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:outline-blue-500"
  interface LoginData{
    email: string,
    password: string,
  }
  
  interface Errors{
    email?: string
    password?: string
  }
  
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  })
  
  const [errors, setErrors] = useState<Errors>({})
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target
    setLoginData({...loginData, [name]: value})
  }
  
  const handleSubmit = (e: FormEvent) =>{
    e.preventDefault()
    const validationErrors: Errors = {}
    if(!loginData.email.trim()){
        validationErrors.email = 'please enter your email'
    }
    if(!loginData.password.trim()){
        validationErrors.password = 'please enter your password'
    }
    setErrors(validationErrors)
    console.log(errors)
    if(Object.keys(validationErrors).length === 0) {
      console.log(loginData);
    }
  }
  
  return (
    <div className="flex items-center justify-center w-full my-32 lg:my-20">
      <div className="p-5 bg-white rounded-lg shadow sm:w-1/2 border xl:w-1/3 dark:bg-gray-800 dark:border-gray-700 w-96 max-[385px]:w-[360px]">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <h1 className="text-xl font-semibold text-center md:text-2xl dark:text-white">Sign in to your account</h1>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white">Your email</label>
            <input onChange={handleChange} type="email" name="email" id="email" className={inputStyles} placeholder="name@company.com" />
            {errors.email && <span className='text-red-500 '> * {errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 font-medium text-gray-900 dark:text-white">Password</label>
            <input onChange={handleChange} type="password" name="password" id="password" placeholder="******" className={inputStyles} />
            {errors.password && <span className='text-red-500 '> * {errors.password}</span>}
          </div>
          <div className="text-right ">
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
          </div>
          <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center dark:focus:ring-blue-800">Sign in</button>
          <button type="submit" className="w-full border border-blue-300 hover:bg-blue-700 duration-200 dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base  py-2.5  dark:focus:ring-blue-800 flex justify-center items-center gap-1 group"><FcGoogle /> <p className=" group-hover:text-white">Continue with Google</p></button>
          <p className="text-gray-500 dark:text-gray-400">
            Don&apos;t have an account yet? <Link to="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</Link>
          </p>
          <div className="flex items-center justify-center w-full py-5 text-white bg-red-400 rounded">
            <p>Error message is here</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
