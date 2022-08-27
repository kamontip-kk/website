import { Divider } from 'antd';
import React, { useState } from 'react';
import { Card } from 'antd';
import ReactPlayer from 'react-player';
import CardModal from './CardModal';

function Programming() {
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [explain, setExplain] = useState<string>();
    const [tools, setTools] = useState<string>();

    const bookstore = {
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/boookstore.mp4?alt=media&token=05e4088b-b319-4f26-886b-f70739d83a14',
        title: 'Online Bookstore',
        tools: 'TypeScript , Next.js , Nest.js, MySQL , Ant Design',
        explain: 'This online bookstore was inspired by my obsession with books. I would like some bookstore to use this website I developed someday.',
    }

    const maths = {
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/mathsphradhabos.mp4?alt=media&token=d9e274c5-0b86-4bb4-90e0-3773f6109921',
        title: 'Maths Phra Dhabos',
        tools: 'Dart , Flutter , Firestore , C# , Unity',
        explain: `This is my thesis that I developed with my friends. This application will used by students at Phra Dhabos school. I was in charge of designing and developing the application and games. This application launched on `,
    }

    const minigolf = {
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/MiniGolf.mp4?alt=media&token=4f784920-ed22-4fac-94d7-7a4dbc8a7827',
        title: 'MiniGolf Online',
        tools: 'C# , Unity , Photon',
        explain: 'MiniGolf Online is my multiplayer game project in college class',
    }

    const { Meta } = Card;

    const onClick = (title:string) =>{
        if(title == 'bookstore'){
            setUrl(bookstore.url);
            setTitle(bookstore.title);
            setExplain(bookstore.explain);
            setTools(bookstore.tools);
        } else if (title == 'maths'){
            setUrl(maths.url);
            setTitle(maths.title);
            setExplain(maths.explain);
            setTools(maths.tools);
        } else {
            setUrl(minigolf.url);
            setTitle(minigolf.title);
            setExplain(minigolf.explain);
            setTools(minigolf.tools);
        }
        setOpen(true);
    }

    const getData = () =>{
        setOpen(false);
    }

    return(
        <div className={`portsection`}>
            <Divider className={`porttitle`} orientation="left">Programming</Divider>
            <div className={`grid`}>
                <Card className={`portcard`} onClick={()=>onClick('bookstore')}
                    hoverable
                    style={{ width: 500 }}
                    cover={<img alt="bookstorepreview" src="https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/bookstore_preview.png?alt=media&token=91b795ea-636e-4691-91e4-b859dd6f1a52" />}
                >
                    <Meta 
                    style={{ fontSize: '22px' }}
                    title="Website Development (Full-stack)" description="Online Bookstore" />
                </Card>

                <Card className={`portcard`} onClick={()=>onClick('maths')}
                    hoverable
                    style={{ width: 500 }}
                    cover={<img alt='appreview' src="https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/maths_preview.jpg?alt=media&token=cd7f54dc-9e9f-47af-b8f8-33cebb852bc0" />}
                >
                    <Meta 
                    style={{ fontSize: '22px' }}
                    title="Application Development (Full-stack)" description="Maths Phra Dhabos" />
                </Card>

                <Card className={`portcard`} onClick={()=>onClick('minigolf')}
                    hoverable
                    style={{ width: 500 }}
                    cover={<img alt='minigolfonline' src="https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/minigolf_preview.png?alt=media&token=57064be2-c488-4c5c-9853-1b3dbd6676ff" />}
                >
                    <Meta 
                    style={{ fontSize: '22px' }}
                    title="Game Development" description="MiniGolf Online" />
                </Card>
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