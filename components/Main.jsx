"use client"
import Color from "./Color";
import Navbar from "./Navbar";
import Profile from "./Profile";
import SkinComponent from "./SkinComponent";
import { useState } from "react";

export default function Main(){

    const [selectedBgColor, setSelectedBgColor] = useState('');
    const [selectedFgColor, setSelectedFgColor] = useState('');


    const handleBgColorChange = (color) => {
        setSelectedBgColor(color)
    }
    const handleFgColorChange = (color) => {
        setSelectedFgColor(color)
    }
    return (
        <div className="md:m-8  m-4">
            <Navbar />
            <SkinComponent />
            <div className="flex m-3 h-screen flex-col lg:flex-row">
                <div className="lg:w-1/3 w-full ">
                    <Color onClickHandlerBg={handleBgColorChange} onClickHandlerFg={handleFgColorChange} selectedBgColor={selectedBgColor} selectedFgColor={selectedFgColor}/>
                </div>
                <div className="w-full">
                    <Profile  bgColor={selectedBgColor} fgColor={selectedFgColor}/>
                </div>
            </div>
        </div>
    );

}