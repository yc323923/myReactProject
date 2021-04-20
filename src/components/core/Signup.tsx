import { Button, Form,Input, Result } from 'antd'
import React, { useEffect } from 'react'
import Layout from './Layout'
import { SignupPayload, signup, resetSignup } from '../../store/actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers/index';
import { AuthState } from '../../store/reducers/auth.reducer';
import { Link } from 'react-router-dom';

export const Signup = () => {
    const dispatch = useDispatch();
    const auth = useSelector<AppState,AuthState>(state=>state.auth)
    const [form] = Form.useForm()
    const onFinish = (value:SignupPayload)=>{
        dispatch(signup(value))
    }
    //注册成功
    useEffect(()=>{
        if(auth.signup.loaded && auth.signup.success){
            form.resetFields();
        }
    },[auth])
    //注册成功 显示成功的信息
    const showSuccess = ()=>{
        if(auth.signup.loaded && auth.signup.success){
            return <Result
            status="success"
            title="注册成功"
            extra={[
              <Button type="primary">
                  <Link to="/signin">登录</Link>
              </Button>,
            ]}
          />
        }
    }
    //注册成功 显示成功的信息
    const showFail = ()=>{
        if(auth.signup.loaded && !auth.signup.success){
            return <Result
            status="error"
            title="注册失败"
            extra={[
                <Button type="primary">
                   确定
                </Button>,
            ]}
            />
        }
    }

    //离开页面 重置状态
    useEffect(()=>{
        return ()=>{
            dispatch(resetSignup())
        }
    },[])
    return (
        <Layout title="注册" subTitle="">
            {showSuccess()}
            {showFail()}
            <div className="login">
                <Form form={form} onFinish={onFinish}>
                    <Form.Item name="email" label="邮箱">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="name" label="昵称">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="password" label="密码">
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">注册</Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout>
    )
}
