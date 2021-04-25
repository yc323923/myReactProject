import React, { FC } from "react"

import { List, Radio, Typography } from "antd"

import { RadioChangeEvent } from "antd/lib/radio"

const { Title } = Typography

interface Props {
  handleFilter: (arg: number[]) => void
}

const RadioBox = () => {
  const onChange = (event: RadioChangeEvent) => {

  }

  const prices = [{price:"0-50"},{price:"50-100"}]

  return (
    <>
      <Title level={4}>按照价格筛选</Title>
      <Radio.Group>
        <List
          dataSource={prices}
          renderItem={item => (
            <List.Item>
                <Radio>{item.price}</Radio>
            </List.Item>
          )}
        />
      </Radio.Group>
    </>
  )
}

export default RadioBox
