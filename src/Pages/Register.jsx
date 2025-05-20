import React, { use, useState } from "react";

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

import { AuthContext } from "../Context/AuthContext";
import { Helmet } from "react-helmet";

const Register = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  const { userRegister, googleLogin, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const forData = new FormData(form);
    const email = forData.get("email");
    const password = forData.get("password");
    const photo = forData.get("photo");
    const name = forData.get("name");
    console.log(name, photo);
    // Password validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpperCase || !hasLowerCase || !isLongEnough) {
      toast.error(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }

    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Registered Successfully");
        navigate("/");
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Registration failed. Please try again.");
      });
  };

  const handleGLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Login Successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Google Login failed");
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen dark:bg-gray-50 dark:text-gray-800">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Register</title>
          <link rel="canonical" href="#" />
        </Helmet>

        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Register your account
          </h2>
          <div className="border-t border-gray-200 mb-6"></div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="photo" className="block font-semibold mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="w-full px-4 py-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-semibold mb-1">
                Password
              </label>
              <div className="w-full relative">
                <input
                  type={isEyeOpen ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                {isEyeOpen ? (
                  <IoEyeOutline
                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                    onClick={() => setIsEyeOpen(false)}
                  />
                ) : (
                  <IoEyeOffOutline
                    className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                    onClick={() => setIsEyeOpen(true)}
                  />
                )}
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-sm">
                Accept <span className="font-semibold">Term & Conditions</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded hover:bg-gray-800"
            >
              Register
            </button>

            <p className="mt-3 text-center text-sm">
              Already Have An Account?{" "}
              <Link to="/login" className="text-green-500 font-semibold">
                Login
              </Link>
            </p>
          </form>

          {/* Google Login */}
          <div className="p-5 items-center ml-18">
            <button
              onClick={handleGLogin}
              className="btn bg-white text-black border border-[#e5e5e5] px-4 py-2 rounded w-full mt-4 flex items-center justify-center gap-2"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#EA4335"
                  d="M496 256c0-16-1-32-4-48H256v91h135c-6 32-24 59-51 77v64h82c48-45 76-112 76-184z"
                />
                <path
                  fill="#34A853"
                  d="M256 512c69 0 127-23 170-62l-82-64c-23 16-53 25-88 25-67 0-123-45-143-105H27v66c43 85 132 144 229 144z"
                />
                <path
                  fill="#FBBC05"
                  d="M113 307c-9-27-9-56 0-83v-66H27c-39 77-39 170 0 247l86-66z"
                />
                <path
                  fill="#4285F4"
                  d="M256 100c37 0 70 13 96 39l72-72C387 24 327 0 256 0 159 0 70 59 27 144l86 66c20-60 76-105 143-105z"
                />
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
