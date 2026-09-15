import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  console.log("register login in", location);

  const handleRegistration = (data) => {
    console.log("After Register", data.photo[0]);
    const profileImg = data.photo[0];

    registerUser(data.email, data.password).then((result) => {
      console.log(result.user);
      //1  stoere the image in form Data
      const formData = new FormData();
      formData.append("image", profileImg);

      //2   send The photo tostore and get the url
      const image_Api_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
      axios.post(image_Api_Url, formData).then((res) => {
        console.log("after image Upload", res.data.data.url);

        //3  update User Profile to firebase
        const userProfile = {
          displayName: data.name,
          photoURL: res.data.data.url,
        };
        updateUserProfile(userProfile)
          .then((result) => {
            console.log("User profile Updated done", result);
            navigate(location?.state || "/");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
      <h3 className="text-3xl text-center font-bold py-5">
        Welcome to ZapShift
      </h3>
      <p className="text-center">Please Register</p>

      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          {/* Name */}

          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is Required</p>
          )}

          {/*Photo img Field */}

          <label className="label">Photo Url</label>

          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your Photo"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">photo is Required</p>
          )}

          {/* Email */}

          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is Required</p>
          )}

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).+$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is Required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">password must be 6 chracter longer</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must contain at least one uppercase letter, one lowercase
              letter, one number, and one special character.{" "}
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Rgister</button>
        </fieldset>

        <p>
          Already have an Account
          <Link
            state={location?.state}
            className="text-blue-500 font-bold underline"
            to={"/login"}
          >
            Login
          </Link>
        </p>

        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
