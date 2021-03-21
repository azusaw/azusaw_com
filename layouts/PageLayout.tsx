import React from "react"
import Link from "next/link"
import Head from "next/head"
import colorStyle from "../styles/color.module.css"
import commonStyle from "../styles/common.module.css"
import sizeStyle from "../styles/size.module.css"
import spaceStyle from "../styles/space.module.css"
import Azusaw from "../components/logo/Azusaw"
import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
  MailFilled,
} from "@ant-design/icons"

export default function PageLayout({ title, children }) {
  return (
    <div style={{ backgroundColor: "#222228", minHeight: "100vh" }}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={spaceStyle.mxAuto} style={{ maxWidth: "60rem" }}>
        <div
          className={spaceStyle.pa05}
          style={{
            position: "sticky",
            top: "20px",
            width: "100vw",
            maxWidth: "60rem",
            zIndex: 15,
          }}
        >
          <span className={`${commonStyle.pointer} ${spaceStyle.ma10}`}>
            <Azusaw />
          </span>
          <span
            className={spaceStyle.floatRight}
            style={{ position: "relative" }}
          >
            <GithubFilled className={commonStyle.iconButton} />
            <LinkedinFilled className={commonStyle.iconButton} />
            <InstagramFilled className={commonStyle.iconButton} />
            <MailFilled className={commonStyle.iconButton} />
          </span>
        </div>
        <div style={{ paddingTop: "10px" }}>
          <div className={`${commonStyle.relative} ${spaceStyle.pa20}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
