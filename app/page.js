"use client"

import { useState } from "react";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="md:flex">
      <button
        className="block md:hidden p-2 bg-slate-400 rounded text-white fixed top-2 left-2 z-50"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <Close /> : <Menu />}
      </button>
      <div
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block w-1/10 top-[-20px] bg-[#f3f0ff] h-screen fixed md:static z-40 md:z-auto`}
      >
        <Sidebar />
      </div>
      <div className="w-full md:w-5/6 h-screen ml-auto">
        <Main />
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

function Menu(){
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
</svg>

}

function Close(){
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>

}
