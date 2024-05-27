import SubmitButton from "../submit button/SubmitButton"

const CreatePost = () => {
    const inputStyles = "block bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-blue-400  w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:outline-blue-500 max-sm:p-2"
    
    return (
      <form className="flex flex-col w-1/2 gap-6 p-5 drop-shadow-lg max-lg:w-3/4">
        <h2 className="text-3xl font-semibold text-center max-md:text-2xl">Create Post</h2>
        <input type="text" name="userName" id="userName" className={inputStyles} placeholder="Title" />
        <textarea name="postText" id="postText" rows={10} className={inputStyles}></textarea>
        <SubmitButton buttonTxt='Publish' />
      </form>
    )
}

export default CreatePost
