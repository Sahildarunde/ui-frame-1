import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import "./globals.css"

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/6 bg-[#f3f0ff] h-screen"><Sidebar /></div>
      <div className="w-screen h-screen" ><Main /></div>
    </div>
  );
}
