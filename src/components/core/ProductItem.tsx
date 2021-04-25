import { Button, Card } from 'antd'
import React from 'react'

export const ProductItem = () => {
    // const dispatch = useDispatch()
    // const addToCart = () => {
    //     addItem(product, () => {
    //       dispatch(push("/cart"))
    //     })
    //   }
    return (
        <>
        <Card
            hoverable
            style={{ width: 240 }}
            actions={[
                <Button type="link">
                加入购物车
              </Button>,
                  <Button type="link">
                  查看详情
                </Button>
              ]}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        </Card>
           <Card
           hoverable
           style={{ width: 240 }}
           actions={[
            <Button type="link">
            加入购物车
          </Button>,
              <Button type="link">
              查看详情
            </Button>
          ]}
           cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
       >
       </Card>
          <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          actions={[
            <Button type="link">
            加入购物车
          </Button>,
              <Button type="link">
              查看详情
            </Button>
          ]}
      >
      </Card>
      </>
    )
}
