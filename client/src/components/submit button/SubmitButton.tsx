
type buttonProps = {
    buttonTxt: string
}
const SubmitButton = ({buttonTxt}: buttonProps) => {
  return (
    <div>
      <button type="submit" className="w-full border border-blue-300 hover:bg-blue-700 duration-200 dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base  py-2.5  dark:focus:ring-blue-800 group"> <p className=" group-hover:text-white">{buttonTxt}</p></button>
    </div>
  )
}

export default SubmitButton
