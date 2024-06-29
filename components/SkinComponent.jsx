export default function SkinComponent(){
    return (
        <div className="md:ml-16 lg:ml-4 m-5 p-5 h-24 bg-[#f3f0ff] border border-gray-400 rounded-md flex justify-between  items-center">
            <h1 className=" lg:ml-8 md:text-2xl">Apply a skin to your profile</h1>
            <div className="flex gap-5 md:mr-10 cursor">
                <button className="md:px-7 bg-white px-2 md:py-3 border border-black rounded-lg">+Custom</button>
                <button className="md:px-7 bg-black px-2 text-white md:py-3 rounded-lg">Save</button>
            </div>
        </div>
    );
}