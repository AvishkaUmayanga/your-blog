import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import SubmitButton from '../submit button/SubmitButton'
import { useGetUserDetailsQuery, useUpdateUserMutation } from '../../redux/api/userApi'
import { getStorage, uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { app } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';

const ProfileSection = () => {
  const inputStyles = "block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-blue-400  w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:outline-blue-500 max-sm:p-2"
  
  const { data: userData, isSuccess } = useGetUserDetailsQuery({})
  const [imageFile, setImageFile] = useState<File >()
  const [imageFileUrl, setImageFileUrl] = useState<string | null>(null)
  const [userUpdateData, {isError, error}] = useUpdateUserMutation()
  const imageFileRef = useRef()

  interface UpdateData{
    userName: string,
    email: string,
    password: string,
    profilePicture: string
  }

  interface InputErrors{
    userName?: string,
    email?: string
    password?: string
  }
  
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File = e.target.files[0]
    if(file){
      setImageFile(file)
      setImageFileUrl(URL.createObjectURL(file))
    }
  }

  useEffect(()=>{
    if(imageFile){
      handleUploadImage()
    }
  },[imageFile])

  //**image upload to firebase **//
  const handleUploadImage = async() => {
    const storage = getStorage(app)
    const fileName = new Date().getTime() + imageFile?.name
    const storageRef = ref(storage, 'profile_images/' + fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        toast.info('uploading... please wait')
      }, 
      (error) => {
        toast.error('File must be less than 2MB')
        console.log(error)
      }, 
      () => {
        // Upload completed successfully
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUpdateData({...updateData, profilePicture: downloadURL})
          toast.success('Image upload successfull')
        });
      }
    );
  }
  
  const [updateData, setUpdateData] = useState<UpdateData>({
    userName: '',
    email: '',
    password: '',
    profilePicture: '',
  })
console.log(userData?.userData)
//**get user data**//
  useEffect(() => {
    if (isSuccess && userData) {
      setUpdateData({
        userName: userData.userData.userName ,
        email: userData.userData.email ,
        password: '',
        profilePicture: userData.userData?.profilePicture,
      });
    }
  }, [isSuccess, userData]);
  console.log(updateData)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target
    setUpdateData({...updateData, [name]: value})
  }

  const [errors, setErrors] = useState<InputErrors>({})
  
//**user details upload to database **//
  const handleUpdate = async(e: FormEvent) =>{
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
      const response = await userUpdateData(updateData)
      toast.success(response.data.message)
    }
  }
  
  useEffect(()=>{
    toast.error(error?.data?.message)
  }, [isError, error])

  return (
    <>
    {isSuccess && (
    <form onSubmit={handleUpdate} className="flex flex-col w-1/3 gap-6 max-lg:w-1/2 max-sm:w-2/3">
      <div className="flex flex-col items-center gap-5 text-3xl font-semibold max-md:text-2xl">
        <h2>Profile</h2>
        <input type='file' accept='image/*' onChange={handleImageChange} ref={imageFileRef} hidden />
          <img src={imageFileUrl || updateData?.profilePicture} alt="user" 
            onClick={()=> imageFileRef.current.click()}
            className='object-cover w-32 h-32 border rounded-full' 
          />
      </div>
      <div>
        <input onChange={handleChange} type="text" name="userName" id="userName" className={inputStyles} value={updateData?.userName} />
        {errors.userName && <span className="text-red-500 ">{errors.userName}</span>}
      </div>
      <div>
        <input onChange={handleChange} type="email" name="email" id="email" className={inputStyles} value={updateData?.email} />
        {errors.email && <span className="text-red-500 ">{errors.email}</span>}
      </div>
      <div>
        <input onChange={handleChange} type="password" name="password" id="password" className={inputStyles} value={updateData?.password} />
        {errors.password && <span className="text-red-500 ">{errors.password}</span>}
      </div>
      <SubmitButton buttonTxt='Update'/>
      <div className='flex justify-between text-red-600 dark:text-red-500'>
        <p className='cursor-pointer '>Delete Account</p>
        <p className='cursor-pointer '>Sign out</p>
      </div>
      <ToastContainer />
     </form>
     )}
     </>
  )
}

export default ProfileSection
