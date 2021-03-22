import React, { useEffect, useState } from "react"
import style from "./mouse-follow-effect.module.css"

const MouseFollowEffect: React.FC = () => {
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
    </>
  )
}
export default MouseFollowEffect
