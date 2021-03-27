import React from "react"
import { motion, useAnimation } from "framer-motion"
import { Button, Form, Image, Input, message } from "antd"
import { HeartFilled } from "@ant-design/icons"
import { useForm } from "antd/lib/form/Form"
import colorStyle from "../../styles/color.module.css"
import commonStyle from "../../styles/common.module.css"
import sizeStyle from "../../styles/size.module.css"
import spaceStyle from "../../styles/space.module.css"

const WhatICanDo: React.FC = () => {
  return (
    <div className={commonStyle.container}>
      <h2 className={commonStyle.head}>{"WHAT I CAN DO"}</h2>
      {"React.js, Next.js"}
    </div>
  )
}
export default WhatICanDo
