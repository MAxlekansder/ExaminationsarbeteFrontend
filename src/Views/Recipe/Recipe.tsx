// @ts-ignore
import React from 'react'
import {Link, } from "react-router-dom";
import Title from "./Components/Title/Title.tsx";
import Description from "./Components/Description/Description.tsx";
// @ts-ignore
import NavBarComponent from "../src/components/NavBarComponent.tsx";

interface Props {
    title: String;
    description: String;

}

const Recipe: NavBarComponent = (props: Props) => {
    const {title, description} = props;

    const getRecipe = () => { getRecipe()
        //Rest-api (Open-API/Swagger)
        //slå upp recept och returnera ingredienser
    }
    return (

        <div>
            <Title title={title}/>

            <Link style={{backgroundColor: "navajowhite"}} to="/home">Back to meny</Link><br/><br/>
            <Link style={{backgroundColor: "navajowhite"}} to="/">==Meny==</Link><br/><br/>


            <img src="https://tse4.mm.bing.net/th?id=OIP.DMUuFtUpJRfQOKrgzOSdqQHaFn&pid=Api&P=0&h=180" alt={"hi"}/><br/>

            <Description description={description}/>


        </div>
    )
}

export default Recipe