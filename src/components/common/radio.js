const Radio = ({ value, name, lable }) => {
  return (
    <div className='w-full flex items-center gap-x-3 px-4 hover:bg-slate-100 rounded-md'>
      <input type={"radio"} className="peer w-4 h-4 cursor-pointer hidden" value={value} id={value} name={name} />
      <span className='w-4 h-4 border-white border rounded-full outline outline-2 outline-offset-2 outline-gray-400/80 peer-checked:bg-red-500 peer-checked:outline-red-500 peer-checked:border-red-500'></span>
      <label htmlFor={value} className='cursor-pointer py-3 w-full'>{lable}</label>
    </div>
  );
}

export default Radio;