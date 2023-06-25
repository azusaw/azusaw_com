import React from "react"
import { Avatar, Col, Row } from "antd"
import commonStyle from "styles/common.module.css"
import spaceStyle from "styles/space.module.css"

const AboutMe: React.FC = () => {
  return (
    <div className={commonStyle.container}>
      <h2 className={commonStyle.head}>{"ABOUT ME"}</h2>
      <Row gutter={[16, 24]}>
        <Col xs={{ span: 24 }} md={{ span: 16 }}>
          {"It's azsaw. I was born in 1993. "}
          {
            "Currently I'm working as a front-end engineer but my career was started from back-end engineer. "
          }
          {
            "My greatest strength is that I can not only design but also development. "
          }
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 6 }}
          className={`${spaceStyle.alignRight} ${spaceStyle.mr15}`}
        >
          <Avatar size={100} src="/images/Tinny.jpg" />
        </Col>
      </Row>
    </div>
  )
}
export default AboutMe
