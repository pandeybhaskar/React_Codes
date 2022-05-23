import React, { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

let navigate

function onLoginClick(){
  let admin = document.getElementById('adminId').value
  let pass = document.getElementById('pswrdId').value

  if(admin === 'test1234' && pass === '1234'){
   navigate('/homepage')
  }
  else{
    alert('wrong credentials')
  }
}

function AdminPage() {
  navigate = useNavigate()

  return (
    <div className=" grid grid-rows-4 gap-4 mt-24 mx-52 h-60 bg-yellow-200 shadow-lg shadow-orange-500 rounded-xl">
      <div className="bg-cyan-400 leading-10 text-center text-2xl font-bold font-serif rounded-xl shadow-lg shadow-lime-500 mt-3 mx-60  ">
        POLICY APP ADMIN
      </div>

      <div className="text-xl font-semibold font-mono ml-6">
        <label className="">Admin Id</label>
        <input
          id="adminId"
          placeholder="Admin Id"
          className="w-full focus:outline-none bg-inherit"
        ></input>
        <hr />
      </div>

      <div className="text-xl font-semibold font-mono ml-6">
        <label className="">Password</label>
        <input
          id="pswrdId"
          placeholder="Password"
          type={"password"}
          className="w-full focus:outline-none bg-inherit"
        ></input>
        <hr />
      </div>

      <div className="font-extrabold text-lg font-mono ml-6">
        <button
          className=" bg-red-500 hover:bg-red-700 shadow-lg shadow-lime-500 rounded-lg w-40"
          
          // onClick={()=>{navigate('/homepage')}}
          onClick={onLoginClick}
        >LOG IN
        </button>
      </div>
    </div>
  );
}

export default AdminPage;
