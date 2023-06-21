import React, { useEffect } from "react"
import commonStyle from "styles/common.module.css"
import spaceStyle from "styles/space.module.css"
import { Card, Col, Row } from "antd"
import { gsap } from "gsap"

const works = [1, 2, 3, 4, 5, 6]

const WorkCard = (props: { idx: number }) => (
  <Card
    id={`card-${props.idx}`}
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        height={200}
      />
    }
  >
    {"Europe Street beat"}
    {"www.instagram.com"}
  </Card>
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
      <Row>
        {works.map((work, idx) => (
          <Col span={8} className={spaceStyle.mt15}>
            <WorkCard idx={idx} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default Works
