import React from "react";
import Logo from "../Assets/logo.png";
import Call from "../Assets/Call.png";
import Message from "../Assets/Message.png"
import Location from "../Assets/Location.png"
import Vector from "../Assets/Vector.png"


const Footer=()=>{
    return(
        <div className="">
            <div className=" bg-customGreen flex flex-row mt-[150px] mx-[10px] rounded-tr-xl rounded-tl-xl pb-[70px] ">
                <div className="w-[395px]">
                    <div className="flex flex-row"><img src={Logo} alt="logo" className="ml-[100px]  mt-[80px]"/><h1 className="text-[28px] text-white mt-[90px] pl-[10px]">Airwings</h1></div>
                    <p className="ml-[100px] text-start mt-[10px] text-white">Lorem ipsum dolor sit amet consectetur adpisicing elit.</p>
                </div>
                <div className="mt-[80px] ml-[60px] text-white text-start">
                    <div className="font-semibold text-white text-[20px] mb-[8px]">Pages</div>
                    <p className="font-light text-start  ">About Us</p>
                    <p className="font-light text-start  pt-[12px]">Explore</p>
                    <p className="font-light text-start  pt-[12px]">Partner</p>
                    <p className="font-light text-start pt-[12px]">Blog</p>
                </div>
                <div className="mt-[80px] ml-[100px] text-white text-start">
                    <h1 className="font-semibold text-white text-[20px] mb-[8px]">Contact</h1>
                    <div className="flex flex-col ">
                        <div className="flex flex-row">
                           <img src={Call} alt="call "/> 
                           <h1 className="font-light text-[18px] pl-[10px]">+24 7621 1231</h1>
                        </div>
                        <div className="flex flex-row pt-[10px]">
                           <img src={Message} alt="message"/> 
                           <h1 className="font-light text-[18px] pl-[10px]">airwings@domain.com</h1>
                        </div>
                        <div className="flex flex-row pt-[10px]">
                           <img src={Location} alt="location"/> 
                           <h1 className="font-light text-[18px] pl-[10px]">Setfruit Tower 3251, NY USA</h1>
                        </div>   
                    </div>   
                </div>
                <div className="mt-[80px] ml-[100px] text-white text-start">
                    <h1 className="font-semibold text-white text-[20px] mb-[8px]">Links</h1>
                    <p>Privacy Policy</p>
                    <p className="pt-[12px]">Terms of use</p>
                </div>
                <div className="mt-[80px] ml-[100px] text-white text-start">
                    <h1 className="font-semibold text-white text-[20px] mb-[8px]">Follow Us</h1>
                    <img src={Vector} alt="vector" className="w-[200px]"/>
                </div>     
            </div>
            <div className=" bg-gradient-to-l from-customYellow to-customGreen w-[500px] h-[227px] ml-[500px] mt-[-227px] z-20 rounded-t-full pb-[50px]"></div>
            <div className=" bg-customYellow text-black mx-[10px] py-[10px] rounded-br-xl rounded-bl-xl">@Copyright 2023 Airwings All Rights Reserved</div>   
        </div>
        
    );
}

export default Footer;