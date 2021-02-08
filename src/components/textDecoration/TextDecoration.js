import React from "react"
import styles from "./TextDecoration.module.css"
import lottie from "lottie-web"
import underlineOne from "../../../src/images/illustrations/underlineOne.json"

export default function TextDecoration(props) {
  let animationContainer = React.createRef()

  React.useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: underlineOne,
    })

    setTimeout(function () {
      anim.play()
    }, 350)

    return () => anim.destroy() // optional clean up for unmounting
  })

  return (
    <React.Fragment>
      <em className={styles.em}>
        {props.text}
        <div className={styles.testImage} ref={animationContainer}></div>
      </em>
    </React.Fragment>
  )
}
