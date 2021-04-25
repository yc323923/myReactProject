import Layout from './Layout'
import React from 'react'
import { Button, Form, Input, Result } from 'antd'
import { SigninPayload, signin } from '../../store/actions/auth.action';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store/reducers';
import { AuthState } from '../../store/reducers/auth.reducer';
import { isAuth } from '../helpers/auth';
import { Redirect } from 'react-router-dom';
export const Signin = () => {
    const dispatch = useDispatch();
    const auth = useSelector<AppState, AuthState>(state => state.auth)
    const onFinish = (value: SigninPayload) => {
        dispatch(signin(value))
    }
    // 2. 登录失败 显示错误信息
    const showError = () => {
        console.log(auth.signin)
        if (auth.signin.loaded && !auth.signin.success) {
            return (
                <Result
                    status="warning"
                    title="登录失败"
                    subTitle={auth.signin.message}
                />
            )
        }
    }

    //3.登录成功 根据脚色跳转到对应的页面
    const redirect = ()=>{
        const auth = isAuth()
        if(auth){
           //根据后台的数据来判断该用户是什么
            return <Redirect to="/user/dashboard"></Redirect>
        }
    }
    return (
        <Layout title="登录" subTitle="">
            <div className="login">
                {showError()}
                {redirect()}
                <Form onFinish={onFinish}>
                    <Form.Item name="email" label="邮箱">
                        <Input />
                    </Form.Item>
                    <Form.Item name="password" label="密码">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout>
    )
}
