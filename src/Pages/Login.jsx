import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
     const [isEyeOpen, setIsEyeOpen] = useState(false);
  const { userLogin, googleLogin, setUser } = React.useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in successfully!");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed. Please check your credentials.");
      });
  };

  const handleGLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Google Login Successful");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Google Login Failed");
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen dark:bg-gray-50 dark:text-gray-800">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login</title>
          <link
            rel="canonical"
            href="https://subscription-athentication.netlify.app/login"
          />
        </Helmet>

        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Login to your account
          </h2>
          <div className="border-t border-gray-200 mb-6"></div>

          <form onSubmit={handleLogin} className="space-y-5">
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
                  placeholder="Enter your password"
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

            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded hover:bg-gray-800"
            >
              Login
            </button>

            <p className="mt-3 text-center text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-green-500 font-semibold">
                Register
              </Link>
            </p>
          </form>

          {/* Google Login */}
          <div className="p-5 items-center">
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

export default Login;
