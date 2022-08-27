import React from "react";
import {Html5TwoTone} from '@ant-design/icons';
import Image from "next/image";

function Skills() {
    return (
        <div className={`Skills section`}>
            <h2 className={`section_title`}>Skills</h2>
            <h5>Programming</h5>
            <div className={`grid`}>
                <div className={`card`}>
                    <span>HTML</span>
                </div>
                <div className={`card`}>
                    <span>CSS</span>
                </div>
                <div className={`card`}>
                    <span>Less</span>
                </div>
                <div className={`card`}>
                    <span>JavaScript</span>
                </div>
                <div className={`card`}>
                    <span>TypeScript</span>
                </div>
                <div className={`card`}>
                    <span>ReactJS</span>
                </div>
                <div className={`card`}>
                    <span>NextJS</span>
                </div>
                <div className={`card`}>
                    <span>NestJS</span>
                </div>
                <div className={`card`}>
                    <span>MySQL</span>
                </div>
                <div className={`card`}>
                    <span>Firebase</span>
                </div>
                <div className={`card`}>
                    <span>Dart</span>
                </div>
                <div className={`card`}>
                    <span>Flutter</span>
                </div>
                <div className={`card`}>
                    <span>C#</span>
                </div>
                <div className={`card`}>
                    <span>Unity</span>
                </div>
                <div className={`card`}>
                    <span>Git</span>
                </div>
            </div>

            <h5>Graphics and Animation</h5>
            <div className={`grid`}>
            <div className={`card`}>
                <span>Adobe Photoshop</span>
            </div>
            <div className={`card`}>
                <span>Adobe Illustrator</span>
            </div>
            <div className={`card`}>
                <span>Adobe Animate</span>
            </div>
            <div className={`card`}>
                <span>Aesprite</span>
            </div>
            </div>

            <h5>Language</h5>
            <div className={`grid`}>
            <div className={`card`}>
                <span>Thai (Native)</span>
            </div>
            <div className={`card`}>
                <span>English</span>
            </div>
            </div>

        </div>

    )
}

export default Skills;