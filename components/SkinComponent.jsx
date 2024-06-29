export default function SkinComponent(){
    return (
        <div className="md:m-4 m-2 h-24 bg-[#f3f0ff] border border-gray-400 rounded-md flex justify-between  items-center">
            <h1 className="md:ml-16 md:text-2xl">Apply a skin to your profile</h1>
            <div className="flex gap-5 md:mr-10 cursor">
                <button className="md:px-7 bg-white md:py-3 border border-black rounded-lg">+ Custom</button>
                <button className="md:px-7 bg-black text-white md:py-3 rounded-lg">Save</button>
            </div>
        </div>
    );
}