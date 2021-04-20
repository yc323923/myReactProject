import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

const Home = () => {
    const state = useSelector(state => state);
    return (
        <Layout title="商城" subTitle="欢迎来到人间天堂">
            <div>
            home 
            </div>
        </Layout>
    )
}

export default Home
