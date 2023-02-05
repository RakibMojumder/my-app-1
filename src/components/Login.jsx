import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AUTH_CONTEXT } from "../contexts/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AUTH_CONTEXT);
  const location = useLocation();
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    logIn(data.email, data.password)
      .then((res) => {
        toast.success("log in successful");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setError(e.messages);
        console.log(e);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center px-8 md:px-0">
      <div className="w-full md:w-1/2 lg:w-1/3 border p-7 rounded-xl">
        <h1 className="text-3xl text-slate-800 font-bold text-center mb-6">
          Log in
        </h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <input
              type="email"
              placeholder="Email"
              className={`border py-1.5 pl-3 w-full ${
                errors.email && "border-red-500 focus:outline-red-500"
              }`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mt-3">
            <input
              type="password"
              placeholder="Password"
              className={`border py-1.5 pl-3 w-full ${
                errors.password && "border-red-500 focus:outline-red-500"
              }`}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          <button
            type="submit"
            className="mt-4 w-full py-2 uppercase bg-[#F33823] text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
