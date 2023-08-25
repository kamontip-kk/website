import React from "react";
import { HeartTwoTone, LineOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import { EXP } from "../public/constants";

function Experience() {

    return (
        <div className={`Experience section`}>
            {EXP.map((e:any, i:number) => {
                const [position, other] = e.label.split(' at')
                const [company, date] = other.split('|')
                return <>
                    <h2 className={`section_title`}>
                        {position}
                    <br/>
                        <span>at {company} ({date})</span>
                    </h2>

                    <Timeline mode="alternate" style={{marginTop: '30px'}}>
                        {e.data.map((el: any, i:number) => {
                            return <Timeline.Item key={i} color="red">
                            <p>{el.value}</p>
                            </Timeline.Item>
                        })}
                    </Timeline>
                </>
            })}
        </div>

    )
}

export default Experience;