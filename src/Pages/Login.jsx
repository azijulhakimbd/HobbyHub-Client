import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";

const Login = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const { userLogin, googleLogin, setUser } = useContext(AuthContext);
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
    <div className="min-h-screen bg-base-200 text-base-content">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="canonical" href="https://b11-a10-papiya.netlify.app/login" />
      </Helmet>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-base-100 text-base-content p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={["Welcome back to Login Page", "Login to your account"]}
            />
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="font-semibold mb-1 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label htmlFor="password" className="font-semibold mb-1 block">
                Password
              </label>
              <div className="relative">
                <input
                  type={isEyeOpen ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-12"
                />
                <span
                  onClick={() => setIsEyeOpen(!isEyeOpen)}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-xl text-gray-500"
                >
                  {isEyeOpen ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>

            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <Link to="/register" className="text-primary font-semibold">
                Register
              </Link>
            </p>
          </form>

          <div className="divider">OR</div>

          {/* Google Login */}
          <button
            onClick={handleGLogin}
            className="btn btn-outline w-full flex justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
