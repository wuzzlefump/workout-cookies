import * as React from "react"
import styles from "./Weight.module.css"
import { useCookies } from 'react-cookie';
const moment = require("moment")

export default function Weight(){
const [userCookies, setUserCookie] = useCookies(["user"]);
const [weightCookies, setWeightCookies] = useCookies(["weight"]);

    return(
            <div className={styles.container}>
                {
                    userCookies.user ? <div className={styles.currentUserCard}>
                        <h1>Hello + {userCookies.user.name}</h1>
                        <div>graph goes here</div>
                        <input placeholder="weight"></input>
                        <div>
                            <button className={styles.clear}>
                                Clear Weight Cookies
                            </button>
                            <button className={styles.submit}>
                                Submit
                            </button>
                        </div>
                    </div>
                    : <div></div>
                }
            </div>)
}