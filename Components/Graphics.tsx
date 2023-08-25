import { Divider } from 'antd';
import React, { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import Image from 'next/image'
import jojiwalk from '../public/assets/video/jojiwalk.gif'
import jojijump from '../public/assets/video/jojijump.gif'
import cat from '../public/assets/img/cat.png'
import Link from 'next/link';

function Graphics() {
    const [open, setOpen] = useState(false);
    const { Meta } = Card;
    const [isWalk,setIswalk] = useState(false);
    const [isJump,setIsjump] = useState(true);

    const onChange = () => {
        setIswalk(!isWalk); 
        setIsjump(!isJump);
    }

    const onClick = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    return (
        <div className={`portsection`}>
            <Divider className={`porttitle`} orientation="left">Graphics and Animation</Divider>
            <div className={`grid`}>
                <Card className={`portcard`} onClick={onClick}
                    hoverable
                    style={{ width: 500 }}
                    cover={<img alt='pixelart' src="https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/bg_town.png?alt=media&token=a21de4b0-b800-4b48-b9d2-e6cdbfd69a9a" />}
                >
                    <Meta
                        style={{ fontSize: '22px' }}
                        title="Pixel Art" description="Joji and The Cat" />
                </Card>
            </div>
            <Modal
                centered
                visible={open}
                onCancel={onClose}
                cancelButtonProps={{ disabled: true }}
                width={1500}
                footer={null}
                bodyStyle={{ backgroundColor: '#f3ebdc' }}
            >
                <div className={`graphicinfo`}>
                    <div className={`graphic`}>
                        <div className={`flexbox`}>
                            <div className={`walk`} style={{ display: isWalk ? 'block' : 'none' }}><Image src={jojiwalk} alt="jojiwalk" height={300} width={300}/></div>
                            <div className={`jump`} style={{ display: isJump ? 'block' : 'none' }} ><Image src={jojijump} alt="jojijump" height={300} width={300}/></div>
                            <div className={`cat`}><Image src={cat} alt="cat" height={100} width={100}/></div>
                        </div>
                        <Button onClick={onChange} disabled={isWalk}>Walk</Button> &nbsp;
                        <Button onClick={onChange} disabled={isJump}>Jump</Button>
                    </div>
                    <div className={`right`}>
                        <p className={`projectname`}> Joji </p>
                            <p className={`projecttools`}>
                                (Using: Aesprite)
                            </p>
                            <span className={`projectexplain`}>
                                Joji and the black cat are my character design for game in college class. I drawed everything in 
                                pixel art style and animating by Aesprite.
                            </span>
                            
                        </div>

                </div>
            </Modal>
        </div>
    )
}

export default Graphics;