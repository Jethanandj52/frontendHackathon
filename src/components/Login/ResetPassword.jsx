import React, { useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import showpassword from "../../assets/showpassword.svg";
import hidepassword from "../../assets/hidepassword.svg";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState("password");
  const show = useRef(null);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = async () => {
    if (!password || !confirmPassword) {
      toast.error("Please fill in both fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:7000/auth/reset-password/${token}`, {
        newPassword: password,
      });

      toast.success(res.data.message || "Password reset successful.");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };

  const togglePassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
      if (show.current) show.current.src = hidepassword;
    } else {
      setShowPassword("password");
      if (show.current) show.current.src = showpassword;
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-200 to-pink-100 w-full h-screen flex items-center justify-center">
      <div className="bg-black/10 w-100 rounded z-10 text-black p-5 shadow-2xl">
        <div className="text-4xl text-center mb-5 font-bold">Reset Password</div>

        <div className="border rounded mb-5 flex justify-between items-center">
          <input
            type={showPassword}
            placeholder="Enter your Password"
            className="p-1.5 w-full outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="px-3 w-11 cursor-pointer">
            <img src={showpassword} alt="toggle" onClick={togglePassword} ref={show} />
          </div>
        </div>

        <div className="border rounded mb-5 flex justify-between items-center">
          <input
            type={showPassword}
            placeholder="Enter your Confirm Password"
            className="p-1.5 w-full outline-none"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="px-3 w-11 cursor-pointer">
            <img src={showpassword} alt="toggle" onClick={togglePassword} />
          </div>
        </div>

        <div className="text-[12px] font-bold mb-5 text-right">
          <div>
            Back to login?{" "}
            <Link to="/" className="text-blue-800 underline">
              Sign In
            </Link>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="mb-5 w-full p-1 rounded bg-blue-900 text-white outline-none cursor-pointer active:scale-90 transition-all"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
