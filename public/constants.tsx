import { MailTwoTone, PhoneTwoTone, FacebookOutlined, HomeTwoTone } from '@ant-design/icons'

export const CONTACTS: object[] = [
    {
        value: 'kamontip.kpr@gmail.com',
        href: 'mailto:kamontip.kpr@gmail.com?',
        icon: <MailTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />,
        type: 'list'
    },
    {
        value: '082-212-8661',
        href: 'tel:0822128661',
        icon: <PhoneTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />,
        type: 'list'
    },
    {
        value: 'Wan Kamontip',
        href: 'https://www.facebook.com/kamontip.kpr.9/',
        icon: <FacebookOutlined style={{ fontSize: '15px', color: '#afafac' }} />,
        type: 'list'
    },
    {
        value: 'Khlong San, Bangkok, 10600',
        href: 'https://goo.gl/maps/vj11wSHWn4Cp2wXk7',
        icon: <HomeTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />,
        type: 'list'
    }
]

export const PROGRAMMING_SKILLS: string[] = [
    'HTML', 'CSS', 'Less', 'JavaScript', 'TypeScript', 'React Native', 'ReactJS', 
    'NextJS'
]

export const PROGRAMMING_SKILLS_2: string[] = [
    'MySQL', 'Node' ,'NestJS', 'Firebase', 'Flutter','C#', 'Git'
]

export const GRAPGHICS_SKILLS: string[] = [
    'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Animate', 'Aesprite'
]

export const LANG_SKILLS: string[] = [
    'Thai (Native)', 'English'
]

export const ALL_SKILLS: object[] = [
    {
        label: 'Programming',
        data: [
            {
            type: 'row',
            rowitems: [ 
                PROGRAMMING_SKILLS, 
                PROGRAMMING_SKILLS_2 
            ]
            }
        ],
        type: 'section'    
    },
    // {
    //     label: 'Graphics and Animation',
    //     data: GRAPGHICS_SKILLS,
    //     type: 'section'    
    // },
    // {
    //     label: 'Languages',
    //     data: LANG_SKILLS,
    //     type: 'section'    
    // },
]

export const REFERENCES: object[] =  [
    {
        label: 'นายเอกสิทธิ์ (หัวหน้างาน)',
        data: [
            {
                value: 'kamontip.kpr@gmail.com',
                href: 'mailto:kamontip.kpr@gmail.com?',
                icon: <MailTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />,
                type: 'list'
            },
            {
                value: '082-212-8661',
                href: 'tel:0822128661',
                icon: <PhoneTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />,
                type: 'list'
            },
        ],
        type: 'section'    
    },
    {
        label: 'นายพงศกร (Senior Developer)',
        data: [
            {
                value: 'kamontip.kpr@gmail.com',
                href: 'mailto:kamontip.kpr@gmail.com?',
                icon: <MailTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />,
                type: 'list'
            },
            {
                value: '082-212-8661',
                href: 'tel:0822128661',
                icon: <PhoneTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />,
                type: 'list'
            },
        ],
        type: 'section'    
    },
    {
        label: 'นายณัฐชานนท์ (Senior Developer)',
        data: [
            {
                value: 'kamontip.kpr@gmail.com',
                href: 'mailto:kamontip.kpr@gmail.com?',
                icon: <MailTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />,
                type: 'list'
            },
            {
                value: '082-212-8661',
                href: 'tel:0822128661',
                icon: <PhoneTwoTone twoToneColor={`#afafac`} style={{ fontSize: '14px' }} />,
                type: 'list'
            },
        ],
        type: 'section'    
    },
]

export const EDUCATION: object[] = [
    {
        label: 'College | 2019-2022',
        type: 'section',
        data: [
            {
                value: `Media Technology at King Mongkut's University of Technology Thonburi (GPAX 3.51)`,
                type: 'text'
            }
        ]
    },
    {
        label: 'High School | 2015-2018',
        type: 'section',
        data: [
            {
                value: 'Math-Eng (EP) at Suankularb Wittayalai Thonburi',
                type: 'text'
            }
        ]
    }
]

export const EXP: object[] = [
    {
        type: 'section',
        label: 'Full-stack Developer at Fin Insurance Broker Co., Ltd. | September 19, 2022 - present ',
        data: [
            {
                value: `Develop FIT Application`,
                type: 'list'
            },
            {
                value: `Develop B2C admin web `,
                type: 'list'
            },
            {
                value: `Develop Luckydraw web for 'FINTOTHEFUTURE2022' event`,
                type: 'list'
            },
            {
                value: `Develop some FIN BROKER(B2B) Application's Features`,
                type: 'list'
            },
            {
                value: `Develop some ฟินประกันรถ(B2C) Application's Features`,
                type: 'list'
            },
        ]
    },
    {
        type: 'section',
        label: 'Co-operative Education at 1Moby Co., Ltd. | July 1, 2021 - December 13, 2021',
        data: [
            {
                value: 'Update framework and applied new features to website',
                type: 'list'
            },
            {
                value: 'Made dynamic animation chart for showing data',
                type: 'list'
            },
            {
                value: 'Develope CRUD system for a banner of a new website',
                type: 'list'
            },
            {
                value: 'Test and find mistakes/errors of a new website',
                type: 'list'
            }
        ]
    }
]

export const HOBBIES: string[] = [
    'Learning Deutsch (German language)', 'Reading literature books' ,'Watching movies and anime', 
    'Playing games', 'Taking film photos'
]

