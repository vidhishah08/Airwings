import React from "react";
import Left from "./Second-Component/Left";
import Right from "./Second-Component/Right"

const Second_Component=()=>{
    return(
        <div className="my-[100px] mx-[162px] flex flex-row">
            <Left></Left>
            <Right></Right>
        </div>
    );
}

export default Second_Component;