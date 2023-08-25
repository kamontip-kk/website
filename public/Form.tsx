import Link from "next/link"
import { Component } from "react"
import Icon from "@ant-design/icons"
import { type } from "os"

export const SwitchInput = (type: string, customProps: any) => {
    switch (type?.toLowerCase()) {
        case 'section': 
            return <Section {...customProps}/>
        case 'text':
            return <Text {...customProps}/>
        case 'list':
        default:
            return <List {...customProps} />
    }
}

export const Text = ({ value }: { value: any }) => {
    return <p>{value}</p>
}

export const List = ({ value, icon, href }: { value: any, icon? : any, href? : string }) => {
    return <Link target="_blank" href={href || ''}>
            <div>
            {icon ? icon
            : <span> • </span>
            }
            <span className={href ? 'includelink' : ''} > {value}</span>
            </div>
</Link>
}


export const Form = ({ form }: { form: any[] }) => {
    return <>
    {form.map((e: any) => {
        const { type } = e
        let cuscomProps = e
        return SwitchInput(type, cuscomProps)
    })
    }
    </>
}

export const Section = ({ label, data }: { label:string, data : any[] }) => {
    let obj = []

    if(data[0].type === 'row'){
        return <>
        <h4>{label}</h4>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>{data[0].rowitems.map((e: any) => {
            obj = e.map((e: any) => { return { value: e } })
            return <div>
                    <Form form={obj}/>
                </div>
        }) }
        </div>
        </>
    } else {
        obj = data.map((e: any) => { return { value: e.value || e, type: e.type || 'list' } })

        return <>
            <h4>{label}</h4>
            <Form form={obj}/>
        </> 
    }

}