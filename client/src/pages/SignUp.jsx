import React, { useState } from "react";
import ShirtCustomizer from "./ShirtCustomizer";
import { Canvas } from "@react-three/fiber";
import Customizer from "./Customizer";
import CanvasModel from "../canvas";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  // const [currentState, setCurrentState] = useState('Sign up')

  return (
    <div className="pt-16 h-screen">
      <div className="absolute mx-64 my-24 text-white  w-96 h-96 z-50 p-4">
        <h1 className="text-center text-[2.5rem] font-bold py-4">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500">
            Sign Up
          </span>
        </h1>
        <div className="">
          {/* <p>Email</p> */}
          <input
            className="w-full h-12 p-4 rounded-md opacity-55 bg-slate-700 border-2 border-slate-600 "
            placeholder="Username"
          />
          {/* <p className='mt-3'>Password</p> */}
          <input
            className="w-full mt-8 h-12 p-4 rounded-md opacity-55 bg-slate-700 border-2 border-slate-600"
            placeholder="Email"
          />
          <input
            className="w-full mt-8 h-12 p-4 rounded-md opacity-55 bg-slate-700 border-2 border-slate-600"
            placeholder="Password"
          />
          <div className="flex mt-6 justify-between mx-4 text-gray-400">
            <div className="flex gap-2">
              <input
                className="bg-gray-100 w-4 h-4 mt-1 px-2 border-2 border-gray-300"
                type="checkbox"
              />
              <h1 className="mt-0.5">Stay sign in </h1>
            </div>
          </div>
          <div className="justify-center text-center">
            <button className="border w-[50%] mt-6 p-2 rounded-md text-white">
              SIGN UP
            </button>
            <p className="mt-3">
              Already have an account ? then{" "}
              <NavLink
                to="/login"
                className="text-blue-500 underline hover:text-blue-400"
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <CanvasModel />
    </div>
  );
};

export default SignUp;
