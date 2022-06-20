import * as React from "react"
import Layout from "../../components/Layout/Layout"
import { useCookies } from 'react-cookie';

export default function Food(){
const [foodCookies, setFoodCookie] = useCookies(['food']);

    return(
            <div>
                <div>
                Choose Day to look at (date picker will go here)
                </div>
                { foodCookies.food ?
                <div>
                    {
                        foodCookies.food.foodList.length > 0 ?
                        "food" :
                        "no food"
                    }
                </div>: null}
               
                <div>
                    Add Food to Day
                    <input/>
                    <button>Submit</button>
                </div>
            </div>)
}