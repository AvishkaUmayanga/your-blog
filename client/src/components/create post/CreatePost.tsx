import SubmitButton from "../submit button/SubmitButton"
import { CiText } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTitle, addPostBody, removeBodyItem, addPostImg, clearAllFields } from "../../redux/slices/postSlice";
import { RootState } from "../../redux/store/store";
import { useCreateNewPostMutation } from "../../redux/api/postApi";
import { getStorage, uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { app } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";

const CreatePost = () => {
    const inputStyles = "block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-blue-400  w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:outline-blue-500 max-sm:p-2"
    const [textType, setTextType] = useState<string>('text')
    const [titleInput, setTitleInput] = useState<string>('')
    const [postBodyInput, setPostBodyInput] = useState<string>('')
    const [imageFile, setImageFile] = useState<File >()
    const [imageFileUrl, setImageFileUrl] = useState<string>('')
    const title = useSelector((state: RootState) => state.postSlice.title)
    const postBody = useSelector((state: RootState) => state.postSlice.postBody)
    const postImg = useSelector((state: RootState) => state.postSlice.postImgUrl)
    const dispatch = useDispatch()
    const [postData] = useCreateNewPostMutation()
    
 //add title(redux)   
    const handleAddTitle = () => {
      dispatch(addTitle(titleInput))
      setTitleInput('')
    }
 //add body(redux)    
    const handleAddPostBody = () => {
      dispatch(addPostBody({postBodyInput, textType}))
      setPostBodyInput('')
    }

    const handleImgChange = async(e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0]
      if(file){
        setImageFile(file)
        setImageFileUrl(URL.createObjectURL(file))
      }
    }
    console.log(imageFile)
    console.log(imageFileUrl)
    useEffect(()=>{
      if(imageFile){
        handleUploadImage()
      }
    },[imageFile])
    
// upload image to firebase
    const handleUploadImage = async() => {
      const storage = getStorage(app)
      const fileName = new Date().getTime() + imageFile?.name
      const storageRef = ref(storage, 'post_images/' + fileName)
      const uploadTask = uploadBytesResumable(storageRef, imageFile)

      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          toast.info(`Uploading... ${progress.toFixed(2)}% done`);
        }, 
        (error) => {
          toast.error('File upload failed: ' + error.message);
          console.error(error);
        }, 
        () => {
          // Upload completed successfully
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            dispatch(addPostImg(downloadURL))
            toast.success('Image upload successfull')
          });
        }
      );
    }

//**add post details to database*/
    const handlePostSubmit = async() => {
      try{
        const allData = {title, postBody, postImg}
        const response = await postData(allData)
        if(response.error){
          toast.error(response.error.data?.message)
        }
        else{
          dispatch(clearAllFields())
          toast.success(response.data?.message)
        }
      }
      catch(error){
        console.log(error)
      }
    }

    return (
      <div className="flex flex-col items-center w-full">
      {/* preview post */}
      <div className="flex flex-col items-center w-full gap-10 px-10 py-16 dark:text-white">
        <h2 className='text-2xl font-semibold text-center'>{title}</h2>
        {imageFileUrl ? 
          <img src={imageFileUrl} alt="logo" className='w-1/3 ' /> :<></>
        }
        <div className='flex flex-col w-3/4 gap-5 max-sm:w-full'>
        {postBody?.map((details, index) => (
          <p key={index} className={`${details.textType === 'code' ? 'p-3 bg-gray-300 rounded dark:bg-gray-600' : ''} flex justify-between`}>
          {details.postBodytext}
          <span className="flex items-center ml-4">
            <FiMinusCircle onClick={() => dispatch(removeBodyItem(index))} 
            className={ postBody ? 'text-3xl cursor-pointer max-sm:text-xl' : 'hidden'} />
          </span>
         </p>
        ))}
      </div>
      </div>
      {/* create post */}
        <div className="flex flex-col w-1/2 gap-6 p-5 drop-shadow-lg max-lg:w-3/4">
          <h2 className="text-3xl font-semibold text-center max-md:text-2xl">Create Post</h2>
            <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-end">
              <input type="text" name="postTitle" id="postTitle" 
              className={inputStyles} placeholder="Title"  
              value={titleInput} 
              onChange={(e)=> setTitleInput(e.target.value)} 
            />
            <button onClick={handleAddTitle} 
              className="px-3 text-white duration-200 bg-blue-500 rounded-md hover:scale-105">
              add
            </button>
          </div>
          <div className={`${inputStyles} w-[90%]`}>
            <input type="file" accept="image/*" onChange={handleImgChange}/>
          </div>
          <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-end">
            <textarea name="postText" id="postText" rows={8} 
              className={inputStyles}
              value={postBodyInput}
              onChange={(e)=> setPostBodyInput(e.target.value)} 
            />
            <div className="flex max-sm:w-full max-sm:justify-between sm:flex-col">
              <div className="flex gap-1 py-1">
                <button  onClick={()=>{setTextType('text')}}><CiText className={`${textType === 'text' ? 'bg-blue-500 fill-white' : ''}`}/></button>
                <button onClick={()=>{setTextType('code')}}><FaCode className={`${textType === 'code' ? 'bg-blue-500 fill-white' : ''}`} /></button>
              </div>
            <button onClick={handleAddPostBody} className="px-3 text-white duration-200 bg-blue-500 rounded-md hover:scale-105">add</button>
          </div> 
        </div>
        <SubmitButton onClick={handlePostSubmit} buttonTxt='Publish' />
      </div>
      <ToastContainer />
    </div>
    )
}

export default CreatePost
