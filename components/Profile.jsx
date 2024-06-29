export default function Profile({bgColor, fgColor}) {
    console.log(bgColor)
    return (
      <div>
        <div className="border border-gray-400 absolute rounded-md m-5 lg:mr-12">
           <div className="md:m-12 m-2 relative border border-gray-400 rounded-lg " style={{ background: bgColor, color:fgColor }}> {/* this is the one that i have to change dynamically */}
            <div className="m-5 z-0 border border-dashed border-gray-600 rounded">
              <div className="m-1 h-40 rounded-lg relative overflow-hidden">
                <img src="/cover.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="relative ">
                <div className="absolute top-[-65px] left-16 z-10 h-28 w-28 bg-blue-200 overflow-hidden border border-dashed border-gray-400 rounded-full">
                    <div className="m-2">
                        <img src="./profilePic.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover object-top"/>
                    </div>
                </div>
            </div>

            <div className={`mt-24 ml-12 ${fgColor === '#fefefe' ? `#fefefe` : `text-gray-600`}`}>
                <h2 className="text-3xl font-semibold">Mason Parker</h2>
                <h4 className="text-xl font-light ">Graphics & UI/UX Designer</h4>
                <div className="flex gap-2 items-center">
                    <img src="./location.svg" alt="icon" className="h-5" />
                    <h5 className="text-lg font-light ">Denver, United States</h5>
                </div>
            </div>

            <div className={` ${fgColor === '#fefefe' ? `#fefefe` : `text-gray-600`} mt-6 ml-20 md:h-52 md:w-102 m-5 border border-dashed border-gray-600 rounded-lg p-5 flex items-center`}>
                <span className=" text-md">I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise. With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions, leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting pixel-perfect Uls and captivating graphics that elevate user experiences.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  