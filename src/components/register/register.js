import { useFormik } from "formik";
import * as yup from 'yup';
import Input from "../common/Input";
import { Toaster, toast } from "react-hot-toast";
import { http } from "../../services/httpService";
import { useNavigate } from "react-router-dom";
import { useAuthAction } from "../../context/Auth/AuthProvider";
import { useState } from "react";

const Register = () => {
  const initialValues = { email: "", password: "", name: "", phoneNumber: "" }
  const navigate = useNavigate()
  const setAuth = useAuthAction()
  const [loading, setLoading] = useState(false)

  const onSubmit = (values) => {
    http.post("/user/register", values).then(res => {
      setLoading(true)
      navigate("/")
      setAuth(res.data)
      localStorage.setItem("AuthState", JSON.stringify(res.data))
      setLoading(false)
    })
      .catch(error => {
        setLoading(false)
        if (error.response.data.message.startsWith("Email")) {
          toast.error("این ایمیل قبلا ثبت نام کرده است");
        } else if (error.response.data.message.startsWith("phone Number")) {
          toast.error("این شماره موبایل قبلا ثبت نام کرده است")
        } else {
          toast.error("خطا در ثیت نام لطفا بعدا تلاش کنید")
        }
      })
  }

  const validationSchema = yup.object().shape({
    name: yup.string().required("لطفا اسم خود را وارد کنید"),
    phoneNumber: yup.string().required("لطفا شماره موبایل خود را وارد کنید").min(11, "شماره موبایل صحیح نیست").max(11, "شماره مبایل صحیح نیست"),
    email: yup.string().email("ایمیل شما نامعتبر است")
      .required("لطفا ایمیل خود را وارد کنید"),
    password: yup.string().required("لطفا رمز خود را وارد کنید"),
  })

  const formik = useFormik({ initialValues, onSubmit, validationSchema, validateOnMount: true, })
  return (
    <section className="w-full h-screen bg-white flex flex-col items-center justify-center" >
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <form onSubmit={formik.handleSubmit} className="w-full max-w-[400px] px-8 md:border rounded-lg flex flex-col items-center justify-center">
        <div className="w-full max-w-[150px]">
          <img className="w-full object-cover py-8" src="/image/logo/logo.svg" alt="logoSite" />
        </div>
        <h2 className="select-none font-sans text-2xl text-bold w-full text-right mb-4">ثبت نام</h2>
        <Input formik={formik} lable="ّname" type={"text"} name="name" />
        <Input formik={formik} lable="phoneNumber" type={"text"} name="phoneNumber" inputMode={"numeric"} />
        <Input formik={formik} lable="email" type={"email"} name="email" />
        <Input formik={formik} lable="password" type={"password"} name="password" />
        <button type="submit" disabled={!formik.isValid} className={`${!formik.isValid ? "opacity-50" : "opacity-100"} w-full my-8 p-4 bg-red-500 text-center rounded-lg font-sans text-white`}>
          ثبت نام
        </button>
      </form>
    </section >
  );
}

export default Register;