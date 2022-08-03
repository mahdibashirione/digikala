import { useFormik } from "formik";
import * as yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import Input from "../common/Input";
import { http } from "../../services/httpService";
import { useAuthAction } from "../../context/Auth/AuthProvider";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Loading from "../Loading/Loading"

const Login = () => {

  const [loading, setLoading] = useState(false)
  const initialValues = { email: "", password: "", }
  const navigate = useNavigate()
  const setAuth = useAuthAction()

  const onSubmit = (values) => {
    http.post("/user/login", values)
      .then(res => {
        setLoading(true)
        navigate("/")
        setAuth(res.data)
        localStorage.setItem("AuthState", JSON.stringify(res.data))
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        toast.error(error.response.data.message);
      })
  }

  const validationSchema = yup.object().shape({
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
        className="z-30"
      />
      {loading && <Loading />}
      <form onSubmit={formik.handleSubmit} className="w-full max-w-[400px] px-8 md:border rounded-lg flex flex-col items-center justify-center">
        <div className="w-full max-w-[150px]">
          <img className="w-full object-cover py-8" src="/image/logo/logo.svg" alt="logoSite" />
        </div>
        <h2 className="select-none font-sans text-2xl text-bold w-full text-right mb-9">ورود</h2>
        <div className="mb-4 select-none gap-y-1.5 font-sans text-sm text-slate-600 w-full flex flex-col items-start justify-center">
          <span>سلام!</span>
          <p>لطفا ایمیل و رمز خود را وارد کنید</p>
        </div>
        <Input formik={formik} lable="email" type={"email"} name="email" />
        <Input formik={formik} lable="password" type={"password"} name="password" />
        <button type="submit" disabled={!formik.isValid} className={`${!formik.isValid ? "opacity-50" : "opacity-100"} w-full mt-8 p-4 bg-red-500 text-center rounded-lg font-sans text-white`}>ورود</button>
        <p className="select-none font-sans whitespace-pre-wrap text-sm text-slate-800 flex items-center justify-center mt-6 mb-10">
          ورود شما به معنای پذیرش
          <Link to={"#"} className="block mx-2 whitespace-nowrap font-sans text-[12px] text-blue-700">قوانین حریم خصوصی</Link>
          است
        </p>
      </form>
    </section >
  );
}

export default Login;