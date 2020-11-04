import React from "react"
import styles from "./Jumbotron.module.css"
import readMore from "../../../static/images/illustrations/readMore.png"
import TextDecoration from "../textDecoration/TextDecoration"
import Fade from 'react-reveal/Fade';


export default function Jumbotron(props) {

  function generateText(page) {
    if (page === "home") return <>Battling global warming by reducing<TextDecoration text=" methane "/>emissions from cows.</>
    else if (page === "about") return <>A team of<TextDecoration text=" innovators "/>committed to change.</>
    else if (page === "solution") return <>A<TextDecoration text=" miracle " />from the bottom of the ocean.</>
    else if (page === "production") return <>We got the <TextDecoration text=" blueprint " />for seaweed production.</>
    else if (page === "press") return <>Sometimes we are in the<TextDecoration text=" spotlight."/></>
    else if (page === "careers") return <>Want to join our<TextDecoration text=" mission " />towards zero emissions?</>
    else return ""
  }

  return (
    <div className={styles.container} style={{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(35,35,38,0.35), rgba(20,21,23,1) ), url(${props.image})`}}>
    <h1 className={styles.title}>{generateText(props.page)}</h1>
     <Fade bottom delay={1000}><img className={styles.readMore} src={readMore} alt="Read more" /></Fade>
    </div>
  )
}
