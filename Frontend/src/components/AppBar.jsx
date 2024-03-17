import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpeg'

export function AppBar({ name, onChange, mode }) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between px-4 py-2 border rounded-lg shadow-sm h-14">
      <div className="flex">
        <img src={logo} alt="" className="rounded-full"/>

        <div className="text-3xl font-semibold flex flex-col justify-center ml-2">
          Local Link
        </div>
        <div className="my-">
          <button
            className="text-2xl font-bold px-2 mx-2.5 my-1.5 rounded-md hover:bg-slate-900 hover:text-slate-100"
            onClick={() => navigate("/home")}
          >
            {"Explore"}
          </button>
          <button
            className="text-2xl font-bold px-2 mx-2.5 rounded-md hover:bg-slate-900 hover:text-slate-100"
            onClick={() => navigate("/home")}
          >
            {"Domain"}
          </button>
          {mode === "Customer" && (
            <button
              className="text-2xl font-bold px-2 mx-2.5 rounded-md hover:bg-slate-900 hover:text-slate-100"
              onClick={() => navigate("/postjob")}
            >
              {"Create Job"}
            </button>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded mx-2 px-2 py-1  border-slate-200"
            onChange={onChange}
          />
        </div>
      </div>

      <div className="flex">
        <div className="flex justify-center h-full ">
          <button
            className="text-xl font-bold px-2 mx-2.5 my-1.5 text-red-400 rounded-md hover:bg-red-500 hover:text-slate-100"
            onClick={() => {
              localStorage.removeItem("token");
              navigate('/signin')
            }}
          >
            {"Logout"}
          </button>
          <div className="font-normal align-middle flex flex-col justify-center pr-2 text-lg mr-3">
            Welcome, {name}
          </div>
          <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2">
            <span class="font-medium text-gray-500 dark:text-gray-300">
              {name[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
