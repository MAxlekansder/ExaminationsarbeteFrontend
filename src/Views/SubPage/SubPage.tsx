import React from 'react'
import {Link, Route} from "react-router-dom";
import Recipe from "../Recipe/Recipe.tsx";

const SubPage = () => {
    return (
        <div>
            <h1>SubPage</h1>
            <Link to="/action_page.pgp?fname=Sertan&lname=Keskin"/>
            <Route path='/recipe1' element={<Recipe title={"Köttbullar"} description={"Gör så här.."}/>}></Route>
            <Link to="/home">to Home</Link>
        </div>
    )
            }

export default SubPage
