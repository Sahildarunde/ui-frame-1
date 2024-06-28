export default function SkinComponent(){
    return (
        <div className="m-4 h-24 bg-[#f3f0ff] border border-gray-400 rounded-md flex justify-between  items-center">
            <h1 className="ml-16 text-2xl">Apply a skin to your profile</h1>
            <div className="flex gap-5 mr-10 cursor">
                <button className="px-7 bg-white py-3 border border-black rounded-lg">+ Custom</button>
                <button className="px-7 bg-black text-white py-3 rounded-lg">Save</button>
            </div>
        </div>
    );
}