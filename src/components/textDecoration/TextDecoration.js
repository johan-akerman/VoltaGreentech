import React from "react"
import styles from "./TextDecoration.module.css"
import underline from "../../../static/images/illustrations/drawed_underline_alt1.svg"
import lottie from "lottie-web"
import underlineOne from "../../../static/images/underlineOne.json"

export default function TextDecoration(props) {

    let animationContainer = React.createRef()

    React.useEffect(() => {
        const anim = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: underlineOne
        });
        setTimeout(function(){ anim.play(); }, 350);

        return () => anim.destroy(); // optional clean up for unmounting
      }, []);

    return <React.Fragment>
                <em className={styles.em}>
                    {props.text}
            
                    {/* <img
                        className={styles.testImage}
                        src={underline}
                        aria-hidden="true"
                        alt="text decoration"
                        ref="animationContainer"
                    />  */}

                    <div
                        className={styles.testImage}
                        ref={animationContainer}
                    ></div>
                 
                </em>
            </React.Fragment>
}
