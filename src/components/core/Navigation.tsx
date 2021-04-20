import { Menu } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppState } from '../../store/reducers/index';
import { RouterState } from 'connected-react-router';

function isActive(currentPath:string,path:string):string{
   return currentPath === path ? "ant-menu-item-selected" : ""
}

const Navigation = () => {
    const router = useSelector<AppState,RouterState>(state=>state.router);
    const currentPath = router.location.pathname;
    const isHome = isActive(currentPath,"/");
    const isShop = isActive(currentPath,"/shop");
    const isSignin = isActive(currentPath,"/signin");
    const isSignup = isActive(currentPath,"/signup");
    return (
        <Menu  mode="horizontal" selectable = {false}>
            <Menu.Item className={isHome}>
                <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item  className={isShop}>
                <Link to="/shop">商城</Link>
            </Menu.Item>
            <Menu.Item className={isSignin}>
                <Link to="/signin">登录</Link>
            </Menu.Item>
            <Menu.Item  className={isSignup}>
                <Link to="/signup">注册</Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navigation
