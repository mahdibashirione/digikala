import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="fixed w-screen h-screen z-50 top-0 right-0 bg-white flex flex-col items-center justify-center">
      <form className="w-full max-w-[400px] px-8 md:border rounded-lg flex flex-col items-center justify-center">
        <div className="w-full max-w-[150px]">
          <img className="w-full object-cover py-8" src="/image/logo/logo.svg" alt="logoSite" />
        </div>
        <h2 className="select-none font-sans text-2xl text-bold w-full text-right mb-9">ورود | ثبت نام</h2>
        <div className="select-none gap-y-1.5 font-sans text-sm text-slate-600 w-full flex flex-col items-start justify-center">
          <span>سلام!</span>
          <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
        </div>
        <div className="w-full">
          <input type={"text"} className="peer focus:border-blue-500 invalid:border-red-500 outline-none border rounded-lg w-full p-3 mt-5 mb-8" />
          <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </div>
        <button className="w-full p-4 bg-red-500 text-center rounded-lg font-sans text-white">ورود</button>
        <p className="select-none font-sans whitespace-pre-wrap text-sm text-slate-800 flex items-center justify-center mt-6 mb-10">
          ورود شما به معنای پذیرش
          <Link to={"#"} className="block mx-2 whitespace-nowrap font-sans text-[12px] text-blue-700">قوانین حریم خصوصی</Link>
          است
        </p>
      </form>
    </section>
  );
}

export default Login;