import { linear_gradient, radial_gradient, solids } from "../lib/colors";

export default function Color({ onClickHandlerBg, onClickHandlerFg, selectedFgColor, selectedBgColor }) {
    return (
        <div>
            <div className="m-5 md:ml-16 lg:ml-4">
                <h4 className="text-lg font-semibold">Solids</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                    {solids.map((hexcol) => (
                        <ColorBlock
                            key={hexcol}
                            hex={hexcol}
                            onClick={() => onClickHandlerBg(hexcol)}
                            isSelected={selectedBgColor === hexcol}
                        />
                    ))}
                </div>
            </div>
            <div className="m-5 md:ml-16 lg:ml-4">
                <h4 className="text-lg font-semibold">Linear Gradients</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                    {linear_gradient.map((gradient) => (
                        <ColorGradient
                            key={gradient}
                            gradient={gradient}
                            onClick={() => onClickHandlerBg(gradient)}
                            isSelected={selectedBgColor === gradient}
                        />
                    ))}
                </div>
            </div>
            <div className="m-5 md:ml-16 lg:ml-4">
                <h4 className="text-lg font-semibold">Radial Gradients</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                    {radial_gradient.map((gradient) => (
                        <ColorGradient
                            key={gradient}
                            gradient={gradient}
                            onClick={() => onClickHandlerBg(gradient)}
                            isSelected={selectedBgColor === gradient}
                        />
                    ))}
                </div>
            </div>
            <div className="m-5 md:ml-16 lg:ml-4">
                <h4 className="text-lg font-semibold">Foreground Color</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                    <ColorBlock
                        hex={"#222222"}
                        onClick={() => onClickHandlerFg("#222222")}
                        isSelected={selectedFgColor === "#222222"}
                    />
                    <ColorBlock
                        hex={"#fefefe"}
                        onClick={() => onClickHandlerFg("#fefefe")}
                        isSelected={selectedFgColor === "#fefefe"}
                    />
                </div>
            </div>
        </div>
    );
}

function ColorBlock({ hex, onClick, isSelected }) {
    return (
        <div onClick={onClick} className="h-12 w-12 border border-gray-400 cursor-pointer relative" style={{ backgroundColor: hex }}>
            {isSelected && <TickMark />}
        </div>
    );
}

function ColorGradient({ gradient, onClick, isSelected }) {
    return (
        <div onClick={onClick} className="h-12 w-12 border border-gray-400 cursor-pointer relative" style={{ background: gradient }}>
            {isSelected && <TickMark />}
        </div>
    );
}

function TickMark() {
    return <img src="./tick.svg" alt="icon" className="absolute top-1 right-1" />;
}
