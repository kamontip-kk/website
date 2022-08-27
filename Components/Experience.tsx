import React from "react";
import { HeartTwoTone, LineOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

function Experience() {

    return (
        <div className={`Experience section`}>
            <h2 className={`section_title`}>
                Co-operative Education Experience
                <br/>
                <span>at 1Moby Co., Ltd. (from July 1, 2021 to December 13, 2021)</span>
            </h2>
             
            <Timeline mode="alternate" style={{marginTop: '30px'}}>
            <Timeline.Item color="red">
                <p>Updated framework and applied new features to website</p>
            </Timeline.Item>
            <Timeline.Item color="red" style={{fontSize: '26px'}}>
                <p>Made dynamic animation chart for showing data</p>
            </Timeline.Item>
            <Timeline.Item color="red">
                <p>Developed CRUD system for a banner of new website</p>
            </Timeline.Item>
            <Timeline.Item  color="red">
                <p>Tested and found mistakes and errors of new website</p>
            </Timeline.Item>
            </Timeline>
        </div>

    )
}

export default Experience;