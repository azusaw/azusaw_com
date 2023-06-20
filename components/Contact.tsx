import React from "react"
import { motion, useAnimation } from "framer-motion"
import { Button, Form, Image, Input, message } from "antd"
import { HeartFilled } from "@ant-design/icons"
import { useForm } from "antd/lib/form/Form"
import colorStyle from "styles/color.module.css"
import commonStyle from "styles/common.module.css"
import sizeStyle from "styles/size.module.css"
import spaceStyle from "styles/space.module.css"

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { sm: { span: 24 }, md: { offset: 1, span: 17 } },
}
const tailLayout = {
  wrapperCol: { sm: { span: 24 }, md: { offset: 6, span: 17 } },
}

const Contact: React.FC = () => {
  const [form] = useForm()
  const controls = useAnimation()

  const mailSendAnimationStart = () => {
    controls.start({
      x: 50,
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

  const sendGoogleForm = (values: any) => {
    let formData = new URLSearchParams()
    const googleFormAction =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfuqYA1f9_sNHYNG09ql1WuayvkuEOhTii7nt3fpB5jR0Oa2g/formResponse"

    formData.append("entry.1388202581", values.email)
    formData.append("entry.567215944", values.name)
    formData.append("entry.2042146725", values.message)

    fetch(googleFormAction, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    })
      .then(() =>
        message.success({
          icon: <></>,
          content: (
            <>
              <div
                className={`${commonStyle.bold} ${sizeStyle.fontXLarge} ${spaceStyle.py05}`}
              >
                {"Thank you"}
                <HeartFilled
                  style={{ paddingLeft: "10px", color: "#ff8dbc" }}
                />
              </div>
              <div className={`${spaceStyle.py10}`}>
                {"I checking the message and contact you soon."}
                <br />
                {"Having a nice day!"}
              </div>
            </>
          ),
          style: { marginTop: "30vh" },
          duration: 5,
        })
      )
      .catch(() => {
        console.log("error")
      })
  }

  return (
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
          width={32}
          src="/images/paper-plane1.svg"
          className={`${spaceStyle.ml10} ${spaceStyle.py05}`}
          onClick={mailSendAnimationStart}
        />
      </motion.span>
      <Form
        {...layout}
        form={form}
        colon={false}
        onFinish={sendGoogleForm}
        className={spaceStyle.mt10}
      >
        <Form.Item
          name="email"
          label={<span className={colorStyle.white}>{"Email"}</span>}
          rules={[
            { required: true, message: "Please input your email address." },
            {
              type: "email",
              message: "Please input value as email address format.",
            },
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
          name="message"
          label={<span className={colorStyle.white}>{"Messages"}</span>}
          rules={[{ required: true, message: "Please input some messages." }]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit" block className={commonStyle.submitButton}>
            {"Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Contact
