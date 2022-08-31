import React from "react";
import mypic2 from '../public/assets/img/mypic2.jpg'
import Image from "next/image";
import Link from "next/link";
import { MailTwoTone, PhoneTwoTone, FacebookOutlined, HomeTwoTone } from '@ant-design/icons'

function Resume() {
    return (
        <div className={`Resume`}>
            <a
                    href="/assets/kamontip_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
            <div className={`paper`}>
                

                
                <div className={`resume_left`}>
                    <Image className={`mypic`} src={mypic2} alt={`mypic`} width={200} height={200} />

                    <h3>Contact</h3>
                    <div className={`contact`}>
                        <Link href={`mailto:kamontip.kpr@gmail.com?`}>
                            <a>
                                <MailTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />
                                <span className={`contactitem`}>kamontip.kpr@gmail.com</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`contact`}>
                        <Link href={`tel:0822128661`}>
                            <a>
                                <PhoneTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />
                                <span className={`contactitem`}>082-212-8661</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`contact`}>
                        <Link href={`https://www.facebook.com/kamontip.kpr.9/`}>
                            <a>
                                <FacebookOutlined style={{ fontSize: '15px', color: '#afafac' }} />
                                <span className={`contactitem`}>Wan Kamontip</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`contact`}>
                        <Link href={`https://goo.gl/maps/K8GLQNyVJR7qPvJF8`}>
                            <a>
                                <HomeTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />
                                <span className={`contactitem`}>Bangmod, Bangkok, 10140 </span>
                            </a>
                        </Link>
                    </div>
                    <h3>Skills</h3>
                    <h4>Programming</h4>
                    <div className={`skillgrid`}>
                        <div>
                            <p>• HTML</p>
                            <p>• CSS</p>
                            <p>• Less</p>
                            <p>• JavaScript</p>
                            <p>• TypeScript</p>
                            <p>• ReactJS</p>
                            <p>• NextJS</p>
                            <p>• NestJS</p>
                        </div>
                        <div className={`skillright`}>
                            <p>• MySQL</p>
                            <p>• Firebase</p>
                            <p>• Dart</p>
                            <p>• Flutter</p>
                            <p>• C#</p>
                            <p>• Unity</p>
                            <p>• Git</p>
                        </div>

                    </div>

                    <h4>Graphics and Animation</h4>
                    <div className={`skillgraphic`}>
                        <p>• Adobe Photoshop</p>
                        <p>• Adobe Illustrator</p>
                        <p>• Adobe Animate</p>
                        <p>• Aesprite</p>
                    </div>

                    <h4>Language</h4>
                    <div className={`skilllanguge`}>
                        <p>• Thai (Native)</p>
                        <p>• English</p>
                    </div>
                </div>

                <div className={`resume_right`}>
                    <div className={`name`}>
                        <h1>KAMONTIP<br />KOOPIAMRUG</h1>
                    </div>

                    <h3>About me</h3>
                    <p>I&apos;m 22 years old. I was born on March 6, 2000.<br /> I&apos;m a fresh graduated from King Mongkut&apos;s University of Technology Thonburi in department of Media Technology.</p>
                    <p>I&apos;d like to work as a Full-Stack Developer <br /> but Frontend/Backend Developer is fine!</p>

                    <h3>Education</h3>
                    <div className={`college education`}>
                        <h4>College | 2019-2022 </h4>
                        <span>Media Technology at King Mongkut&apos;s University of Technology Thonburi (GPAX 3.51)</span>
                    </div>
                    <div className={`hightschool education`}>
                        <h4>High School | 2015-2018 </h4>
                        <span>Math-Eng (MEP) at Suankularb Wittayalai Thonburi</span>
                    </div>
                    <h3>Experience</h3>
                    <h4>
                        Co-operative Education
                        <br />
                        at 1Moby Co., Ltd. | July 1, 2021 - December 13, 2021
                    </h4>
                    <p>• Updated framework and applied new features to website</p>
                    <p>• Made dynamic animation chart for showing data</p>
                    <p>• Developed CRUD system for a banner of new website</p>
                    <p>• Tested and found mistakes and errors of new website</p>
                </div>
            </div>
            </a>
        </div>
    )
}

export default Resume;