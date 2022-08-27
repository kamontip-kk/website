import React from "react";
import Image from "next/image";

function Hobbies(){
    return(
        <div className={`Hobbies section`}>
           <h2 className={`section_title`}>Hobbies and Interest</h2>
           <div className={`grid`}>
           <p className={`card`}>Learning Deutsch (German language)</p>
           <p className={`card`}>Reading literature books</p>
           <p className={`card`}>Watching movies and anime</p>
           <p className={`card`}>Playing games</p>
           <p className={`card`}>Taking film photos</p>   
           </div>
           
           {/* <p>Oyster , Salmon , Papaya salad , Shabu , Mala</p> */}
        </div>
        
    )
}

export default Hobbies;