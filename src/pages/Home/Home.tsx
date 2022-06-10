import * as React from "react"
import { useCookies } from 'react-cookie';
import styles from "./Home.module.css"
import Select from "react-select"; 

export default function Home(){
type SelectOption = {label:string; value:string}
const [cookies, setCookie,removeCookie] = useCookies(['user']);
const [name, setName] = React.useState<string>("")
const [height, setHeight] = React.useState<string>("0")
const [sex, setSex] = React.useState<SelectOption>({label:"",value:""})

const submitUser=()=>{
let payload = {
    name,
    height,
    sex:sex.value
}
setCookie("user",payload,{path:"/"})
}
const clearCookies=()=>{
removeCookie("user")
}

    return(
            <div className={styles.container}>
                {cookies.user ?
                 <div className={styles.currentUserCard}>
                    <h2>{cookies.user.name}</h2>
                    <h3>height: {cookies.user.height} inches</h3>
                    <h3>sex: {cookies.user.sex}</h3>
                    <h4>Welcome to Workout Cookies!</h4>
                    <button className={styles.submit} onClick={()=>clearCookies()} > Clear Cookies</button>
                    
                </div>
                  :
                <div className={styles.newUserCard}>
                    <h2>New user form</h2>
                        <input onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Name..."/>
                        <input onChange={(e)=>setHeight(e.target.value)} value={height} placeholder="Height in inches.." type={"number"}/>
                        <Select placeholder="Sex..."  onChange={(e)=>{setSex(e!)}} value={sex} options={[
                            {label:"M",value:"M"},
                            {label:"F",value:"F"},
                            {label:"Other",value:"Other"}
                            ]}/>
                        <button className={styles.submit} onClick={()=>submitUser()}>Submit</button>
                </div>}
            </div>)
}