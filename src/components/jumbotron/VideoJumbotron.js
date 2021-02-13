import React from "react"
import VoltaVideoWEBM from "../../images/voltaVideo.webm"
import VoltaVideoMP4 from "../../images/voltaVideo.mp4"
import styles from "./Jumbotron.module.css"
import TextDecoration from "../textDecoration/TextDecoration"
import { Link } from "gatsby"

import CustomButton from "../buttons/circleButton/CircleButton.js"

export default function VideoJumbotron() {
  return (
    <div className={styles.container}>
      <video
        playsinline
        loop="true"
        autoplay="autoplay"
        muted
        className={styles.videoBackground}
      >
        <source src={VoltaVideoWEBM} type="video/webm" />
        <source src={VoltaVideoMP4} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Reducing methane emissions from <TextDecoration text="cows." />
        </h1>
        <p className={styles.text}>
          On a mission to battle global warming by making cows fart and burp
          less methane gas, using seaweed.
        </p>
        <div className={styles.customLink}>
          <Link to="/solution" className={styles.link}>
            <CustomButton text="read more" to="/about" />
          </Link>
        </div>
      </div>
    </div>
  )
}
