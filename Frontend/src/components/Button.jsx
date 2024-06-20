

const Button = ({...props}) => {
    const baseClass = ' px-4 py-2 font-semibold rounded-full bg-black text-white '
  return (
    <div>
      <button className={`${baseClass}`}  {...props}>
      
      </button>
    </div>
  )
}

export default Button
