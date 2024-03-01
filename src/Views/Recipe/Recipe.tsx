// @ts-ignore
import React from 'react'
import {Link, Route, Routes} from "react-router-dom";
import Title from "./Components/Title/Title.tsx";
import Description from "./Components/Description/Description.tsx";



interface Props {
    title: String;
    description: String;

}

const Recipe = (props: Props) => {
    const {title, description} = props;

    const getRecipe = () => { getRecipe()
        //Rest-api (Open-API/Swagger)
        //slå upp recept och returnera ingredienser
    }
    return (

        <div>
            <Title title={title}/>
            <Link to="/home">Back to meny</Link>

                       <Description description={description}/>

            <img src="https://tse4.mm.bing.net/th?id=OIP.DMUuFtUpJRfQOKrgzOSdqQHaFn&pid=Api&P=0&h=180"/><br/>

        </div>
    )
}

export default Recipe