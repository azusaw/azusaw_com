import React, { useEffect, useState } from "react"
import "../styles/antd.less"
import style from "./app.module.css"

function App({ Component, pageProps }) {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const mouseMoveListener = (event) => {
      setMouseX(event.clientX)
      setMouseY(event.clientY)
    }
    window.addEventListener("mousemove", mouseMoveListener)
    return () => {
      window.removeEventListener("mousemove", mouseMoveListener)
    }
  }, [])

  return (
    <>
      <div
        className={style.pointer}
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      />
      <div
        className={`${style.pointer} ${style.smallPointer}`}
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      />
      <Component {...pageProps} />
    </>
  )
}
export default App
