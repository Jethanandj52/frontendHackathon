import { useRef, useState } from "react";
import React from "react";
import showpassword from "../../assets/showpassword.svg"
import hidepassword from "../../assets/hidepassword.svg";
import google from "../../images/google.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7000/auth/login",
        { email, password },
        { withCredentials: true }
      );

      // ✅ Save user info (only email for now)
      localStorage.setItem("user", JSON.stringify({ email }));

      toast.success("Login Successful!", { autoClose: 1000 });

      setTimeout(() => {
        if (email === "admin@gmail.com") {
          navigate("/Dashboard");
        } else {
          navigate("/Home");
        }
      }, 1000);
    } catch (err) {
      toast.error("Login Failed: " + (err.response?.data || err.message), {
        autoClose: 2000,
      });
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="bg-gradient-to-br from-blue-200 to-pink-100 w-full h-screen flex items-center justify-center">
      <div className="bg-black/10 w-100 rounded z-10 text-black p-5 shadow-2xl">
        <div className="text-4xl text-center mb-5 font-bold">Sign In</div>

        <div className="border rounded mb-5 flex justify-between items-center">
          <input
            type="email"
            required
            placeholder="Enter your Email"
            className="p-1.5 w-full outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="border rounded mb-5 flex justify-between items-center">
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter your password"
            className="p-1.5 w-full outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="px-3 w-11 cursor-pointer">
            <img
              src={showPassword ? hidepassword : showpassword}
              alt=""
              onClick={togglePassword}
            />
          </div>
        </div>

        <div className="text-[12px] font-bold flex justify-between items-center mb-5">
          <Link
            to="/Forget"
            className="italic underline cursor-pointer text-blue-800"
          >
            Forgot password?
          </Link>
          <div>
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-blue-800 underline">
              Sign Up
            </Link>
          </div>
        </div>

        <button
          onClick={login}
          className="mb-5 w-full p-1 rounded bg-blue-900 text-white outline-none cursor-pointer active:scale-95 transition-all"
        >
          Sign In
        </button>

        <div className="flex items-center mb-5">
          <hr className="flex-grow border-t border-black" />
          <span className="mx-2 text-[12px] text-gray-600">ACCESS QUICKLY</span>
          <hr className="flex-grow border-t border-black" />
        </div>

        <div className="flex justify-around gap-2">
          <div className="border py-0.5 px-4 rounded cursor-pointer active:scale-95 transition-all font-bold flex justify-center gap-2 items-center">
            <img src={google} alt="Google" className="w-6" />
            <div>Google</div>
          </div>

          <div className="border py-0.5 px-4 rounded cursor-pointer active:scale-95 transition-all font-bold flex justify-center gap-2 items-center">
            <img src={linkedin} alt="Linkedin" className="w-6" />
            <div>Linkedin</div>
          </div>

          <div className="border py-0.5 px-4 rounded cursor-pointer active:scale-95 transition-all font-bold flex justify-center gap-2 items-center">
            <img src={github} alt="Github" className="w-6" />
            <div>Github</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
