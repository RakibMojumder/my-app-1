import React, { useContext } from "react";
import logo from "../assets/img/logo.png";
import { AUTH_CONTEXT } from "../contexts/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const { user } = useContext(AUTH_CONTEXT);
  return (
    <div className="flex justify-between items-center">
      <div>
        <img className="h-20" src={logo} alt="" />
      </div>
      <div className="flex justify-between items-center border px-7 py-1 rounded-xl">
        <CgProfile className="mr-8 text-2xl" />
        <p className="text-slate-800 text-sm font-semibold">{user?.email}</p>
      </div>
    </div>
  );
};

export default Header;
