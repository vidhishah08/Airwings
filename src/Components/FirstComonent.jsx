import React from "react";

const FirstComonent=()=>{
    return(
        <div className="mx-[162px] my-[100px] text-start">
            <h1 className=" text-customGreen font-semibold">// Explore</h1>
            <p className="text-[48px] font-semibold leading-[55px] mt-[8px]">Your Ultimate Destination for Air <br />Travel Planning and Booking</p>
            <div className="mt-[75px] flex flex-row">
    
                    <div className="bg-customGrey rounded-2xl h-[80px] py-[10px] pr-[20px] mr-[10px] w-[400px]">
                        <label className="pl-[20px]  ">From</label><br />
                        <input type="text" className="text-[20px] bg-customGrey rounded-lg ml-[19px] pl-[10px] pt-[2px] w-[350px]" />
                    </div>
                    <div className="bg-customGrey rounded-2xl h-[80px] py-[10px] pr-[20px] mr-[10px] w-[400px] ">
                        <label className="pl-[20px]  ">To</label><br />
                        <input type="text" className="text-[20px] bg-customGrey rounded-lg ml-[19px] pl-[10px] pt-[2px] w-[350px]" />
                    </div>
                    <div className="bg-customGrey rounded-2xl h-[80px] py-[10px] pr-[20px] mr-[10px] w-[200px] ">
                        <label className="pl-[20px]  ">Class</label><br />
                        <select name="class" className="ml-[20px] py-[8px] w-[150px] rounded-md bg-customGrey">
                            <option>Economy</option>
                            <option>Business</option>
   
                        </select>
                    </div>
                    <div><button className="text-black rounded-2xl h-[80px] py-[10px] bg-customYellow mr-[10px] px-[45px] text-[25px]">Select</button></div>
    
            </div>
        </div>
    );
}

export default FirstComonent;