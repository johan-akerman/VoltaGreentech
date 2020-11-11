import React from "react"
import typography from "../typography.module.css"
import styles from "./ValueColumnContainer.module.css"
import Column from "./ValueColumn"
import heart from "../../../static/images/illustrations/heart.svg"
import lightning from "../../../static/images/illustrations/lightning.svg"
import light_bulb from "../../../static/images/illustrations/light_bulb.svg"
import star from "../../../static/images/illustrations/star.svg"
import Fade from 'react-reveal/Fade';


export default function IconColumnContainer(props) {
  return (
    <div className={styles.container}>
      <Fade up>
      <p className={typography.lowerLevelHeader}>Values & culture</p>
      <h1 className={typography.chapterTitle}>Our values and culture</h1>
      <p className={styles.text}>{props.text}</p>
      </Fade>
      <div className="row">
        <Column
          illustration={light_bulb}
          title="Changemakers by nature"
          text="We believe in the power of the individual and are here to make a real impact."
          delay="250"
        />
        <Column
          illustration={lightning}
          title="Data driven & playful"
          text="It is when you possess the knowledge you have the ability to be creative and explain so people understand. “Creativity is intelligence having fun”."
          delay="500"
        />
        <Column
          illustration={heart}
          title="Open-hearted & inclusive"
          text="To spread our believes and our knowledge we have to challenge the status quo. We are not activists, we do not hate. We include people to join for a better tomorrow."
          delay="750"
        />
        <Column
          illustration={star}
          title="Dare to be unexpected"
          text="We dare to differ and do the unexpected, we are always open for collaborations to reach common goals. We marry passion with passion."
          delay="1000"
        />
        {/* <Column
          illustration={illustrationCow}
          title="Step 05"
          text="Less energy is wasted on producing the unwanted methane. The cow’s wellbeing and productivity increases."
        /> */}
      </div>
    </div>
  )
}
