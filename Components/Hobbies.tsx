import React from "react";
import Image from "next/image";
import { HOBBIES } from "../public/constants";

function Hobbies(){
    return(
        <div className={`Hobbies section`}>
           <h2 className={`section_title`}>Hobbies and Interest</h2>
           <div className={`grid`}>
            {HOBBIES.map((e: any, i:number) => {
                return <p key={i} className={`card`}>{e}</p>
            })}   
           </div>
        </div>
        
    )
}

export default Hobbies;