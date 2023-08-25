import React from "react";
import {Html5TwoTone} from '@ant-design/icons';
import Image from "next/image";
import { GRAPGHICS_SKILLS, LANG_SKILLS, PROGRAMMING_SKILLS, PROGRAMMING_SKILLS_2 } from "../public/constants";

function Skills() {
    return (
        <div className={`Skills section`}>
            <h2 className={`section_title`}>Skills</h2>
            
            <h5>Programming</h5>
            <div className={`grid`}>
                {PROGRAMMING_SKILLS.map((e:any, i:number ) => {
                    return <div key={i} className={`card`}>
                        <span>{e}</span>
                    </div>
                })}
                {PROGRAMMING_SKILLS_2.map((e:any, i:number) => {
                    return <div key={i} className={`card`}>
                        <span>{e}</span>
                    </div>
                })}
            </div>

            <h5>Graphics and Animation</h5>
            <div className={`grid`}>
                {GRAPGHICS_SKILLS.map((e:any, i:number) => {
                    return <div key={i} className={`card`}>
                        <span>{e}</span>
                    </div>
                })}
            </div>

            <h5>Language</h5>
            <div className={`grid`}>
                {LANG_SKILLS.map((e:any, i:number) => {
                    return <div key={i} className={`card`}>
                        <span>{e}</span>
                    </div>
                })}
            </div>

        </div>

    )
}

export default Skills;