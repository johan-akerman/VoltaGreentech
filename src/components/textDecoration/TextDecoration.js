import React from "react"
import styles from "./TextDecoration.module.css"
import underline from "../../../static/images/illustrations/drawed_underline_alt1.svg"
import HeadShake from 'react-reveal/HeadShake';

export default function textDecoration(props) {
    return <React.Fragment>
                <em className={styles.em}>
                    {props.text}
                    <HeadShake left delay={1500}>
                    <img
                        className={styles.testImage}
                        src={underline}
                        aria-hidden="true"
                        alt="text decoration"
                    /> 
                    </HeadShake>
                </em>
            </React.Fragment>
}
