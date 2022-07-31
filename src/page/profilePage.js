
import { useAuth } from "../context/Auth/AuthProvider"

const ProfileUser = () => {

  const auth = useAuth()

  return (
    <section className="w-full">
      <article className="w-full p-4 md:container gap-y-4 flex flex-col justify-start items-center">
        <div className="flex items-center justify-center gap-x-3 border-b py-4">
          <span>نام :</span>
          <span>{auth.name}</span>
        </div>
        <div className="flex items-center justify-center gap-x-3 border-b py-4">
          <span>ایمیل :</span>
          <span>{auth.email}</span>
        </div>
        <div className="flex items-center justify-center gap-x-3 border-b py-4">
          <span>شماره موبایل :</span>
          <span>{auth.phoneNumber}</span>
        </div>
      </article>
    </section>
  );
}

export default ProfileUser;