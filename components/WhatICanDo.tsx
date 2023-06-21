import React from "react"
import { Avatar, Col, Popover, Row, Statistic } from "antd"
import commonStyle from "styles/common.module.css"
import spaceStyle from "styles/space.module.css"
import { techstacks } from "techstacks"

const WhatICanDo: React.FC = () => {
  const popContent = (item) => (
    <div className={commonStyle.popover}>
      <Row>
        <Col span={12}>
          <Statistic title="Level" value={item.level} />
        </Col>
        <Col span={12}>
          <Statistic title="Year of experience" value={item.year} />
        </Col>
        <Col span={24} className={spaceStyle.mt10}>
          {item.comment}
        </Col>
      </Row>
    </div>
  )

  return (
    <div className={commonStyle.container}>
      <h2 className={commonStyle.head}>{"WHAT I CAN DO"}</h2>
      {techstacks.map((item) => (
        <Popover content={popContent(item)} placement={item.placement}>
          <Avatar
            key={item.alt}
            size={50}
            src={item.src}
            alt={item.alt}
            className={`${spaceStyle.mx05} ${commonStyle.techLogo} `}
          />
        </Popover>
      ))}
    </div>
  )
}
export default WhatICanDo
