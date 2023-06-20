import React from "react"
import { Avatar } from "antd"
import commonStyle from "styles/common.module.css"
import spaceStyle from "styles/space.module.css"

const WhatICanDo: React.FC = () => {
  const items = [
    { src: "/icons/react.svg", alt: "React.js" },
    { src: "/icons/nextjs.svg", alt: "Next.js" },
    { src: "/icons/gatsbyjs.svg", alt: "Gatsby.js" },
    { src: "/icons/vue.svg", alt: "Vue.js" },
    { src: "/icons/nuxtjs.svg", alt: "Nuxt.js" },
    { src: "/icons/typescript.svg", alt: "typescript" },
    { src: "/icons/html5_white.svg", alt: "html5" },
    { src: "/icons/css3_white.svg", alt: "css3" },
    { src: "/icons/aws_white.svg", alt: "AWS" },
    { src: "/icons/python.svg", alt: "Python" },
    { src: "/icons/flutter.svg", alt: "Flutter" },
    { src: "/icons/java.svg", alt: "Java" },
  ]
  return (
    <div className={commonStyle.container}>
      <h2 className={commonStyle.head}>{"WHAT I CAN DO"}</h2>
      <div className={commonStyle.logoBox}>
        {items.map((item) => (
          <Avatar
            key={item.alt}
            size={50}
            src={item.src}
            alt={item.alt}
            className={`${spaceStyle.mx05} ${commonStyle.techLogo}`}
          />
        ))}
      </div>
    </div>
  )
}
export default WhatICanDo
