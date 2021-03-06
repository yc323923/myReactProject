import { PageHeader } from 'antd'
import React, { FC } from 'react'
import Navigation from './Navigation'

interface Props {
    children:React.ReactNode,
    title:string
    subTitle:string
}
const Layout:FC<Props> = ({children,title,subTitle}) => {
    return (
        <div>
            <Navigation/>
            <PageHeader className = "jumbotron" title={title} subTitle={subTitle}></PageHeader>
            <div className="layout">
                {children}
            </div>
        </div>
    )
}

export default Layout
