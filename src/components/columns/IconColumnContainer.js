import React from "react"
import typography from "../typography.module.css"
import styles from "./IconColumnContainer.module.css"
import Column from "./IconColumn"
import illustrationCow from "../../../static/images/illustrations/cow.png"
import illustrationFarmer from "../../../static/images/illustrations/farmer.png"
import illustrationSeaweed from "../../../static/images/illustrations/seaweed.png"
import illustrationEmission from "../../../static/images/illustrations/emission.png"
import illustrationFactory from "../../../static/images/illustrations/factory.png"

export default function IconColumnContainer(props) {
  return (
    <div className={styles.container}>
      <p className={typography.lowerLevelHeader}>{props.lowerLevelHeader}</p>
      <h1 className={typography.chapterTitle}>{props.chapterTitle}</h1>
      <p className={styles.text}>{props.text}</p>
      <div className="row">
        <Column
          illustration={illustrationFactory}
          title="Title"
          text="Volta Seafeed is produced in our production facility in Lysekil. The seaweed absorbs CO2 while growing."
        />
        <Column
          illustration={illustrationFarmer}
          title="Title"
          text="The farmers add around 100g of Volta Seafeed to the cow’s daily feed."
        />
        <Column
          illustration={illustrationSeaweed}
          title="Title"
          text="The seaweed’s bioactive compounds block the methane producing enzymes in the cow’s rumen."
        />
        <Column
          illustration={illustrationEmission}
          title="Title"
          text="The majority of methane emissions are reduced. "
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
