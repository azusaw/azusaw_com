import React, { useEffect, useState } from "react"
import Link from "next/link"
import Head from "next/head"
import SiteLogo from "../components/logo/SiteLogo"
import MouseFollowEffect from "../components/mouse-effect/MouseFollowEffect"
import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
  MailFilled,
} from "@ant-design/icons"
import colorStyle from "../styles/color.module.css"
import commonStyle from "../styles/common.module.css"
import sizeStyle from "../styles/size.module.css"
import spaceStyle from "../styles/space.module.css"

export default function PageLayout({ title, children }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    /* breakpoint in antd grid */
    setIsMobile(window.innerWidth <= 768)
  }, [typeof window !== "undefined" && window?.innerWidth])

  return (
    <>
      {!isMobile && <MouseFollowEffect />}
      <div style={{ backgroundColor: "#222228", minHeight: "100vh" }}>
        <Head>
          <title>{title}</title>
        </Head>
        <div className={spaceStyle.mxAuto} style={{ maxWidth: "55rem" }}>
          <div
            className={`${commonStyle.header} ${spaceStyle.pa05}`}
            style={{
              position: "sticky",
              top: "20px",
              width: "100vw",
              maxWidth: "60rem",
              zIndex: 15,
            }}
          >
            <span className={`${commonStyle.pointer} ${spaceStyle.ma10}`}>
              <SiteLogo />
            </span>
            {!isMobile && (
              <span className={spaceStyle.floatRight}>
                <a target="_blank" href={"https://github.com/azusaw/"}>
                  <GithubFilled className={commonStyle.iconButton} />
                </a>
                <a target="_blank" href={"https://www.linkedin.com/in/azusaw/"}>
                  <LinkedinFilled className={commonStyle.iconButton} />
                </a>
                <a target="_blank" href={"https://www.instagram.com/azusaw_/"}>
                  <InstagramFilled className={commonStyle.iconButton} />
                </a>
                <MailFilled className={commonStyle.iconButton} />
              </span>
            )}
          </div>
          <div style={{ paddingTop: "20px" }}>
            <div className={`${commonStyle.relative} ${spaceStyle.px20}`}>
              {children}
            </div>
          </div>
          <div
            className={`${colorStyle.white} ${sizeStyle.fontSmall} ${spaceStyle.py10} ${spaceStyle.alignRight}`}
          >
            {`Copyright ${new Date().getFullYear()} `}
            <Link href="/">
              <span className={`${commonStyle.bold} ${commonStyle.pointer}`}>
                {"azusaw.work"}
              </span>
            </Link>
            {` All rights reserved.`}
          </div>
        </div>
      </div>
    </>
  )
}
