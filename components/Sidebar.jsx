import SidebarButtonCard from "./SidebarButtonCard";

export default function Sidebar(){
    return (
        <div>
            <div className="flex w-full justify-center mt-7 mb-14 font-light "><p>Logo here</p></div>
            <div className="border-b border-gray-300">
                <p className="text-gray-500 m-5">Menu</p>
                <div className="mt-5 ml-5 overflow-cover truncate text-clip">
                    <SidebarButtonCard name={"Home"} svg={"home"}/>
                    <SidebarButtonCard name={"Schedule"} svg={"schedule"}/>
                    <SidebarButtonCard name={"Recommendation"} svg={"recommendation"}/>
                    <SidebarButtonCard name={"Analytics"} svg={"analytics"}/>
                    <SidebarButtonCard name={"Profile"} svg={"profile"}/>
                    
                </div>
                <div className="truncate text-clip flex ml-5 mt-[-20px] mb-[-20px] items-center justify-between ">
                    <SidebarButtonCard name={"Inbox"} svg={"inbox"}/>
                    <div className="h-[20px] w-[30px] rounded-full bg-blue-200 m-5 flex justify-center items-center">
                        <p className="text-blue-600 font-light p-[-5px]">8</p>
                    </div>
                </div>
                <div className="truncate text-clip mt-5 ml-5 bg-gray-300 px-2 mr-2 rounded-lg py-[0.05px] mb-2">
                    <SidebarButtonCard name={"Themes"} svg={"theme"}/>
                </div>
            </div>
            <div>
                <p className="text-gray-500 m-5 ">Account</p>
                <div className="truncate text-clip mt-5 ml-5 ">
                    <SidebarButtonCard name={"Settings"} svg={"settings"}/> 
                </div>
            </div>
        </div>
    );
}