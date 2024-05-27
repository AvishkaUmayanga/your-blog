import { ChangeEvent, FormEvent, useState } from 'react'
import testImg from '../../assets/userTest.png'
import SubmitButton from '../submit button/SubmitButton'

const ProfileSection = () => {
  const inputStyles = "block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-blue-400  w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:outline-blue-500 max-sm:p-2"
  
  interface UpdateData{
    userName: string,
    email: string,
    password: string,
  }

  interface InputErrors{
    userName?: string,
    email?: string
    password?: string
  }
  
  const [updateData, setUpdateData] = useState<UpdateData>({
    userName: 'avishka97',
    email: 'avishka97@gmail.com',
    password: ''
  })
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target
    setUpdateData({...updateData, [name]: value})
  }

  const [errors, setErrors] = useState<InputErrors>({})
  
  const handleUpdate = (e: FormEvent) =>{
    e.preventDefault()

    const validationErrors: InputErrors = {}

    if(!updateData.userName.trim()){
      validationErrors.userName = '* Username is required'
    }
    
    if(!updateData.email.trim()){
      validationErrors.email = '* Email is required'
    }
    
    if(!updateData.password.trim()){
      validationErrors.password = '* Password is required'
    }
    
    setErrors(validationErrors)
    if(Object.keys(validationErrors).length === 0) {
      console.log(updateData);
    }
  }
  return (
    <form onSubmit={handleUpdate} className="flex flex-col w-1/3 gap-6 max-lg:w-1/2 max-sm:w-2/3">
      <div className="flex flex-col items-center gap-5 text-3xl font-semibold max-md:text-2xl">
        <h2>Profile</h2>
        <img src={testImg} alt="user" className='object-cover w-32 h-32 border rounded-full' />
      </div>
      <div>
        <input onChange={handleChange} type="text" name="userName" id="userName" className={inputStyles} value={updateData.userName} />
        {errors.userName && <span className="text-red-500 ">{errors.userName}</span>}
      </div>
      <div>
        <input onChange={handleChange} type="email" name="email" id="email" className={inputStyles} value={updateData.email} />
        {errors.email && <span className="text-red-500 ">{errors.email}</span>}
      </div>
      <div>
        <input onChange={handleChange} type="password" name="password" id="password" className={inputStyles} value={updateData.password} />
        {errors.password && <span className="text-red-500 ">{errors.password}</span>}
      </div>
      <SubmitButton buttonTxt='Update'/>
      <div className='flex justify-between text-red-600 dark:text-red-500'>
        <p className='cursor-pointer '>Delete Account</p>
        <p className='cursor-pointer '>Sign out</p>
      </div>
     </form>
  )
}

export default ProfileSection
