import React from "react"
import Head from "next/head"
import spaceStyle from "../styles/space.module.css"

export default function PageLayout({ title, children }) {
    return (
      <div style={{backgroundColor: "#222228", opacity: 1, minHeight: "100vh"}}>
        <Head>
          <title>{title}</title>
        </Head>
        <div className={spaceStyle.mxAuto} style={{maxWidth: "60rem"}}>
        {children}
        </div>
      </div>
    )

}
