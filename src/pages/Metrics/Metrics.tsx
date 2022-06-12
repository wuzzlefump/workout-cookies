import * as React from "react"
import { useCookies } from 'react-cookie';
import styles from "./Metrics.module.css"
import BMI,{BMIRisk} from "../../Tools/BMI";

export default function Metrics(){
const [userCookies, setUserCookies] = useCookies(['user']);
const [weightCookies, setWeightCookie] = useCookies(['weight']);
    return(
            <div className={styles.container}>
                
                <div className={styles.card}>
                <h2 style={{textAlign:"center"}}>Metrics</h2>
                    {
                        userCookies.user ? 
                        <Section label={"Max HR"} value={(220 - parseInt(userCookies.user.age)).toString()}>
                           Max Heart Rate is Estimated by taking 220 and subtracting your age 
                        </Section>:
                        null
                    }
                    {
                        userCookies.user && weightCookies.weight ?
                        <Section label={"BMI"} value={BMI(parseInt(weightCookies.weight.weight),parseInt(userCookies.user.height)).toString()}>
                            Body mass index is away of using height and weight to calculate health risk.
                            <br/>
                            <br/>
                            <p>Your Current risk is 
                            <span style={{fontWeight:"bolder"}}>
                                {" "+BMIRisk(parseInt(weightCookies.weight.weight),parseInt(userCookies.user.height))}
                            </span></p>
                            <br/>
                            <br/>
                            ** Note BMI doesnt take into account large amounts of muscle, young children or old age
                        </Section> : null
                    }
                </div>
            </div>)
}

const Section = (props:{value:any, label:any, children:any})=>{
const {label,value,children} = props
    return(<div className={styles.section}>
      <h4>{label}: <span> {value}</span></h4>
                        <p>{children}</p>
    </div>)

}