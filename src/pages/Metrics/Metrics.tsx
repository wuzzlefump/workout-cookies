import * as React from "react"
import { useCookies } from 'react-cookie';

export default function Metrics(){
const [cookies, setCookie] = useCookies(['user']);
    return(
            <div>
                Metrics
            </div>)
}