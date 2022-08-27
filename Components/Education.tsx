import React from "react";
import { HeartTwoTone, LineOutlined,CheckCircleTwoTone } from '@ant-design/icons';
import { Timeline } from 'antd';


function Education() {

    return (
        <div className={`Education section`}>
            <h2 className={`section_title`}>Education</h2>
            <Timeline mode="alternate">
                <Timeline.Item dot={<CheckCircleTwoTone twoToneColor="#e94629"/>} style={{fontSize: '20px'}}>
                <LineOutlined /> College <p>Media Technology at King Mongkut's University of Technology Thonburi (GPAX 3.51)</p>
                </Timeline.Item>
                <Timeline.Item dot={<CheckCircleTwoTone twoToneColor="#e94629"/>} style={{fontSize: '20px'}}>
                    High School <LineOutlined />&nbsp; <p>Math-Eng (MEP) at Suankularb Wittayalai Thonburi</p>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}

export default Education;