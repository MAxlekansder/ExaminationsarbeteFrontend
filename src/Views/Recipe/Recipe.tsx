import React, {useEffect, useState} from 'react'
import {Link, } from "react-router-dom";
import Title from "./Components/Title/Title.tsx";
import Description from "./Components/Description/Description.tsx";

interface ApiResponse {
    id: string;
    title: string;
    description: string;
    tip: string;
    steps: string[];
    ingredients: string[];
}

interface Props {
    id: string;
}

const fakeResponse = {
    title: "Köttbullar",
    description: "Världens godaste köttbullar med potatismos",
    tip: "Tips! Du kan även använda en elvisp för att göra potatismoset.",
    steps: [
        "Steg 1: Stek köttbullar",
        "Steg 2: Koka potatis",
        "Steg 3: Servera"
    ],
    ingredients: [
        "Köttfärs 0.8kg",
        "Potatis 0,5kg",
        "Lingonsylt 1msk"
    ],

} as ApiResponse

const Recipe = (props: Props) => {
    const {id} = props;
    const [recipe, setRecipe] = useState<ApiResponse>()

    const getRecipe = (): ApiResponse => {
        //Rest-api (Open-API/Swagger)
        //slå upp recept och returnera ingredienser/recept
        // använd fetch eller liknande för att hämta recept med hjälp av id i propsen

        return fakeResponse
    }

    useEffect(() => {
        setRecipe(getRecipe());
    }, []);

    if (!recipe) {
        return null;
    }

    return (

        <div>
            <Link style={{backgroundColor: "navajowhite"}} to="/home">Back to meny</Link><br/><br/>
            <Link style={{backgroundColor: "navajowhite"}} to="/">==Meny==</Link><br/><br/>

            <h1>Recipe</h1>
            <div className="Recipe-link">

                <div className="Recipe" key="index">
                    <img src="recipe.image" alt="recipe.name"/>
                    <button>View Recipe</button>
                </div>
            </div>

            <Title title={recipe.title}/>
            <Description description={recipe.description}/>
            <br/>
            <h6>Ingredienser</h6>
            {recipe.ingredients.map(ingredient => (
                <p>{ingredient}</p>
            ))}
            <br/>
            <h6>Gör så här</h6>
            {recipe.steps.map(step => (
                <p>{step}</p>
            ))}
            <br/>
            <p>{recipe.tip}</p>

            <img src="https://tse4.mm.bing.net/th?id=OIP.DMUuFtUpJRfQOKrgzOSdqQHaFn&pid=Api&P=0&h=180" alt={"hi"}/><br/>

        </div>
    )}

export default Recipe
