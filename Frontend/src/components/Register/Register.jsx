// import { FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/login.gif";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CiLock, CiUnlock } from "react-icons/ci";
function Register() {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        headers: { "content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      console.log(data);

      if (!data.error) {
        setLoading(false);
        navigate("/login");
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-10">
        <img src={loginImg} alt="" />
        <form
          onSubmit={handleLogin}
          className="bg-slate-50 text-center p-10 max-w-lg"
        >
          <h2 className="font-bold text-3xl mb-5">Dev Colab!</h2>
          <p>The best platform for collaboration...</p>
          <input
            type="text"
            placeholder="enter your full name"
            name="displayName"
            className="w-full py-3 px-4 rounded-lg mb-5 mt-3 border outline-none"
            onChange={(e) => handleChange(e)}
          />
          <div className="flex justify-between items-center gap-1">
            <input
              type="text"
              placeholder="enter your username"
              name="username"
              className="w-full py-3 px-4 rounded-lg mb-5 mt-3 border outline-none"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              name="email"
              placeholder="enter your email address"
              className="w-full py-3 px-4 rounded-lg mb-5 mt-3 border outline-none"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex justify-between items-center gap-1 relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="enter your password"
              name="password"
              className="w-full py-3 px-4 rounded-lg mb-5 border outline-none"
              onChange={(e) => handleChange(e)}
            />
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="re-type your password"
              className="w-full py-3 px-4 rounded-lg mb-5 border outline-none"
              onChange={(e) => handleChange(e)}
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
            disabled={loading}
          >
            {loading ? "loading..." : "Sign Up"}
          </button>
          <div className="flex justify-center items-center gap-2 my-2">
            <hr className="bg-slate-400" />
            <span>or</span>
            <hr className="bg-slate-400" />
          </div>
          <div className="flex items-center justify-center gap-3 border-2 py-2 rounded-md w-full mb-2 cursor-pointer">
            {/* <FaGoogle /> */}
            <img
              src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png"
              alt=""
              className="w-6"
            />
            <span className="font-semibold text-lg">Google</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p>
              Already have an account?{" "}
              <Link className="text-blue" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
