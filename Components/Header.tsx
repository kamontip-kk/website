import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";

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
        <div className={color ? `Header Headercolor` : `Header`}>
            <div className={`header_container`}>
                <div className={`leftitem`}>
                    <div className={param == 'home' ? `Navunderline item` : `item`}>
                        <Link href={`/`}>
                            <a className={`navitem`} style={{ color: fontcolor }}>
                                Kamontip
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={`rightnav`}>
                    <div className={`rightitem`}>
                        <div className={param == 'port' ? `Navunderline item` : `item`}>
                            <Link href={`/portfolio`}>
                                <a className={`navitem`} style={{ color: fontcolor }}>
                                    Portfolio
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={`rightitem`}>
                        <div className={param == 'resume' ? `Navunderline item` : `item`}>
                            <Link href={`/resume`}>
                                <a className={`navitem`} style={{ color: fontcolor }}>
                                    Resume
                                </a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;