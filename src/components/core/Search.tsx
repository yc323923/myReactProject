import { Button, Col, Divider, Form, Input, Row, Select } from "antd"
import React, { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import { AppState } from "../../store/reducers/index"
import { ProductItem } from "./ProductItem"

const Search = () => {
    return (
        <>
      <Form
   
        layout="inline"
        initialValues={{ category: "All" }}
      >
        <Input.Group compact>
          <Form.Item name="category">
            <Select>
              <Select.Option value="All">所有分类</Select.Option>
              <Select.Option value="angular">angular</Select.Option>
              <Select.Option value="vue">vue</Select.Option>

            </Select>
          </Form.Item>
          <Form.Item name="search">
            <Input placeholder="请输入搜索关键字" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">搜索</Button>
          </Form.Item>
        </Input.Group>
      </Form>
      <Divider />
      <Row gutter={[16, 16]}>
        
          <Col span="6">
            <ProductItem  />
          </Col>
          <Col span="6">
            <ProductItem  />
          </Col>
          <Col span="6">
            <ProductItem  />
          </Col>
          <Col span="6">
            <ProductItem  />
          </Col>

      </Row>
    </>
    )
}

export default Search
