import React from "react"
import Head from "next/head"
import Azusaw from "../components/logo/Azusaw"
import PageLayout from "../layouts/PageLayout"
import spaceStyle from "../styles/space.module.css"

export default function Home() {
  return (
    <PageLayout title={"azusaw.com"}>
      <div className={spaceStyle.pa10}>
        <Azusaw />
      </div>
    </PageLayout>
  )
}
