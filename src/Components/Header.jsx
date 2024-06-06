import React from "react";
import Navbar from "./Header-Components/Navbar";
import Header_bottom from "./Header-Components/Header_bottom";
import Header_middle from "./Header-Components/Header_middle";

const Header =()=>{
    return(
        <div className=" bg-customGreen h-[786px] w-full z-0">
            <Navbar></Navbar>
            <div className="z-20"><Header_middle></Header_middle></div>
            <div className="z-10 mt-[-300px]"><Header_bottom></Header_bottom></div>
        </div>
    );
}

export default Header;