import React from "react"
import Link from "next/link"
import Head from "next/head"
import commonStyle from "../styles/common.module.css"
import spaceStyle from "../styles/space.module.css"
import Azusaw from "../components/logo/Azusaw"

export default function PageLayout({ title, children }) {
  return (
    <div style={{ backgroundColor: "#222228", minHeight: "200vh" }}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={spaceStyle.mxAuto} style={{ maxWidth: "60rem" }}>
        <div
          className={spaceStyle.pa05}
          style={{ position: "fixed", top: 0, height: "50px" }}
        >
          <Link href="/">
            <div className={`${commonStyle.link} ${spaceStyle.ma10}`}>
              <Azusaw />
            </div>
          </Link>
        </div>
        <div style={{ position: "relative", paddingTop: "60px" }}>
          <div className={`${commonStyle.relative} ${spaceStyle.pa20}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
