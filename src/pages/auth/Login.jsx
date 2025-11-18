import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hook/useAuth";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { SignInUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log("form data", data);
    SignInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="max-w-md w-full flex flex-col justify-center "
    >
      <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
      <p className="text-gray-600 mb-8">Login with ZapShift</p>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
        </div>

        <div className="relative">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            type={showPass ? "text" : "password"}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must have at least 6 character
            </p>
          )}
          <div
            onClick={() => setShowPass(!showPass)}
            className="absolute text-gray-500 top-3/5 right-5 cursor-pointer"
          >
            <RxEyeOpen className={showPass ? "block" : "hidden"} />
            <RxEyeClosed className={!showPass ? "block" : "hidden"} />
          </div>
        </div>
      </div>

      <button className="text-sm text-gray-500 mt-2 mb-4 hover:underline w-fit">
        Forget Password?
      </button>

      <button className="w-full bg-primary hover:bg-primary text-black py-2 rounded-lg font-medium transition">
        Login
      </button>

      <p className="text-gray-600 text-sm mt-4">
        Don’t have any account?{" "}
        <Link
          to={"/register"}
          className="text-primary font-medium cursor-pointer"
        >
          Register
        </Link>
      </p>

      <div className="flex items-center my-4">
        <div className="grow h-px bg-gray-300" />
        <span className="px-3 text-gray-500 text-sm">Or</span>
        <div className="grow h-px bg-gray-300" />
      </div>

      <button
        type="button"
        onClick={handleSignInWithGoogle}
        className="w-full flex items-center justify-center gap-3 border border-gray-400 rounded-lg py-2 bg-gray-50 hover:bg-gray-100 transition font-medium"
      >
        <FcGoogle size={22} /> Login with Google
      </button>
    </form>
  );
};

export default Login;
