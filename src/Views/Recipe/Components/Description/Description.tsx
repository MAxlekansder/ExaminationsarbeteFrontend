import React from 'react'

interface Props {
    description: String;
}
const Description = (props: Props) => {
    const {description} = props;
    return (
        <div className="Home-container">
            <p>{description}</p>
            <div className="Recipe"/>

            <h4> Ingredienser (4 port)<br/>
                <ul>
                    <li>900 g potatis</li>

                </ul>
            </h4>
            <div style={{backgroundColor: "Green", padding: 1, borderRightStyle: "solid", borderRightWidth: 2}}>
                <p> Beskrivning <br/>
                    <br/></p></div>
            <p>
                Tips! Du kan även använda en elvisp för att göra potatismoset. Vispa inte mer än nödvändigt då moset
                annars kan bli klistrigt.
            </p>
            <a
                style={{backgroundColor: "yellow"}}
                href="https://www.youtube.com/watch?v=MrG0iAYipQM&pp=ygUea8O2dHRidWxsYXIgbWVkIHBvdGF0aXNtb3MgaWNh">Så
                gör du perfekta köttbullar</a><br/><br/>
            <a style={{backgroundColor: "yellow"}}
               href="https://www.youtube.com/watch?v=t8iggLCDJY0&pp=ygUea8O2dHRidWxsYXIgbWVkIHBvdGF0aXNtb3MgaWNh">Så gör
                du den perfekta potatismosen</a><br/><br/><br/>


        </div>
    )
}
export default Description

