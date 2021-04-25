import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'
import Search from './Search';

const Home = () => {
    const state = useSelector(state => state);
    return (
        <Layout title="商城" subTitle="欢迎来到人间天堂">
         <Search></Search>
        </Layout>
    )
}

export default Home
