import React from "react";
import Image9 from "../../Assets/Image9.png"
import Image10 from "../../Assets/Image10.png"
import Image11 from "../../Assets/Image11.png"
import Image12 from "../../Assets/Image12.png"
import Image13 from "../../Assets/Image13.png"

const Bottom=()=>{
    return(
        <div className="flex flex-row">
            <div className="flex flex-col ml-[280px] mt-[30px] mr-[-35px]">
                <div className=""><img src={Image9} alt="Image9" className="w-[250px]"/></div>
                <div className="mt-[150px] pl-[6px]"><img src={Image10} alt="Image10" className="w-[225px]"/></div>
            </div>
            <div><img src={Image11} alt="Image11" className="pl-[100px] pt-[160px] w-[400px]"/></div>
            <div className="flex flex-col ml-[75px] mt-[40px]">
                <div className=""><img src={Image12} alt="Image12" className="w-[220px]"/></div>
                <div className="mt-[155px] pl-[6px]"><img src={Image13} alt="Image13" className="w-[225px]"/></div>
            </div>
        </div>
    );
}
export default Bottom;