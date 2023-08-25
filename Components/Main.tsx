import React from "react";
import Image from "next/image";
import mypic from '../public/assets/img/mypic.jpg'

function Main(){
    return(
        <div className={`Main section`}>
            <div className={`greeting`}>
                <div className={`aboutme`}>
                    <p className={`myname`}>KAMONTIP KOOPIAMRUG <br/>(WAN)</p>
                    <p>I&apos;m 23 years old. I was born on March 6, 2000.
                    I&apos;m working as a Junior Full-Stack Developer with 1 year experience. </p>
                    <p>I have experience working with users as a part of team and also independent.</p>
                    <p>I prefer to learn new things. And I tent to be a Senior Developer in a few years</p>
                </div>
                <Image className={`mypic`} alt={`mypic`} src={mypic} width={700} height={700}/>
            </div>      
        </div>
        
    )
}

export default Main;