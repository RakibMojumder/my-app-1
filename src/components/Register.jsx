import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AUTH_CONTEXT } from "../contexts/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AUTH_CONTEXT);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((res) => console.log(res.user))
      .catch((e) => console.log(e));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-1/3 border p-7">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="border py-1.5 pl-3 w-full"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <div className="mt-3">
            <input
              type="password"
              placeholder="Password"
              className="border py-1.5 pl-3 w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 character",
                },
                maxLength: {
                  value: 12,
                  message: "Password cannot exceed more than 12 characters",
                },
              })}
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full py-2 uppercase bg-orange-500 text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
