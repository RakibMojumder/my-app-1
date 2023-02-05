import React from "react";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase/firebase.config";
import { toast } from "react-hot-toast";
import { format } from "date-fns";

const AddStudent = () => {
  const studentCollections = collection(db, "students");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddStudent = async (data) => {
    await addDoc(studentCollections, data);
    toast.success("Student added successfully");
    reset();
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-base md:text-3xl text-slate-800 font-bold uppercase my-4">
          Add Student
        </h1>
        <p className="text-slate-800 font-semibold text-xs">
          {format(new Date(), "P")}
        </p>
      </div>
      <form onSubmit={handleSubmit(handleAddStudent)} className="md:space-y-5">
        <div className="md:flex items-center gap-5">
          <div className="w-full">
            <input
              type="text"
              placeholder="First Name"
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-3 md:mb-0 ${
                errors.firstName && "border-red-500 focus:outline-red-500"
              }`}
              {...register("firstName", { required: "This field is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Middle Name"
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-3 md:mb-0 ${
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
            <input
              type="text"
              placeholder="Last Name"
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-3 md:mb-0 ${
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
            <select
              defaultValue="Select Class"
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-3 md:mb-0 ${
                errors.class && "border-red-500 focus:outline-red-500"
              }`}
              {...register("class", { required: "This filed is required" })}
            >
              <option disabled>Select Class</option>
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
            {errors.class && (
              <p className="text-red-500 text-sm">{errors.class.message}</p>
            )}
          </div>
          <select
            defaultValue="Select Division"
            className="w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-3 md:mb-0"
            {...register("division", { required: "This field is required" })}
          >
            <option disabled>Select Division</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
          <div className="w-full">
            <input
              type="Number"
              placeholder="Enter Roll Number in Digit"
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-3 md:mb-0 ${
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
            <textarea
              name=""
              id=""
              rows="1"
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-3 md:mb-0 ${
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
            <textarea
              name=""
              id=""
              rows="1"
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-3 md:mb-0 ${
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
            <input
              type="text"
              placeholder="Land Mark"
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-3 md:mb-0 ${
                errors.landmark && "border-red-500 focus:outline-red-500"
              }`}
              {...register("landmark", { required: "This field is required" })}
            />
            {errors.landmark && (
              <p className="text-red-500 text-sm">{errors.landmark.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="City"
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-3 md:mb-0 ${
                errors.city && "border-red-500 focus:outline-red-500"
              }`}
              {...register("city", { required: "This field is required" })}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="Number"
              placeholder="Pin Code"
              className={`w-full py-1.5 pl-2 border rounded-md placeholder:text-slate-800 mb-3 md:mb-0 ${
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
          add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
