import React from "react"
import PageLayout from "../layouts/PageLayout"
import colorStyle from "../styles/color.module.css"
import spaceStyle from "../styles/space.module.css"

export default function Home() {
  return (
    <PageLayout title={"azusaw.com"}>
      <div className={colorStyle.white}>
        {"I am a software engineer from Japan."}
        <br />
        {"I'm in the journey to improve my development skills and myself."}
      </div>
    </PageLayout>
  )
}
