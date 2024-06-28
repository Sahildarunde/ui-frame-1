export default function Navbar(){
    return (
        <div className="flex justify-between items-center m-4">
            <h2 className="text-2xl font-semibold">Themes</h2>
            <div className="flex gap-4 items-center bg-[#f3f0ff] p-2 px-3 rounded" >
                <p>Kushagra Singh</p>
                <img className="h-8" src="./picture.svg" alt="icon" />
            </div>
        </div>
    );
}