import React from "react";
import Link from "next/link";
import { MailTwoTone, PhoneTwoTone, FacebookOutlined, HomeTwoTone } from '@ant-design/icons'


function Footer() {
    return (
        <footer className={`Footer`}>
            <p className={`title`}>
                Contact
            </p>
            <div className={`footersection`}>
                <div>
                <div className={`contact`}>
                        <Link href={`https://www.facebook.com/kamontip.kpr.9/`}>
                            <a>
                                <FacebookOutlined style={{ fontSize: '20px', color: '#afafac' }} />
                                <span className={`contactitem`}>Wan Kamontip</span>
                            </a>
                        </Link>
                    </div>
                    
                    <div className={`contact`}>
                        <Link href={`tel:0822128661`}>
                            <a>
                                <PhoneTwoTone twoToneColor={`#afafac`} style={{ fontSize: '20px', color: '#afafac' }} />
                                <span className={`contactitem`}>082-212-8661</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div>
                <div className={`contact`}>
                        <Link href={`mailto:kamontip.kpr@gmail.com?`}>
                            <a>
                                <MailTwoTone twoToneColor={`#afafac`} style={{ fontSize: '20px', color: '#afafac' }} />
                                <span className={`contactitem`}>kamontip.kpr@gmail.com</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`contact`}>
                        <Link href={`https://goo.gl/maps/K8GLQNyVJR7qPvJF8`}>
                            <a>
                                <HomeTwoTone twoToneColor={`#afafac`} style={{ fontSize: '20px', color: '#afafac' }} />
                                <span className={`contactitem`}>Bangmod, Thungkru, Bangkok, 10140 </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <p>
                © 2022 Kamontip Koopiamrug
            </p>
        </footer>
    )
}

export default Footer;