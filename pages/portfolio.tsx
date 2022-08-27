import React from "react";
import Programming from "../Components/Programming";
import Graphics from "../Components/Graphics";

function Portfolio() {

    return (
        <div className={`container`}>
                <h2 className={`section_title`}>Portfolio</h2>
                <Programming/>
                <Graphics/>
        </div>
    )
}

export default Portfolio;