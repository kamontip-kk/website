import { Divider } from 'antd';
import React, { useState } from 'react';
import { Card } from 'antd';
import ReactPlayer from 'react-player';
import CardModal from './CardModal';
import { PROGRAMMING_PORT } from '../public/constants';

function Programming() {
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [explain, setExplain] = useState<string>();
    const [tools, setTools] = useState<string>();
    const { Meta } = Card;

    const onClick = (e: any) => {
        setUrl(e.url);
        setTitle(e.title);
        setExplain(e.explain);
        setTools(e.tools);

        setOpen(true);
    }

    const getData = () => {
        setOpen(false);
    }

    return (
        <div className={`portsection`}>
            <Divider className={`porttitle`} orientation="left">Programming</Divider>
            <div className={`grid`}>
                {PROGRAMMING_PORT.map((e: any, i:number ) => {
                    return <Card key={i} className={`portcard`} onClick={() => onClick(e)}
                        hoverable
                        style={{ width: 500 }}
                        cover={<img alt={`${e.ref}preview`} src={e.previewImg} />}
                    >
                        <Meta
                            style={{ fontSize: '22px' }}
                            title={e.type} description={e.title} />
                    </Card>
                })}

            </div>
            <CardModal
                visible={open}
                passData={getData}
                url={url}
                title={title}
                explain={explain}
                tools={tools}
            />
        </div>
    )
}

export default Programming;