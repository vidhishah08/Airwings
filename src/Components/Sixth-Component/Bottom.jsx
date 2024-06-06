import React from "react";
import Image14 from "../../Assets/Image14.png"
import Image15 from "../../Assets/Image15.png"
import Image16 from "../../Assets/Image16.png"
import Image17 from "../../Assets/Image17.png"
 
const Bottom=()=>{
    return(
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="text-start ml-[325px] mt-[50px] w-[450px]">
                    <img src={Image14} alt="Image14" className="w-[400px]"/><br />
                    <p className="text-[26px] font-semibold pl-[10px] "><span>Wings Tips Navigating<br/></span> the World of Air Travel</p>
                    <p className=" pl-[10px] w-[400px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci impedit veritatis </p>
                    <button className=" bg-customYellow text-black px-[10px] py-[5px] rounded-2xl mt-[15px] ml-[3px]">Learn More</button>
                </div>
                <div className="text-start ml-[10px] mt-[50px] w-[450px]">
                    <img src={Image15} alt="Image15" className="w-[383px]"/><br />
                    <p className="text-[26px] font-semibold pl-[8px] pt-[7px]">Wings Insights and<br /> Updates from the Skies</p>
                    <p className="pl-[8px] w-[400px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci impedit veritatis </p>
                    <button className=" bg-customYellow text-black px-[10px] py-[5px] rounded-2xl mt-[15px] ml-[3px]">Learn More</button>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="text-start ml-[325px] mt-[50px] w-[450px]">
                    <img src={Image16} alt="Image16" className="w-[400px]"/><br />
                    <p className="text-[26px] font-semibold pl-[10px] "><span>Cloud Nine Chornicles<br/></span> Experience with Wings</p>
                    <p className=" pl-[10px] w-[400px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci impedit veritatis </p>
                    <button className=" bg-customYellow text-black px-[10px] py-[5px] rounded-2xl mt-[15px] ml-[3px]">Learn More</button>
                </div>
                <div className="text-start ml-[10px] mt-[50px] w-[450px]">
                    <img src={Image17} alt="Image17" className="w-[393px]"/><br />
                    <p className="text-[26px] font-semibold pl-[8px] pt-[-2px]">Your Guide to Smooth<br /> Soaring with Wings</p>
                    <p className="pl-[8px] w-[400px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci impedit veritatis </p>
                    <button className=" bg-customYellow text-black px-[10px] py-[5px] rounded-2xl mt-[15px] ml-[3px]">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default Bottom;