export const NAV_BAR: object[] = [
    {
        value: 'home',
        href: `/`,
        label: 'Kamontip'
    },
    {
        value: 'port',
        href: `/portfolio`,
        label: 'Portfolio'
    },
    {
        value: 'resume',
        href: `/resume`,
        label: 'Resume'
    }
]

export const PROGRAMMING_PORT: object[] = [
    {
        ref: 'webadmin',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/webadmin_preview.png?alt=media&token=bd20496b-03ff-49ba-8b92-90636f4f6957',
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/webadmin.mp4?alt=media&token=1ef9af97-2e43-464b-b061-7703f1b772a8',
        title: 'B2C Admin Website',
        tools: 'JavaScript , Next.js , Node.js , Socket.IO , Mongoose , Redis , MySQL , CSS , Ant Design',
        explain: `B2C admin website is used for contact with customers , check insurance premiums , follow up on policies and etc.
        I have responsibilities to develop automatically check insurance premiums page, chat page, qrcode modal component.`,
        type: 'Web Development (Full-stack)'
    },
    {
        ref: 'fit',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/fit_check_pre.png?alt=media&token=7236b3c3-e96e-4215-bb2f-b02af58fd2eb',
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/fit.mp4?alt=media&token=7ac0c982-bcb4-434a-918b-9c845f6dddb7',
        title: 'FIT (Telesale)',
        tools: 'React Native , TypeScript , Node.js , MySQL',
        explain: 'FIT Application is used by telesales to check car and non-motor insurance premiums, follow up on policies and etc. I am mainly responsible for developing this application.',
        type: 'Application Development (Full-stack)'
    },
    {
        ref: 'b2c',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/b2c_kpi_pre.png?alt=media&token=f86bd774-3930-43ad-bf13-a25cdf414db4',
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/b2c_customizeKpi.mp4?alt=media&token=49552376-a0d7-42a1-8ea7-6a01685b46bc',
        title: 'B2C (ฟิน ประกันรถ)',
        tools: 'React Native , JavaScript , Node.js , MySQL',
        explain: 'B2C Application is used by customers to check car insurance premiums by themselves. I was in charge of developing customize KPI modal, SSL certificate pinning and coupon campaign .',
        type: 'Application Development (Full-stack)'
    },
    {
        ref: 'b2b',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/b2b_chat_pre.png?alt=media&token=c4dfb173-748b-4871-9b70-932ba5975ef9',
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/b2b_chat.mp4?alt=media&token=daf8c21f-dce3-4c96-9469-ecdae8037f6f',
        title: 'FIN BROKER',
        tools: 'React Native , JavaScript , Node.js , MySQL',
        explain: 'FIN BROKER is used for insurance broker to check car and non-motor insurance premiums, follow up on policies and etc. I was in charge of developing chat page',
        type: 'Application Development (Full-stack)'
    },
    {
        ref: 'luckydraw',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/luckydraw_pre.png?alt=media&token=c95fe944-4292-4482-80f7-ecaaabf29ed8',
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/luckydraw.mp4?alt=media&token=7f5f18d8-e9b5-4767-9be3-46a2b491fd2a',
        title: 'Lucky Draw',
        tools: 'TypeScript , Next.js , Node.js , MySQL',
        explain: 'Lucky Draw is a website using for random lucky winners in FINTOTHEFUTURE 2022 event. I develop all fronted things',
        type: 'Web Development (Frontend)'
    },
    {
        ref: 'bookstore',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/bookstore_preview.png?alt=media&token=91b795ea-636e-4691-91e4-b859dd6f1a52',
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/boookstore.mp4?alt=media&token=05e4088b-b319-4f26-886b-f70739d83a14',
        title: 'Online Bookstore',
        tools: 'TypeScript , Next.js , Nest.js , MySQL , CSS , Ant Design',
        explain: 'This online bookstore was inspired by my obsession with books. I would like some bookstore to use this website I developed someday.',
        type: 'Web Development (Full-stack)'
    },
    {
        ref: 'maths',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/maths_preview.jpg?alt=media&token=cd7f54dc-9e9f-47af-b8f8-33cebb852bc0' ,
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/mathsphradhabos.mp4?alt=media&token=d9e274c5-0b86-4bb4-90e0-3773f6109921',
        title: 'Maths Phra Dhabos',
        tools: 'Dart , Flutter , Firestore , C# , Unity',
        explain: `This is my thesis that I developed with my friends. This application will used by students at Phra Dhabos school. I was in charge of designing and developing the application and games. This application launched on `,
        type: 'Application Development (Full-stack)'
    },
    {
        ref: 'chart',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/dynamicchart.png?alt=media&token=6ecf0d6b-cace-413c-8808-4e6f604b5fb0',
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/dynamicchart.mp4?alt=media&token=94637237-7366-4274-af33-b8c931937d56',
        title: 'Dynamic Animation Chart',
        tools: 'CSS , Less',
        explain: 'Height of each chart depends on amount of data',
        type: 'Web Development (Frontend)'
    },
    {
        ref: 'minigolf',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/minigolf_preview.png?alt=media&token=57064be2-c488-4c5c-9853-1b3dbd6676ff',
        url: 'https://firebasestorage.googleapis.com/v0/b/resume-38774.appspot.com/o/MiniGolf.mp4?alt=media&token=4f784920-ed22-4fac-94d7-7a4dbc8a7827',
        title: 'MiniGolf Online',
        tools: 'C# , Unity , Photon',
        explain: 'MiniGolf Online is my multiplayer game project in college class',
        type: 'Game Development'
    }
]