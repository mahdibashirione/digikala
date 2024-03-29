const Input = ({ formik, lable, name, type = "text", children, inputMode = "text" }) => {
  return (
    <div className="flex flex-col items-start gap-y-2 mt-5 w-full">
      <div className={`${!formik.errors[name] && formik.touched[name] && "border-blue-600"} bg-white overflow-hidden w-full flex items-center justify-start rounded-lg border ${formik.errors[name] && formik.touched[name] && "border-red-500"}`}>
        {children}
        <input
          type={type}
          name={name}
          {...formik.getFieldProps(name)}
          id={lable}
          className={`${!formik.errors[name] && formik.touched[name] && "text-blue-600"} w-full outline-none bg-white px-2 py-3`}
          placeholder={lable}
          inputMode={inputMode}
        />
      </div>
      {formik.errors[name] && formik.touched[name] && <span className="text-red-500 w-full text-right block">{formik.errors[name]}</span>}
    </div>
  );
}

export default Input;