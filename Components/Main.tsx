import React from "react";
import Image from "next/image";
import mypic from '../public/assets/img/mypic.jpg'

function Main(){
    return(
        <div className={`Main section`}>
            <div className={`greeting`}>
                <div className={`aboutme`}>
                    <p className={`myname`}>KAMONTIP KOOPIAMRUG <br/>(WAN)</p>
                    <p>I&apos;m 22 years old. I&apos;m a fresh graduated from King Mongkut&apos;s University of Technology Thonburi in department of Media Technology.</p>
                    <p>I&apos;d like to work as a Full-Stack Developer <br/> but Frontend/Backend Developer is fine!</p>
                </div>
                <Image className={`mypic`} alt={`mypic`} src={mypic} width={700} height={700}/>
            </div>      
        </div>
        
    )
}

export default Main;