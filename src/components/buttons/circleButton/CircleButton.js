import React from "react"
import styles from "./CircleButton.module.css"
import lottie from "lottie-web"
import circle from "../../../../static/images/circle.json"

export default function CustomButton(props) {
  let animationContainer = React.createRef()
  let animationButton = React.createRef()

  React.useEffect(() => {
    let button = document.getElementById("hoverMeContainer")

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
    <React.Fragment>
      <div
        className={styles.hoverMeContainer}
        id="hoverMeContainer"
        ref={animationButton}
      >
        <p className={styles.text}>{props.text}</p>
        <div className={styles.testImage} ref={animationContainer} />
      </div>
    </React.Fragment>
  )
}
