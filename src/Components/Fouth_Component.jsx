import React from "react";
import Top from "./Fourth-Component/Top";
import Bottom from "./Fourth-Component/Bottom";

const Fourth_Component=()=>{
    return(
        <div>
            <div className="mt-[230px]">
                <Top></Top>
            </div>
            <Bottom></Bottom>
        </div>   
    );
}

export default Fourth_Component;