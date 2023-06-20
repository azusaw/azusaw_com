import React from "react"
import { motion, useAnimation } from "framer-motion"
import { Avatar, Button, Col, Form, Image, Input, message, Row } from "antd"
import { useForm } from "antd/lib/form/Form"
import colorStyle from "../../styles/color.module.css"
import commonStyle from "../../styles/common.module.css"
import sizeStyle from "../../styles/size.module.css"
import spaceStyle from "../../styles/space.module.css"

const Works: React.FC = () => {
  return (
    <div className={commonStyle.container}>
      <h2 className={commonStyle.head}>{"WORKS"}</h2>
    </div>
  )
}
export default Works
