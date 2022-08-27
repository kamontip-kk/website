import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
    const [fontcolor, setFontcolor] = useState('#e94629');
    const [color, setColor] = useState(false);
    const changColor = () =>{
        if(window.scrollY >= 80){
            setColor(true);
            setFontcolor('#ffffff');
        } else {
            setColor(false);
            setFontcolor('#e94629');
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changColor);
    })
    

    return (
        <div className={color? `Header Headercolor`: `Header`}>
            <div className={`header_container`}>
                <div className={`home`}>
                    <Link href={`/`}>
                        <a className={`navitem`} style={{color: fontcolor}}>
                            Kamontip
                        </a>
                    </Link>
                </div>
                <div className={`rightnav`}>
                    <div className={`rightitem`}>
                        <Link href={`/portfolio`}>
                            <a className={`navitem`} style={{color: fontcolor}}>
                                Portfolio
                            </a>
                        </Link>
                    </div>
                    <div className={`rightitem`}>
                        <Link href={`resume`}>
                            <a className={`navitem`} style={{color: fontcolor}}>
                                Resume
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;