import React from "react"
import styles from "./Jumbotron.module.css"
import readMore from "../../../static/images/illustrations/readMore.png"
import TextDecoration from "../textDecoration/TextDecoration"
import Fade from 'react-reveal/Fade';
import LinkElement from "../link/LinkElement"


export default function Jumbotron(props) {

  function generateText(page) {
    
    if (page === "home") return <>
    <h1 className={styles.title}>We reduce methane emissions from <TextDecoration text="cows." /></h1>
    <p className={styles.text}>Yes, you read it right. We are making cows burp and fart less methane (up to 90% to be specific) by developing a seaweed based feed supplement.</p> <LinkElement to={"/"} text={"Read more"} />

    </>
    else if (page === "planet-food") return <><h1 className={styles.title}>The same food. Better for the <TextDecoration text=" planet."/></h1><p className={styles.text}>Planetfood är precis som vilken mat som helst, förutom en viktig skillnad: det har möjliggjort att metanustläppen  har minskats med upp till 80%.</p></>
    else if (page === "about") return <><h1 className={styles.title}>We are a swedish <TextDecoration text=" greentech "/>company.</h1></>
    else if (page === "solution") return <><h1 className={styles.title}>A<TextDecoration text=" miracle " />from the bottom of the ocean.</h1></>
    else if (page === "production") return <><h1 className={styles.title}>A <TextDecoration text=" blueprint " />for a scalable production.</h1></>
    else if (page === "press") return <><h1 className={styles.title}>Sometimes we are in the<TextDecoration text=" spotlight."/></h1></>
    else if (page === "careers") return <><h1 className={styles.title}>Join our<TextDecoration text=" mission " />to zero emissions.</h1></>
    else return ""
  }

  return (
    <div className={styles.container} style={{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(35,35,38,0.35), rgba(20,21,23,1) ), url(${props.image})`}}>
    <div className={styles.content}>
     {generateText(props.page)}
   
     {/* <Fade bottom delay={1000}><img className={styles.readMore} src={readMore} alt="Read more" /></Fade> */}
     </div>
    </div>

  )
}
