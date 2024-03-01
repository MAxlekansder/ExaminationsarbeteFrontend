import React from 'react'
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <form action="/action_page.pgp">
            <label htmlFor="fname"> First name:</label>
            <input type="text" id="fname" name="fname"/><br/><br/>
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/><br/><br/>
            <input type="submit" value="Submit"/>

        </form>
            <h1>Home</h1>
            <NavLink style={{backgroundColor: "yellow", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                     to="/recipe1">Köttbullar</NavLink><br/><br/>
            <NavLink style={{backgroundColor: "yellow", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                     to="/recipe2">Pizza</NavLink><br/><br/>
            <NavLink style={{backgroundColor: "yellow", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                     to="/recipe3">Kebab</NavLink><br/><br/>


            </div>
)
}

export default Home


