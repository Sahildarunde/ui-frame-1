export default function Navbar(){
    return (
        <div className="block mt-14 flex justify-between items-center md:m-4">
            <h2 className="text-xl md:text-2xl font-semibold">Themes</h2>
            <div className="flex gap-4 items-center bg-[#f3f0ff] p-2 px-3 rounded" >
                <p className="block ">Kushagra Singh</p>
                <img className="h-8" src="./picture.svg" alt="icon" />
            </div>
        </div>
    );
}