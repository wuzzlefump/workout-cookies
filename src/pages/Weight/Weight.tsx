import * as React from "react"
import styles from "./Weight.module.css"
import { useCookies } from 'react-cookie';
import Graph from "../../components/Graph/Graph";

const moment = require("moment")

export default function Weight(){
const [userCookies, setUserCookie] = useCookies(["user"]);
const [weightCookies, setWeightCookies, removeWeightCookies] = useCookies(["weight"]);

const [weight,setWeight]=React.useState<string>("")
const submitWeight =()=>{
    if(weightCookies.weight){
        let newWeight = weight ?? 0
        let weightObj = {date: new Date().toLocaleDateString(), weight:parseInt(newWeight) }
        setWeightCookies("weight",{...weightObj, all:[...weightCookies.weight.all,weightObj]},{path:"/"})
        console.log(weightCookies.weight)
    }else{
        let newWeight = weight ?? 0
        let weightObj = {date: new Date().toLocaleDateString(), weight:parseInt(newWeight) }
        setWeightCookies("weight",{...weightObj, all:[weightObj]},{path:"/"})
        console.log(weightCookies.weight)
    }
}
const labels = weightCookies.weight ? weightCookies.weight.all.map((time: any, key:number)=>time.date + key.toString()):[]
const datasets = weightCookies.weight ? [{label: "Weight",data:weightCookies.weight.all.map((item:any)=>item.weight), borderColor:"green", backgroundColor:"green" }]:[]
const graphData = {labels:labels, datasets:datasets} 
const clearWeightCookies = ()=>{
    removeWeightCookies("weight")
}

    return(
            <div className={styles.container}>
                {
                    userCookies.user ? <div className={styles.currentUserCard}>
                        <h1>Hello  {userCookies.user.name}</h1>
                    <div>
                        {weightCookies.weight ? <Graph
                         options={{plugins:{legend:{position:"bottom" as const},title:{display:true, text:"Weight"}}, responsive:true}}
                         data={graphData}
                          />: "enter your weight to track it"}
                          </div>                                    
                        <input placeholder="weight" type={"number"} value={weight} onChange={(e)=> setWeight(e.target.value)} ></input>
                        <div className={styles.actionContainer}>
                            <button onClick={()=>clearWeightCookies()} className={styles.clear}>
                                Clear Weight Cookies
                            </button>
                            <button onClick={()=> submitWeight()} className={styles.submittwo}>
                                Submit
                            </button>
                        </div>
                    </div>
                    : <div></div>
                }
            </div>)
}