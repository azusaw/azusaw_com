import React from "react"
import PageLayout from "../layouts/PageLayout"
import colorStyle from "../styles/color.module.css"
import commonStyle from "../styles/common.module.css"
import sizeStyle from "../styles/size.module.css"
import spaceStyle from "../styles/space.module.css"
import { Button, Form, Input } from "antd"
import { SendOutlined } from "@ant-design/icons"
import PaperPlane from "../components/logo/PaperPlane"

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { offset: 2, span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 7, span: 16 },
}

export default function Home() {
  return (
    <PageLayout title={"azusaw.com"}>
      <div className={`${colorStyle.white} ${sizeStyle.lineLarge} `}>
        {"I'm a software engineer in Tokyo."}
        <br />
        {"I'm in the journey to improve my development skills and myself."}
        <br />
        <br />
        {"Want to know about me more? -> "}
        <span className={commonStyle.bold}> {"Explore this site."}</span>
        <br />
        {"Want to work together?  -> "}
        <span className={commonStyle.bold}> {"Send me a message."}</span>
      </div>
      <div className={commonStyle.box}>
        <div className={colorStyle.bold}>
          <SendOutlined className={sizeStyle.fontXLarge} />
          <PaperPlane />
        </div>
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
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div style={{ height: "100vh", color: "#fff" }}>{"dummy"}</div>
    </PageLayout>
  )
}
