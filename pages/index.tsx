import React from "react"
import { motion, useAnimation } from "framer-motion"
import PageLayout from "../layouts/PageLayout"
import colorStyle from "../styles/color.module.css"
import commonStyle from "../styles/common.module.css"
import sizeStyle from "../styles/size.module.css"
import spaceStyle from "../styles/space.module.css"
import { Button, Form, Input, Image } from "antd"
import { LikeFilled, MailFilled } from "@ant-design/icons"

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { sm: { span: 24 }, md: { offset: 1, span: 17 } },
}
const tailLayout = {
  wrapperCol: { sm: { span: 24 }, md: { offset: 6, span: 17 } },
}

const IndexPage: React.FC = () => {
  const controls = useAnimation()
  const mailSendAnimationStart = () => {
    controls.start({
      x: 250,
      y: -200,
      transformOrigin: "center bottom",
      rotate: 180,
      opacity: [1, 1, 0],
      transition: {
        ease: "linear",
        duration: 1.8,
        repeat: 1,
        repeatType: "reverse",
        repeatDelay: 5,
      },
    })
  }
  return (
    <PageLayout title={"azusaw.work"}>
      <div className={`${colorStyle.white} ${sizeStyle.lineLarge} `}>
        {"I'm a software engineer in Tokyo."}
        <br />
        {"I'm in the journey to improve my development skills and myself."}
        <div className={`${sizeStyle.lineXLarge} ${spaceStyle.my10}`}>
          {"Want to know about me more? -> "}
          <span className={commonStyle.bold}>
            <span className={commonStyle.backGroundFade}>
              {"Explore this site."}
              <LikeFilled
                className={`${spaceStyle.pl05} ${commonStyle.goodIcon}`}
              />
            </span>
          </span>
          <br />
          {"Want to work together?  -> "}
          <span className={commonStyle.bold}>
            <span className={commonStyle.underLineToRight}>
              {"Send me a message."}
              <MailFilled
                className={`${spaceStyle.pl05} ${commonStyle.mailIcon}`}
              />
            </span>
          </span>
        </div>
      </div>
      <div className={commonStyle.box}>
        <h2
          className={commonStyle.head}
          style={{ display: "inline-block", position: "relative", top: 0 }}
        >
          {"CONTACT"}
        </h2>
        <motion.span animate={controls} style={{ position: "absolute" }}>
          <Image
            preview={false}
            width={45}
            src="/images/paper-plane1.svg"
            className={spaceStyle.ml10}
            onClick={mailSendAnimationStart}
          />
        </motion.span>
        <Form {...layout} colon={false}>
          <Form.Item
            name="email"
            label={<span className={colorStyle.white}>{"Email"}</span>}
            rules={[
              { required: true, message: "Please input your email address." },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label={<span className={colorStyle.white}>{"Name"}</span>}
            rules={[{ required: true, message: "Please input your name." }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="messages"
            label={<span className={colorStyle.white}>{"Messages"}</span>}
            rules={[{ required: true, message: "Please input messages." }]}
          >
            <Input.TextArea rows={5} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              block
              className={commonStyle.elevation}
            >
              {"Submit"}
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div style={{ height: "100vh", color: "#fff" }}>{"dummy"}</div>
    </PageLayout>
  )
}
export default IndexPage
