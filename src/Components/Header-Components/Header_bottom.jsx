import React from "react";

const Header_bottom=()=>{
    return(
        <div className="flex flex-row justify-between">
            <div className="w-[360px] h-[360px] bg-gradient-to-tr from-customYellow from-10% to-customGreen to-75% rounded-tr-full"></div>
            <div className="w-[360px] h-[360px] bg-gradient-to-tl from-customYellow from-10% to-customGreen to-75% rounded-tl-full"></div>
        </div>
    );
}

export default Header_bottom;