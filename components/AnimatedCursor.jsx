
import React, { useEffect, useRef, useState } from "react"

const AnimatedCursor = ({
  innerSize = 8,
  outerSize = 32,
  innerScale = 1,
  outerScale = 2.5,
  trailingSpeed = 8,
  clickables = [
    "a",
    "button",
    "input",
    "textarea",
    "select",
    "label",
    ".link"
  ]
}) => {
  const cursorInnerRef = useRef(null)
  const cursorOuterRef = useRef(null)
  const requestRef = useRef(null)
  const previousTimeRef = useRef(null)

  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [cursorColor, setCursorColor] = useState("255,255,255") // default white

  const endX = useRef(0)
  const endY = useRef(0)

  const onMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY })
    endX.current = e.clientX
    endY.current = e.clientY
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.left = `${e.clientX}px`
      cursorInnerRef.current.style.top = `${e.clientY}px`
    }
  }

  const animateOuterCursor = (time) => {
    if (previousTimeRef.current !== undefined) {
      coords.x += (endX.current - coords.x) / trailingSpeed
      coords.y += (endY.current - coords.y) / trailingSpeed
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.left = `${coords.x}px`
        cursorOuterRef.current.style.top = `${coords.y}px`
      }
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animateOuterCursor)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", () => setIsVisible(true))
    document.addEventListener("mouseleave", () => setIsVisible(false))
    document.addEventListener("mousedown", () => setIsActive(true))
    document.addEventListener("mouseup", () => setIsActive(false))

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", () => setIsVisible(true))
      document.removeEventListener("mouseleave", () => setIsVisible(false))
      document.removeEventListener("mousedown", () => setIsActive(true))
      document.removeEventListener("mouseup", () => setIsActive(false))
    }
  }, [])

  useEffect(() => {
    if (!cursorInnerRef.current || !cursorOuterRef.current) return

    if (isActive) {
      cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${innerScale * 0.8})`
      cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${outerScale})`
    } else {
      cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(1)`
      cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(1)`
    }
  }, [isActive])

  useEffect(() => {
    if (!cursorInnerRef.current || !cursorOuterRef.current) return

    if (isVisible) {
      cursorInnerRef.current.style.opacity = 1
      cursorOuterRef.current.style.opacity = 1
    } else {
      cursorInnerRef.current.style.opacity = 0
      cursorOuterRef.current.style.opacity = 0
    }
  }, [isVisible])

  useEffect(() => {
    const elements = document.querySelectorAll(clickables.join(","))
    elements.forEach((el) => {
      el.style.cursor = "none"
      el.addEventListener("mouseenter", () => setIsActive(true))
      el.addEventListener("mouseleave", () => setIsActive(false))
    })

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsActive(true))
        el.removeEventListener("mouseleave", () => setIsActive(false))
      })
    }
  }, [clickables])

  // Theme Detection: nord = white cursor, abyss = green
  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.dataset.theme
      if (theme === "nord") {
        setCursorColor("255,255,255")
      } else if (theme === "abyss") {
        setCursorColor("34,197,94")
      } else {
        setCursorColor("255,255,255") // fallback
      }
    }

    // Observer for data-theme change
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    })

    updateTheme() // Initial load

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.cursor = "none"
    return () => {
      document.body.style.cursor = "auto"
    }
  }, [])

  const baseClasses =
    "fixed z-[9999] rounded-full pointer-events-none mix-blend-difference transition-transform transition-opacity duration-200 ease-in-out"

  return (
    <>
      <div
        ref={cursorOuterRef}
        className={baseClasses}
        style={{
          width: `${outerSize}px`,
          height: `${outerSize}px`,
          backgroundColor: `rgba(${cursorColor}, 0.3)`,
          transform: "translate(-50%, -50%) scale(1)",
          opacity: 0
        }}
      />
      <div
        ref={cursorInnerRef}
        className={baseClasses}
        style={{
          width: `${innerSize}px`,
          height: `${innerSize}px`,
          backgroundColor: `rgba(${cursorColor}, 1)`,
          transform: "translate(-50%, -50%) scale(1)",
          opacity: 0
        }}
      />
    </>
  )
}

export default AnimatedCursor
