import React from "react";
import logo from "../../Assets/logo.png"

const Navbar=()=>{
    return(
        <div >
            <div className="pt-[65px] mx-[162px] flex flex-row h-[150px]">
                <div className="flex flex-row mr-[170px] "><img src={logo} alt="logo" className=""/><div className=" text-customWhite text-[38px] py-[20px] px-[10px]">Airwings</div></div>
                <div className="flex fex-row pt-[27px] pr-[25px] w-[800px] bg-white bg-opacity-5 justify-between  text-[20px] rounded-3xl mr-[130px]">
                    <div className="basis-1/5  text-customWhite ">Home</div>
                    <div className="basis-1/5  text-customWhite">About Us</div>
                    <div className="basis-1/5  text-customWhite">Services</div>
                    <div className="basis-1/5  text-customWhite">Blog</div>
                    <div className="basis-1/5  text-customWhite ">Contact Us</div>
                </div>
                <div className=" flex flex-row ">
                        <div className="text-[20px] text-customWhite mt-[30px] "><button>Login</button></div>
                        <div className="text-[20px]"><button className="text-black rounded-3xl mt-[20px] bg-customYellow ml-[30px] py-[10px] px-[20px]">Register</button></div>
                </div>
            </div>    
        </div>
    );
}

export default Navbar;