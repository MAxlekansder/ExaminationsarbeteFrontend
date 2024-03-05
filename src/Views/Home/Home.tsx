// @ts-ignore
import React from 'react'
import {NavLink} from "react-router-dom";


const Home = () => {
    return (
        <div>

            <div style={{ backgroundColor: 'grey'}}>

           <br/><br/><form action="/action_page.pgp">
            <label htmlFor="fname"> First name: Sertan</label>

              
            <input type="text" id="fname" name="fname"/><br/><br/>
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/><br/><br/>
            <input type="submit" value="Submit"/>

        </form>
            <h1>Home</h1>
            <br/><NavLink style={{backgroundColor: "yellow", fontWeight: "bold", fontStyle: "italic", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                     to="/recipe1">Köttbullar</NavLink><br/><br/>
            <br/><NavLink style={{backgroundColor: "yellow", fontWeight: "bold", fontStyle: "italic", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                     to="/recipe2">Pizza</NavLink><br/><br/>
            <br/><NavLink style={{backgroundColor: "yellow", fontWeight: "bold", fontStyle: "italic", padding: 5, borderRightStyle: "solid", borderRightWidth: 2}}
                     to="/recipe3">Kebab</NavLink><br/><br/>
        </div>

            </div>
)
}
export default Home


