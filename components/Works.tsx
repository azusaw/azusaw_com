import React, { useEffect } from "react"
import commonStyle from "styles/common.module.css"
import spaceStyle from "styles/space.module.css"
import sizeStyle from "styles/size.module.css"
import { Col, Row } from "antd"
import { gsap } from "gsap"
import { works } from "data/works"

const WorkCard = (props: {
  idx: number
  work: {
    img: string
    title: string
    url: string
  }
}) => (
  <div id={`card-${props.idx}`} className={spaceStyle.pb10}>
    <img
      alt={props.work.img}
      src={props.work.img}
      width={"100%"}
      height={"220px"}
    />
    <div className={spaceStyle.pa10}>
      {props.work.title}
      <br />
      <span className={sizeStyle.fontXSmall}>{props.work.url}</span>
    </div>
  </div>
)

const Works: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeatDelay: 1 })
    for (let i = 0; i < works.length; i++)
      tl.fromTo(`#card-${i}`, { opacity: 0 }, { opacity: 1, x: 0 })
  }, [gsap])

  return (
    <div className={commonStyle.container}>
      <h2 className={commonStyle.head}>{"WORKS"}</h2>
      <Row gutter={[16, 16]}>
        {works.map((work, idx) => (
          <Col xs={{ span: 24 }} md={{ span: 8 }}>
            <WorkCard idx={idx} work={work} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default Works
