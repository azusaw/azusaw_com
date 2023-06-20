import React from "react"
import { FireFilled, LikeFilled, MailFilled } from "@ant-design/icons"
import PageLayout from "../layouts/PageLayout"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import WhatICanDo from "../components/WhatICanDo"
import Works from "../components/Works"
import colorStyle from "../styles/color.module.css"
import commonStyle from "../styles/common.module.css"
import sizeStyle from "../styles/size.module.css"
import spaceStyle from "../styles/space.module.css"

const IndexPage: React.FC = () => {
  return (
    <PageLayout title={"azusaw.work"}>
      <div className={`${colorStyle.white} ${sizeStyle.lineLarge} `}>
        <div className={commonStyle.container}>
          {"I'm a software engineer in Tokyo."}
          <br />
          {"I'm in the journey to improve my development skills and myself."}
          <div className={`${sizeStyle.lineXLarge} ${spaceStyle.my10}`}>
            {"Want to know about me more? -> "}
            <span className={commonStyle.bold}>
              <span className={commonStyle.backGroundFade}>
                {"Explore this site."}
                <LikeFilled
                  className={`${spaceStyle.pl05} ${commonStyle.goodIcon}`}
                />
              </span>
            </span>
            <br />
            {"Want to view my works?  -> "}
            <span className={commonStyle.bold}>
              <span className={commonStyle.underLineToRight}>
                {"Come to my gallery."}
                <FireFilled
                  className={`${spaceStyle.pl05} ${commonStyle.mailIcon}`}
                />
              </span>
            </span>
            <br />
            {"Want to work together?  -> "}
            <span className={commonStyle.bold}>
              <span className={commonStyle.underLineToRight}>
                {"Send me a message."}
                <MailFilled
                  className={`${spaceStyle.pl05} ${commonStyle.mailIcon}`}
                />
              </span>
            </span>
          </div>
        </div>
        <AboutMe />
        <WhatICanDo />
        <Works />
        <Contact />
      </div>
    </PageLayout>
  )
}
export default IndexPage
