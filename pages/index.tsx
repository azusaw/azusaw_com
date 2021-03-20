import React from "react"
import PageLayout from "../layouts/PageLayout"
import colorStyle from "../styles/color.module.css"
import commonStyle from "../styles/common.module.css"
import sizeStyle from "../styles/size.module.css"

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
      <div style={{ height: "100vh" }}>dummy</div>
    </PageLayout>
  )
}
