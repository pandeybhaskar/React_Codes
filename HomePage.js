import React, { useEffect, useState } from "react";
import {
  FaList,
  FaHistory,
  FaLock,
  FaSearch,
  FaDownload,
} from "react-icons/fa";
import EmployeeList from "./EmployeeList";
import History from "./History";
import Logout from "./Logout";

let emp, setEmp
let hist, setHist
let log, setLog

function dwnldCsv(){
  alert('download pdf ?')
  window.location.href = '/dwnld.pdf'
}

function EmployeeList_Click() {

if(emp == 1){
  setEmp(0)
  setHist(1)
  setLog(1)
}
else{
  setEmp(0)
  setHist(1)
  setLog(1)
}
}

function History_Click() {
  (hist == 1 ? setHist(0) : setHist(1))

  if(hist == 1){
    setEmp(1)
    setHist(0)
    setLog(1)
  }
  else{
    setEmp(1)
    setHist(0)
    setLog(1)
  }
}

function Logout_Click() {
  (log == 1 ? setLog(0) : setLog(1))

  if(log == 1){
    setEmp(1)
    setHist(1)
    setLog(0)
  }
  else{
    setEmp(1)
    setHist(1)
    setLog(0)
  }
}

function HomePage() {
  useEffect(() => {
    {
      console.log("inside effect")
    }
  }, [emp,hist,log]);
  [emp, setEmp] = useState([0]);
  [hist, setHist] = useState([1]);
  [log, setLog] = useState([1]);

  return (
    <div className="h-screen grid grid-rows-1 grid-cols-5 gap-0 text-amber-100 lg:text-xs sm:text-xs">
      <div className=" col-span-1 p-2 grid-rows-3 bg-slate-800 text-amber-100">
        <div className=" h-24 lg:p-8 sm:pl-0 sm:py-8 sm:pr-  m-1 bg-pink-800 shadow-md shadow-sky-300 rounded-xl font-bold text-center">
          DASHBOARD
        </div>
        <hr className=" my-5 h-5 shadow-lg shadow-sky-300" />
        <button
          onClick={EmployeeList_Click}
          id="emplistId"
          className=" emplist_class grid grid-cols-5 gap-0 h-12 lg:w-full m-1 p-3 text-left hover:bg-cyan-800"
        >
          <FaList className=" mt-1 col-span-1" />
          <div className=" col-span-4">EMPLOYEE LIST</div>
        </button>
        <button
          onClick={History_Click}
          className="histroy_class grid grid-cols-5 h-12 w-full m-1 p-3 text-left hover:bg-cyan-800"
        >
          <FaHistory className=" mt-1 col-span-1" />
          <div>HISTORY</div>
        </button>
        <button
          onClick={Logout_Click}
          className="logout_class grid grid-cols-5 h-12 w-full m-1 p-3 text-left hover:bg-cyan-800"
        >
          <FaLock className=" mt-1 col-span-1" />
          <div>LOGOUT</div>
        </button>
      </div>

      <div className=" grid-rows-3 col-span-4 bg-slate-700">
        <div className=" p-6 text-center text-amber-100 font-extrabold">
          MAIN PAGE
        </div>

        <div className=" grid grid-cols-5 m-2 gap-3 ">
          <input
            className=" bg-pink-800 hover:bg-pink-700 col-span-2 text-center rounded-lg focus: outline-cyan-500 shadow-md shadow-sky-300"
            placeholder="SEARCH"
            type={"text"}
          ></input>
          <select className="bg-pink-800 hover:bg-pink-700 rounded-lg focus: outline-cyan-500 shadow-md shadow-sky-300 text-center">
            <option>ALL</option>
            <option>ENROLLED</option>
            <option>NOT ENROLLED</option>
            <option>REVOKED</option>
          </select>
          <select className="bg-pink-800 hover:bg-pink-700 rounded-lg outline-cyan-500 shadow-md shadow-sky-300 text-center">
            <option>ALL</option>
            <option>BLOCKED</option>
            <option>UNBLOCKED</option>
          </select>
          <button onClick={dwnldCsv} className="grid grid-cols-2 bg-pink-800 hover:bg-pink-700 rounded-lg outline-cyan-500 shadow-md shadow-sky-300 text-center">
            <FaDownload className="lg:ml-14 sm:ml-8 mt-1" />
            <div className="mr-14">CSV</div>
          </button>
        </div>
        <hr className="mt-6 mx-1" />

        <div className=" grid grid-cols-7 m-2 gap-1 ">
          <div className=" col-span-2">NAME</div>
          <div>ID</div>
          <div>ENROLLED STATUS</div>
          <div>BLOCK STATUS</div>
          <div>LAST BLOCKED</div>
          <div>LAST UNBLOCKED</div>
        </div>
        <hr className="mt-0 mx-1" />
        <div className=" mt-3"></div>
        {emp == 0 ? <EmployeeList /> : console.log("emp", emp)}
        {hist == 0 ? <History /> : console.log("hist", hist)}
        {log == 0 ? <Logout /> : console.log("log", log)}
  
      </div>
    </div>
  );
}

export default HomePage;
