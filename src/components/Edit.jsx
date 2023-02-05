import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateDoc, doc } from "@firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../firebase/firebase.config";
import { toast } from "react-hot-toast";

const Edit = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateStudent = async (data) => {
    const studentDoc = doc(db, "students", state.data.id);
    await updateDoc(studentDoc, data);
    toast.success("student info update successful");
    navigate("/manageStudent");
  };

  return (
    <div className="p-8 bg-orange-100">
      <h1 className="text-xl md:text-3xl text-slate-800 font-bold uppercase mb-4">
        Update student info
      </h1>
      <form
        onSubmit={handleSubmit(handleUpdateStudent)}
        className="md:space-y-3"
      >
        <div className="md:flex items-center gap-5">
          <div className="w-full">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              defaultValue={state.data.firstName}
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-5 md:mb-0 ${
                errors.firstName && "border-red-500 focus:outline-red-500"
              }`}
              {...register("firstName", { required: "This field is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div className="w-full">
            <label>Middle Name</label>
            <input
              type="text"
              placeholder="Middle Name"
              defaultValue={state.data.middleName}
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-5 md:mb-0 ${
                errors.middleName && "border-red-500 focus:outline-red-500"
              }`}
              {...register("middleName", {
                required: "This field is required",
              })}
            />
            {errors.middleName && (
              <p className="text-red-500 text-sm">
                {errors.middleName.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              defaultValue={state.data.lastName}
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-5 md:mb-0 ${
                errors.lastName && "border-red-500 focus:outline-red-500"
              }`}
              {...register("lastName", { required: "This field is required" })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="md:flex items-center gap-5">
          <div className="w-full">
            <label>Class</label>
            <select
              defaultValue={state.data.class}
              className="w-full py-1.5 pl-2 border rounded-md bg-white placeholder:text-slate-800"
            >
              <option>Select Class</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
              <option value="V">V</option>
              <option value="VI">VI</option>
              <option value="VII">VII</option>
              <option value="VIII">VIII</option>
              <option value="IX">IX</option>
              <option value="X">X</option>
              <option value="XI">XI</option>
              <option value="XII">XII</option>
            </select>
          </div>
          <div className="w-full">
            <label>Section</label>
            <select
              defaultValue={state.data.division}
              className="w-full py-1.5 pl-2 border rounded-md bg-white placeholder:text-slate-800"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
          <div className="w-full">
            <label>Roll</label>
            <input
              type="Number"
              defaultValue={state.data.roll}
              placeholder="Enter Roll Number in Digit"
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-5 md:mb-0 ${
                errors.roll && "border-red-500 focus:outline-red-500"
              }`}
              {...register("roll", {
                required: "This field is required",
                maxLength: {
                  value: 2,
                  message: "Maximum 2 digit",
                },
              })}
            />
            {errors.roll && (
              <p className="text-red-500 text-sm">{errors.roll.message}</p>
            )}
          </div>
        </div>
        <div className="md:flex items-center gap-5">
          <div className="w-full">
            <label>Address Line 1</label>
            <textarea
              name=""
              id=""
              rows="1"
              defaultValue={state.data.addressOne}
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-5 md:mb-0 ${
                errors.addressOne && "border-red-500 focus:outline-red-500"
              }`}
              placeholder="Address Line 1"
              {...register("addressOne", {
                required: "This filed is required",
              })}
            />
            {errors.addressOne && (
              <p className="text-red-500 text-sm">
                {errors.addressOne.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label>Address Line 2</label>
            <textarea
              name=""
              id=""
              rows="1"
              defaultValue={state.data.addressTwo}
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-5 md:mb-0 ${
                errors.addressTwo && "border-red-500 focus:outline-red-500"
              }`}
              placeholder="Address Line 1"
              {...register("addressTwo", {
                required: "This filed is required",
              })}
            />
            {errors.addressTwo && (
              <p className="text-red-500 text-sm">
                {errors.addressTwo.message}
              </p>
            )}
          </div>
        </div>
        <div className="md:flex items-center gap-5">
          <div className="w-full">
            <label>Landmark</label>
            <input
              type="text"
              placeholder="Land Mark"
              defaultValue={state.data.landmark}
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-5 md:mb-0 ${
                errors.landmark && "border-red-500 focus:outline-red-500"
              }`}
              {...register("landmark", { required: "This field is required" })}
            />
            {errors.landmark && (
              <p className="text-red-500 text-sm">{errors.landmark.message}</p>
            )}
          </div>
          <div className="w-full">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              defaultValue={state.data.city}
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-5 md:mb-0 ${
                errors.city && "border-red-500 focus:outline-red-500"
              }`}
              {...register("city", { required: "This field is required" })}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
          <div className="w-full">
            <label>Pin code</label>
            <input
              type="Number"
              placeholder="Pin Code"
              defaultValue={state.data.pinCode}
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-5 md:mb-0 ${
                errors.pinCode && "border-red-500 focus:outline-red-500"
              }`}
              {...register("pinCode", {
                required: "This field is required",
                maxLength: {
                  value: 6,
                  message: "Maximum 6 digit",
                },
                minLength: {
                  value: 6,
                  message: "Minimum 6 digit",
                },
              })}
            />
            {errors.pinCode && (
              <p className="text-red-500 text-sm">{errors.pinCode.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="px-14 py-1.5 bg-[#FF2108] text-white rounded-md uppercase"
        >
          update
        </button>
      </form>
    </div>
  );
};

export default Edit;
