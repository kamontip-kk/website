import React from "react";
import mypic2 from '../public/assets/img/mypic2.jpg'
import Image from "next/image";
import Link from "next/link";
import { MailTwoTone, PhoneTwoTone, FacebookOutlined, HomeTwoTone } from '@ant-design/icons'
import { ALL_SKILLS, CONTACTS, EDUCATION, EXP, REFERENCES } from "../public/constants";
import { Form } from "../public/Form";

function Resume() {
    return (
        <div className={`Resume`}>
            <a
                    // href="/assets/kamontip_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{cursor: 'none'}}
                >
            <div className={`paper`} style={{ cursor: 'default', zIndex: 1 }}>
                
                <div className={`resume_left`}>
                    <Image className={`mypic`} src={mypic2} alt={`mypic`} width={200} height={200} />

                    <h3>Contact</h3>
                    <Form form={CONTACTS}/>

                    <h3>Skills</h3>
                    <Form form={ALL_SKILLS}/>

                    <h3>Education</h3>
                    <Form form={EDUCATION}/>

                    {/* <h3>References</h3>
                    <Form form={REFERENCES}/> */}
                </div>

                <div className={`resume_right`}>
                    <div className={`name`}>
                        <h1>KAMONTIP<br />KOOPIAMRUG</h1>
                    </div>

                    <h3>About me</h3>
                    <p>I&apos;m 23 years old. I was born on March 6, 2000.</p>
                    <p>I&apos;m working as a Junior Full-Stack Developer with 1 year experience. I have experience working with users as a part of team and also independent. 
                        I prefer to learn new things. And I tent to be a Senior Developer in a few years
                    </p>

                    {/* <h3>Education</h3>
                    <Form form={EDUCATION}/> */}

                    <h3>Experience</h3>
                    <Form form={EXP}/>
                </div>
            </div>
            </a>
        </div>
    )
}

export default Resume;