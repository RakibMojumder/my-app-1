import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const View = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="p-8 bg-orange-100">
      <button
        onClick={() => navigate(-1)}
        className="hidden md:block bg-[#F33823] px-5 py-1 text-white rounded-full mb-4"
      >
        <MdOutlineArrowBackIosNew className="inline-block" /> Back
      </button>
      <form className="md:space-y-5">
        <div className="md:flex items-center gap-5">
          <div className="w-full">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              defaultValue={state.data.firstName}
              className="w-full py-1.5 pl-2 border rounded-md bg-white placeholder:text-slate-800 mb-5 md:mb-0"
              disabled
            />
          </div>
          <div className="w-full">
            <label>Middle Name</label>
            <input
              type="text"
              placeholder="Middle Name"
              defaultValue={state.data.middleName}
              className="w-full py-1.5 pl-2 border rounded-md bg-white placeholder:text-slate-800 mb-5 md:mb-0"
              disabled
            />
          </div>
          <div className="w-full">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              defaultValue={state.data.lastName}
              className="w-full py-1.5 pl-2 border rounded-md bg-white placeholder:text-slate-800 mb-5 md:mb-0"
              disabled
            />
          </div>
        </div>
        <div className="md:flex items-center gap-5">
          <div className="w-full">
            <label>Class</label>
            <select
              defaultValue={state.data.class}
              disabled
              className="w-full py-1.5 pl-2 border rounded-md bg-white placeholder:text-slate-800 mb-5 md:mb-0"
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
          </div>
          <div className="w-full">
            <label>Section</label>
            <select
              defaultValue={state.data.division}
              disabled
              className="w-full py-1.5 pl-2 border rounded-md bg-white placeholder:text-slate-800 mb-5 md:mb-0"
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
              className="w-full py-1.5 pl-2 border rounded-md bg-white placeholder:text-slate-800 mb-5 md:mb-0"
              disabled
            />
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
              className="w-full border pl-2 py-2 bg-white rounded-md placeholder:text-slate-800"
              placeholder="Address Line 1"
              disabled
            />
          </div>
          <div className="w-full">
            <label>Address Line 2</label>
            <textarea
              name=""
              id=""
              rows="1"
              defaultValue={state.data.addressTwo}
              className="w-full border pl-2 py-2 bg-white rounded-md placeholder:text-slate-800"
              placeholder="Address Line 1"
              disabled
            />
          </div>
        </div>
        <div className="md:flex items-center gap-5">
          <div className="w-full">
            <label>Landmark</label>
            <input
              type="text"
              placeholder="Land Mark"
              disabled
              defaultValue={state.data.landmark}
              className="w-full py-1.5 pl-2 border rounded-md bg-white placeholder:text-slate-800 mb-5 md:mb-0"
            />
          </div>
          <div className="w-full">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              defaultValue={state.data.city}
              className="w-full py-1.5 pl-2 border rounded-md bg-white placeholder:text-slate-800 mb-5 md:mb-0"
              disabled
            />
          </div>
          <div className="w-full">
            <label>Pin code</label>
            <input
              type="Number"
              placeholder="Pin Code"
              defaultValue={state.data.pinCode}
              className="w-full py-1.5 pl-2 border rounded-md bg-white placeholder:text-slate-800 mb-5 md:mb-0"
              disabled
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default View;
