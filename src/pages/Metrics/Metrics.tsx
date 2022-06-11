import * as React from "react"
import { useCookies } from 'react-cookie';
import styles from "./Metrics.module.css"

export default function Metrics(){
const [userCookies, setUserCookies] = useCookies(['user']);
const [weightCookies, setWeightCookie] = useCookies(['weight']);
    return(
            <div className={styles.container}>
                {userCookies.user && weightCookies.weight ?
                <div className={styles.card}>
                    <h4>BMI<span></span></h4>
                    <p></p>
                </div>:null}
                {userCookies.user ? <div className={styles.card}>
                    <h4>Max Heart Rate<span>{220 - parseInt(userCookies.user.age)}</span></h4>
                    <p></p>
                </div>: null}
                <div className={styles.card}>
                    <h4>Example: <span> value</span></h4>
                    <p>text</p>
                </div>
                <div className={styles.card}>
                    <h4><span></span></h4>
                    <p></p>
                </div>
            </div>)
}