import React from "react"
import { Avatar, Col, Row } from "antd"
import commonStyle from "../../styles/common.module.css"
import spaceStyle from "../../styles/space.module.css"

const AboutMe: React.FC = () => {
  return (
    <div className={commonStyle.container}>
      <h2 className={commonStyle.head}>{"ABOUT ME"}</h2>
      <Row>
        <Col md={{ span: 18 }} sm={{ span: 24 }}>
          {"It's azsaw. I was born in 1993. "}
          {
            "Currently I'm working as a front-end engineer but my career was started from back-end engineer. "
          }
          {
            "My greatest strength is that I can not only design but also development. "
          }
        </Col>
        <Col
          md={{ offset: 1, span: 5 }}
          sm={{ span: 24 }}
          className={spaceStyle.alignCenter}
        >
          <Avatar size={100} src="/images/Tinny.jpg" />
        </Col>
        <Col span={24}>
          <div className={commonStyle.backGroundFade}>
            {"Want to know me more?"}
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default AboutMe
