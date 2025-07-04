import React, { useState, useContext } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../Context/AuthContext";
import { Helmet } from "react-helmet";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const { userRegister, googleLogin, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password Validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpperCase || !hasLowerCase || !isLongEnough) {
      toast.error(
        "Password must be at least 6 characters and include uppercase & lowercase letters."
      );
      return;
    }

    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Registered Successfully");
            navigate(location.state ? location.state : "/");
          })
          .catch((err) => {
            console.error(err);
            toast.error("Profile update failed");
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Registration failed. Please try again.");
      });
  };

  const handleGLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Google Login Successful");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("Google Login Failed");
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-base-100 p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={["Welcome to Register Page", "Register your account"]}
            />
          </h2>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label htmlFor="name" className="font-semibold mb-1 block">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your full name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label htmlFor="photo" className="font-semibold mb-1 block">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                required
                placeholder="Link to your profile photo"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-semibold mb-1 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
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
                  placeholder="Create a password"
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

            <div className="flex items-center gap-2">
              <input type="checkbox" required className="checkbox" />
              <label className="text-sm">
                I agree to the{" "}
                <span className="font-semibold text-primary">
                  Terms & Conditions
                </span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>

            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold">
                Login
              </Link>
            </p>
          </form>

          <div className="divider">OR</div>

          {/* Google Login Button */}
          <button
            onClick={handleGLogin}
            className="btn btn-outline w-full flex justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            Register with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
