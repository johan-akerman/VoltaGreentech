import React from "react"
import styles from "./CircleButton.module.css"
import lottie from "lottie-web"
import circle from "../../../../src/images/illustrations/circle.json"

export default function CustomButton(props) {
  let animationContainer = React.createRef()
  let animationButton = React.createRef()

  React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: circle,
    })

    animationButton.current.addEventListener("mouseenter", () => {
      anim.setDirection(1)
      anim.play()
    })

    animationButton.current.addEventListener("mouseleave", () => {
      anim.setDirection(-1)
      anim.play()
    })

    return () => anim.destroy() //clean up for unmounting
  })

  return (
    <div
      className={styles.hoverMeContainer}
      id="hoverMeContainer"
      ref={animationButton}
    >
      <p className={styles.text}>{props.text}</p>
      <div className={styles.backgroundImage} ref={animationContainer} />
    </div>
  )
}
