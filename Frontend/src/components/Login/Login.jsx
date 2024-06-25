import { FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/login.gif";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CiLock, CiUnlock } from "react-icons/ci";
function Login() {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-10">
        <form action="" className="bg-slate-50 text-center p-10 w-[500px]">
          <h2 className="font-bold text-3xl mb-5">Welcome Back!</h2>
          <p>Your friends are waiting...</p>
          <input
            type="text"
            placeholder="Enter your mail address"
            className="w-full py-3 px-4 rounded-lg mb-5 mt-3 border outline-none"
          />
          <div className="relative w-full">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full py-3 px-4 rounded-lg mb-5 border outline-none"
            />
            {isPasswordVisible ? (
              <CiUnlock
                className="text-blue text-lg absolute right-3 top-4 cursor-pointer"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              />
            ) : (
              <CiLock
                className="text-blue text-lg absolute right-3 top-4 cursor-pointer"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              />
            )}
          </div>
          <button
            className="bg-blue w-full py-2 text-white text-xl mb-3"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Log In
          </button>
          <div className="flex justify-center items-center gap-2 my-2">
            <hr className="bg-slate-400" />
            <span>or</span>
            <hr className="bg-slate-400" />
          </div>
          <div className="flex items-center justify-center gap-3 border-2 py-2 rounded-md w-full mb-2 cursor-pointer">
            <FaGoogle />
            <span className="font-semibold text-lg">Google</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p>
              Don&apos;t have an account?{" "}
              <Link className="text-blue" to="/register">
                Register
              </Link>
            </p>
            <p className="cursor-pointer">Forget Password?</p>
          </div>
        </form>
        <img src={loginImg} alt="" />
      </div>
    </>
  );
}

export default Login;
