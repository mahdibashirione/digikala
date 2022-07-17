import { useFormik } from "formik";
import * as yup from 'yup';
import { Link } from "react-router-dom";
import Input from "../common/Input";
import { ToastContainer, toast } from 'react-toastify';
import { http } from "../../services/httpService";
const Login = () => {
  const initialValues = { email: "", password: "", }

  const onSubmit = (values) => {
    http.post("/user/login", values).then(res => {
      toast.success('شما وارد شدید', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
      .catch(error => {
        toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  }

  const validationSchema = yup.object().shape({
    email: yup.string().email("ایمیل شما نامعتبر است")
      .required("لطفا ایمیل خود را وارد کنید"),
    password: yup.string().required("لطفا رمز خود را وارد کنید"),
  })

  const formik = useFormik({ initialValues, onSubmit, validationSchema, validateOnMount: true, })
  return (
    <section className="fixed w-screen h-screen z-50 top-0 right-0 bg-white flex flex-col items-center justify-center" >
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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