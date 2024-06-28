export default function SidebarButtonCard({name, svg}){
    return (
        <div className="flex gap-4 items-center m-5 cursor">
            <img className="h-7" src={`./${svg}.svg`} alt="icon" />
            <h3 className="font-bold text-md font-medium cursor">{name}</h3>
        </div>
    );
}