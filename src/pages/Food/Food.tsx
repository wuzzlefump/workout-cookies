import * as React from "react"
import Layout from "../../components/Layout/Layout"
import { useCookies } from 'react-cookie';

export default function Food(){
const [cookies, setCookie] = useCookies(['user']);

    return(
            <div>
                Food
            </div>)
}