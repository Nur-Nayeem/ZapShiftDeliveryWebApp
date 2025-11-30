import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { signUpUser, signInWithGoogle, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log("form data", data);

    const profileImg =
      data.photo && data.photo.length > 0 ? data.photo[0] : null;

    signUpUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);

        // If no image selected, update profile with default image
        if (!profileImg) {
          const updateProfileInfo = {
            displayName: data.name,
            photoURL: "https://i.ibb.co/F7gM0Zk/default-profile.png", // optional default
          };

          updateUserProfile(updateProfileInfo)
            .then(() => {
              const userDetails = {
                email: data.email,
                displayName: data.name,
                photoURL: updateProfileInfo.photoURL,
              };

              axios.post("http://localhost:4000/user", userDetails).then(() => {
                Swal.fire({
                  title: "Registration successful",
                  icon: "success",
                });
                reset();
                navigate("/");
              });
            })
            .catch((err) => console.log(err));

          return; // STOP execution here
        }

        // If image exists, upload it
        const formData = new FormData();
        formData.append("image", profileImg);

        const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_Image_Host
        }`;

        axios
          .post(imageApiUrl, formData)
          .then((res) => {
            const updateProfileInfo = {
              displayName: data.name,
              photoURL: res.data.data.url,
            };

            updateUserProfile(updateProfileInfo).then(() => {
              const userDetails = {
                email: data.email,
                displayName: data.name,
                photoURL: updateProfileInfo.photoURL,
              };

              axios.post("http://localhost:4000/user", userDetails).then(() => {
                Swal.fire({
                  title: "Registration successful",
                  icon: "success",
                });

                reset();
                navigate("/");
              });
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        const userInfo = {
          email: res.user.email,
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        };
        axios
          .post("http://localhost:4000/user", userInfo)
          .then((res) => {
            Swal.fire({
              title: "login succefull",
              icon: "success",
            });
            console.log("user data has been stored", res.data);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="max-w-md w-full flex flex-col justify-center "
    >
      <h1 className="text-4xl font-bold mb-2">Create an Account</h1>
      <p className="text-gray-600 mb-8">Sign up with ZapShift</p>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">
            Profile Image
          </label>
          <input
            {...register("photo")}
            type="file"
            className="file-input w-full"
          />
        </div>
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
            type={showPass ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            })}
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
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must have at least one uppercase, at least one lowercase,
              at least one number, and at least one special characters
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
        Aready have an account?{" "}
        <Link to={"/login"} className="text-primary font-medium cursor-pointer">
          Login
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

export default Register;
