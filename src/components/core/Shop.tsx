import { Col, Row, Space } from 'antd'
import React from 'react'
import Checkbox from './Checkbox'
import Layout from './Layout'
import { ProductItem } from './ProductItem'
import RadioBox from './Radiobx'

const Shop = () => {
    const filterDOM = () => (
        <Space size="middle" direction="vertical">
          <Checkbox/>
          <RadioBox/>
        </Space>
      )
    return (
        <Layout title="购物" subTitle="尽情购物吧">
          <Row>
              <Col span="4">
                  {
                    filterDOM()  
                  }
              </Col>
              <Col span="20">
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
              </Col>
          </Row>
        </Layout>
    )
}

export default Shop
