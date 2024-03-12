import React from "react";
import {NavLink} from "react-router-dom";


const Home = () => {
    // Anta att du har en lista över recept som du vill rendera
    const recipes = [
        { name: 'Recipe 1', image: 'image-url-1' },
        { name: 'Recipe 2', image: 'image-url-2' },
        { name: 'Recipe 3', image: 'image-url-3' }
    ];

    return (
        <div>
            <div style={{ backgroundColor: 'white'}}>
                <h1>Home</h1>
                <div className="Recipe-container">
                    {/* Loopa igenom listan med recept och rendera en komponent för varje recept */}
                    {recipes.map((recipe, index) => (
                        <div className="Recipe" key={index}>
                            <h2>{recipe.name}</h2>

                            {/* Antag att image är en URL till bilden av receptet */}
                            <img src={recipe.image} alt={recipe.name} />

                            {/* Lägg till en knapp som loggar receptet när den klickas */}
                            <button onClick={() => console.log(recipe)}>View Recipe</button>
                        </div>
                    ))}
                </div>


                <br/><NavLink style={{backgroundColor: "yellow", fontWeight: "bold", fontStyle: "italic", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                              to="/recipe1">Köttbullar</NavLink><br/><br/>
                <br/><NavLink style={{backgroundColor: "yellow", fontWeight: "bold", fontStyle: "italic", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                              to="/recipe2">Pizza</NavLink><br/><br/>
                <br/><NavLink style={{backgroundColor: "yellow", fontWeight: "bold", fontStyle: "italic", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                              to="/recipe3">Kebab</NavLink><br/><br/>
            </div>
        </div>    );
};
export default Home

