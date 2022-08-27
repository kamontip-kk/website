import React from "react";
import { Modal } from 'antd';
import ReactPlayer from 'react-player';
import Link from "next/link";

const CardModal = (props: any) => {

    const onClose = () => {
        props.passData(false);       
    }

    return (
        <Modal
            centered
            visible={props.visible}
            onCancel={onClose}
            cancelButtonProps={{ disabled: true }}
            width={700}
            footer={null}
            bodyStyle={{backgroundColor:'#f3ebdc'}}
        >
                    <>
                        <div className={`left`}>
                            <ReactPlayer controls url={props.url} id={`video`}/> 
                        </div>
                        <div className={`right`}>
                            <p className={`projectname`}>{props.title}</p>
                            <p className={`projecttools`}>
                                (Using: {props.tools})
                            </p>
                            <span className={`projectexplain`}>
                                {props.explain}
                            </span>
                            {props.title == 'Maths Phra Dhabos'?
                            <Link href="https://play.google.com/store/apps/details?id=com.kamontipkk.mathsphradhabos">
                                <a>Google Play!</a>
                            </Link>:null  
                            }
                            
                        </div>
                        
                    </>
        </Modal>
    )
}

export default CardModal;