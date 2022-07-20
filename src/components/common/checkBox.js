const CheckBox = ({ lable, name, value }) => {
  return (
    <div className='w-full flex items-center gap-x-2 px-4 hover:bg-slate-100 rounded-md'>
      <input type={"checkbox"} className="peer w-5 h-5 cursor-pointer hidden" value={value} id={value} name={name} />
      <span className='w-5 h-5 border-gray-400 border rounded peer-checked:bg-red-500 peer-checked:border-red-500'></span>
      <label htmlFor={value} className='cursor-pointer py-3 w-full'>{lable}</label>
    </div>
  );
}

export default CheckBox;