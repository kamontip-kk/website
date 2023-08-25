import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { NAV_BAR } from "../public/constants";

function Header() {
    const [fontcolor, setFontcolor] = useState('#e94629');
    const [color, setColor] = useState(false);
    const [param, setParam] = useState('');
    const router = useRouter();
    const changColor = () => {
        if (window.scrollY >= 80) {
            setColor(true);
            setFontcolor('#ffffff');
        } else {
            setColor(false);
            setFontcolor('#e94629');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changColor);
        if (router.pathname == '/resume') {
            setParam('resume')
        } else if (router.pathname == '/portfolio') {
            setParam('port')
        } else {
            setParam('home')
        }
    })


    return (
        <div className={color ? `Header Headercolor` : `Header`} style={{ zIndex: 99}}>
            <div className={`header_container`}>
                {NAV_BAR.map((e:any, i:number) => {
                    return <div key={i} className={i == 0 ? `leftitem` : `rightitem`}>
                    <div className={param == e.value ? `Navunderline item` : `item`}>
                        <Link href={e.href}>
                            <a className={`navitem`} style={{ color: fontcolor }}>
                                {e.label}
                            </a>
                        </Link>
                    </div>
                </div>
                })}
            </div>
        </div>
    )
}

export default Header;