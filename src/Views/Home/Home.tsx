import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import './Home.css';

const Home = () => {
    // Anta att du har en lista över recept som du vill rendera
    const recipes = [
        { name: 'Pizza', image: "https://tse2.mm.bing.net/th?id=OIP.MfhIfzrC6x6T1-szQkjtCgHaEo&pid=Api&P=0&h=180" },
        { name: 'Recipe 2', image: "https://tse1.mm.bing.net/th?id=OIP.aHXc2ZTc7NRJw-ljeqlV5QHaF7&pid=Api&P=0&h=180" },
        { name: 'Recipe 3', image: "https://tse4.mm.bing.net/th?id=OIP.iBgRh5jBfeB4L9u0jdrOWQHaE8&pid=Api&P=0&h=180" },
        { name: 'Recipe 4', image: "https://tse2.mm.bing.net/th?id=OIP.8L-ziMLtCvkBJYsU2NaeMgHaE7&pid=Api&P=0&h=180" },
    ];
    let clicked: boolean, setClicked: (value: (((prevState: boolean) => boolean) | boolean)) => void;
    [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(true);
    };

    return (
        <div>
            <a href="länk-till-recep-3" onClick={handleClick}>
                <div className="home-container">
                    <img src="Recipe 1" alt="Recipe 33" />
                    <h3>{name}</h3>
                </div>
                <Link to="länk-till-recipe-3">
                    <div>
                        <img src="Recipe-image" alt="Recipe 3"/>
                        <h3>{name}</h3>
                    </div>
                </Link>
        </a>

            <div style={{ backgroundColor: 'whitesmoke'}}>
                <div className="Home-container">
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
                <br/><NavLink style={{backgroundColor: "grey", fontWeight: "bold", fontStyle: "italic", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                              to="/recipe1">Köttbullar</NavLink><br/><br/>
                <br/><NavLink style={{backgroundColor: "grey", fontWeight: "bold", fontStyle: "italic", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                              to="/recipe2">Pizza</NavLink><br/><br/>
                <br/><NavLink style={{backgroundColor: "grey", fontWeight: "bold", fontStyle: "italic", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                              to="/recipe3">Kebab</NavLink><br/><br/>
            </div>
        </div>    );
};
export default Home

