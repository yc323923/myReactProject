
import { Button, Form, Input, message, Result } from 'antd'

import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../core/Layout'

export const AddCategory = () => {
    const onFinish = (value: { name: string }) => {
        console.log(value)
        message.success(`[${value.name}] 分类添加成功`)
      }
    return (
        <Layout title="添加分类" subTitle="">
            <Form onFinish={onFinish}>
                <Form.Item name="name" label="分类名称">
                    <Input />
                </Form.Item>
                <Form.Item>
                     <Button type="primary" htmlType="submit">
                        添加分类
                     </Button>
                </Form.Item>
            </Form>
            <Button>
                <Link to="/admin/dashboard">返回 Dashboard</Link>
            </Button>
        </Layout>
    )
}
