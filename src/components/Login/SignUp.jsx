import React, { useRef, useState } from "react";
import showpassword from "../../assets/showpassword.svg";
import hidepassword from "../../assets/hidepassword.svg";
import google from "../../images/google.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import { Link,useNavigate } from "react-router-dom";
 
 import { toast } from "react-toastify";
import axios from "axios";
 

const SignUp = () => {
  const [showPassword, setShowPassword] = useState("password");

  const [firstName,setFirstName]= useState("")
  const [lastName,setLastName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const show = useRef(null);
 const navigate= useNavigate()

 
 const signUp = async () => {
    try {
      const res = await axios.post(
        " http://localhost:7000/auth/signup",
        { firstName,lastName,email, password },
        { withCredentials: true }
      );

      toast.success("User Added Successfully!", { autoClose: 1000 });
      setTimeout(() => {
       
          navigate("/");
        
      }, 1000);
    } catch (err) {
      toast.error("Signup Failed: " + (err.response?.data || err.message), {
        autoClose: 2000,
      });
    }
  };
  

  const hideShow = () => {
    if (showPassword === "password") {
      setShowPassword("text");
      show.current.src = showpassword;
    } else {
      setShowPassword("password");
      show.current.src = hidepassword;
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-200 to-pink-100 w-full h-screen flex items-center justify-center">
        <div className="bg-black/10 w-100 rounded z-10 text-black p-5 shadow-2xl">
          <div className="text-4xl text-center mb-5 font-bold">Sign Up</div>

<div className="border rounded mb-5 flex justify-between items-center">
            <input
              type="text"
              placeholder="Enter first name"
              className="p-1.5 w-full outline-none"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="border rounded mb-5 flex justify-between items-center">
            <input
              type="text"
              placeholder="Enter last name"
              className="p-1.5 w-full outline-none"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          
          
          <div className="border rounded mb-5 flex justify-between items-center">
            <input
              type="text"
              placeholder="Enter your Email"
              className="p-1.5 w-full outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="border rounded mb-5 flex justify-between items-center">
            <input
              type={showPassword}
              placeholder="Enter your Password"
              className="p-1.5 w-full outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="px-3 w-11 cursor-pointer">
              <img src={showpassword} alt="" onClick={hideShow} ref={show} />
            </div>
          </div>

          <div className="text-[12px] font-bold flex justify-between items-center mb-5">
            <div className="flex justify-around gap-1">
              <input type="checkbox" />
              <div>Remember Me</div>
            </div>
            <div>
              Already have an account?{" "}
              <Link to="/" className="text-blue-800 underline">
                Sign In
              </Link>
            </div>
          </div>

          <button
            className="mb-5 w-full p-1 rounded bg-blue-900 text-white outline-none cursor-pointer active:scale-90 transition-all"
         onClick={signUp}
          >
            Sign Up
          </button>

          <div className="flex items-center mb-5">
            <hr className="flex-grow border-t border-black" />
            <span className="mx-2 text-[12px] text-gray-600">ACCESS QUICKLY</span>
            <hr className="flex-grow border-t border-black" />
          </div>

          <div className="flex justify-around gap-2">
            <div className="border py-0.5 px-4 rounded cursor-pointer active:scale-90 transition-all font-bold flex justify-center gap-2 items-center"  >
              <img src={google} alt="" className="w-6" />
              <div>Google</div>
            </div>

            <div className="border py-0.5 px-4 rounded cursor-pointer active:scale-90 transition-all font-bold flex justify-center gap-2 items-center">
              <img src={linkedin} alt="" className="w-6" />
              <div>LinkedIn</div>
            </div>

            <div className="border py-0.5 px-4 rounded cursor-pointer active:scale-90 transition-all font-bold flex justify-center gap-2 items-center">
              <img src={github} alt="" className="w-6" />
              <div>GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
