import * as React from "react"
import Layout from "../../components/Layout/Layout"
import { useCookies } from 'react-cookie';
import styles from "./Motivation.module.css"
const list = require("./motivation.json")
export default function Motivation(){
const [cookies, setCookie] = useCookies(['user']);
const [quoteCookies, setQuoteCookie, removeQuoteCookie] = useCookies(['quote']);
const [goalCookies, setGoalCookie, removeGoalCookies] = useCookies(['goal']);
const [goal,setGoal] = React.useState<string>("")
const [quote,setQuote] = React.useState<string>("")

const getRandomQuote = (newList:string[])=>{
    const length = newList.length-.1
    let randomInt = (max:number)=> Math.floor(Math.random() * max)
    console.log(randomInt(length))
    return newList[randomInt(length)]
}
const [currentQuote,setCurrentQuote]=React.useState(getRandomQuote(list))
const nextQuote =()=>{
    if(quoteCookies.quote){
        setCurrentQuote(getRandomQuote([...list,...quoteCookies.quote.quoteList]))
    }else{
        setCurrentQuote(getRandomQuote(list))
    }
}
const addQuote = ()=>{
    if(quoteCookies.quote){
        setQuoteCookie("quote",{quoteList:[...quoteCookies.quote.quoteList,quote]})
    }else{
        setQuoteCookie("quote",{quoteList:[quote]})
    }
}

const setNewGoal =()=>{
    setGoalCookie("goal",goal,{path:"/"})
}
    return(
            <div>
                <div className={styles.goalCard}>
                    <h3>Goal</h3>
                    {
                    goalCookies.goal ? <div><p>{goalCookies.goal}</p><button onClick={()=>removeGoalCookies("goal")}>clear goal</button></div>:
                    <div><input value={goal} onChange={(e)=>{setGoal(e.target.value)}} placeholder="Goal"/><button onClick={()=> setNewGoal()}>set goal</button></div>
                    }
                </div>
                <div className={styles.quoteCard}>{currentQuote}
                <button onClick={()=>nextQuote()}>Next Quote</button></div>
                <div className={styles.addCard}>add Motivation
                    <input value={quote} onChange={(e)=>setQuote(e.target.value)} />
                    <button onClick={()=>addQuote()}> Add Quote</button><button onClick={()=>removeQuoteCookie("quote")}>clear homemade quotes</button>
                </div>
            </div>)
}