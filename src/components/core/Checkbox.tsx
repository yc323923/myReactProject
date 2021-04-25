import React, { useEffect, FC } from "react"
import { List, Typography, Checkbox as AntdCheckbox } from "antd"
import { useDispatch, useSelector } from "react-redux"

import { AppState } from "../../store/reducers/index"

import { CheckboxValueType } from "antd/lib/checkbox/Group"

const { Title } = Typography

interface Props {
  handleFilter: (arg: string[]) => void
}

const Checkbox = () => {
  const dispatch = useDispatch()

//   const category = useSelector<AppState, CategoryState>(
//     state => state.category
//   )

//   useEffect(() => {
//     dispatch(getCategory())
//   }, [])

  const category = [{
    label: "angular",
    value: "angular" 
  },
  {
    label: "vue",
    value: "vue" 
  },
  {
    label: "react",
    value: "react" 
  }
]
  return (
    <>
      <Title level={4}>按照分类筛选</Title>
      <AntdCheckbox.Group
        className="checkBoxFilter"
        options={category}

      />
    </>
  )
}

export default Checkbox
