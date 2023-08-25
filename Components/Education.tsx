import React from "react";
import { HeartTwoTone, LineOutlined,CheckCircleTwoTone } from '@ant-design/icons';
import { Timeline } from 'antd';
import { EDUCATION } from "../public/constants";


function Education() {

    return (
        <div className={`Education section`}>
            <h2 className={`section_title`}>Education</h2>
            <Timeline mode="alternate">
                {EDUCATION.map((e:any, i:number) => {
                    return <Timeline.Item key={i} dot={<CheckCircleTwoTone twoToneColor="#e94629"/>} style={{fontSize: '20px'}}>
                        {i%2 == 0 && <LineOutlined />} {e.label} {i%2 != 0 && <><LineOutlined /> &nbsp;</>}
                        <p>{e.data[0].value}</p>
                    </Timeline.Item>
                })}
            </Timeline>
        </div>
    )
}

export default Education;