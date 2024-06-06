import React from "react";
import Image3 from "../../Assets/Image3.png"
import Image4 from "../../Assets/Image4.png"
import Image5 from "../../Assets/Image5.png"
import Image6 from "../../Assets/Image6.png"
import Image7 from "../../Assets/Image7.png"
import Image8 from "../../Assets/Image8.png"

const Bottom=()=>{
    return(
        <div>
            <div className="flex flex-row mt-[70px]">
                <div className="flex flow-row bg-customGreen rounded-r-full rounded-l-full pr-[15px] py-[10px] overflow-hidden  w-[400px] " >
                    <img src={Image3} alt="Image3" className="ml-[30px]"/>
                    <div className="flex flex-col">
                        <div><h1 className="text-[28px] pt-[18px] text-white font-semibold">Kristion Watson</h1></div>
                        <div className="text-start mt-[-5px] text-white text-[15px] font-light"><p>Senior Manager</p></div>
                    </div>
                </div>
                <div className="flex flow-row bg-customGreen rounded-r-full rounded-l-full pr-[15px] py-[10px] overflow-hidden  w-[400px] ml-[30px]" >
                    <img src={Image4} alt="Image4" className="ml-[20px] mt-[4px]"/>
                    <div className="flex flex-col">
                        <div><h1 className="text-[28px] pt-[18px] text-white font-semibold">Esther Howard</h1></div>
                        <div className="text-start mt-[-5px] text-white text-[15px] font-light"><p>Senior Manager</p></div>
                    </div>
                </div>
                <div className="flex flow-row bg-customGreen rounded-r-full rounded-l-full pr-[15px] py-[10px] overflow-hidden  w-[400px] ml-[30px]" >
                    <img src={Image5} alt="Image5" className="ml-[20px] mt-[4px]"/>
                    <div className="flex flex-col">
                        <div><h1 className="text-[28px] pt-[18px] text-white font-semibold">Theresa Webb</h1></div>
                        <div className="text-start mt-[-5px] text-white text-[15px] font-light"><p>Senior Manager</p></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-[30px] ml-[280px] mr-[-100px]">
                <div className="flex flow-row bg-customGreen rounded-r-full rounded-l-full pr-[15px] py-[10px] overflow-hidden  w-[400px] ml-[-30px]" >
                    <img src={Image6} alt="Image6" className="ml-[20px]"/>
                    <div className="flex flex-col">
                        <div><h1 className="text-[28px] pt-[18px] text-white font-semibold">Gorge Lucas</h1></div>
                        <div className="text-start mt-[-5px] text-white text-[15px] font-light"><p>Senior Manager</p></div>
                    </div>
                </div>
                <div className="flex flow-row bg-customGreen rounded-r-full rounded-l-full pr-[15px] py-[10px] overflow-hidden  w-[400px] ml-[30px]" >
                    <img src={Image7} alt="Image7" className="ml-[20px] mt-[4px]"/>
                    <div className="flex flex-col">
                        <div><h1 className="text-[28px] pt-[18px] text-white font-semibold">Eleanor Pena</h1></div>
                        <div className="text-start mt-[-5px] text-white text-[15px] font-light"><p>Senior Manager</p></div>
                    </div>
                </div>
                <div className="flex flow-row bg-customGreen rounded-r-full rounded-l-full pr-[15px] py-[10px] overflow-hidden  w-[400px] ml-[30px]" >
                    <img src={Image8} alt="Image8" className="ml-[20px] mt-[1px]"/>
                    <div className="flex flex-col">
                        <div><h1 className="text-[28px] pt-[18px] text-white font-semibold">Robert Fox</h1></div>
                        <div className="text-start mt-[-5px] text-white text-[15px] font-light"><p>Senior Manager</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bottom;