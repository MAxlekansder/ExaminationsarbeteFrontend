// @ts-ignore
import React from 'react'




interface Props {
    description: String;
}
const Description = (props: Props) => {
    const {description} = props;
    return (
        <div>
          <p>{description}</p>
                <h4> Ingredienser (4 port)<br/>
                    <ul>
                        <li></li>
                        <li>50 g rödlök</li>
                        <li>2 dl vispgrädde</li>
                        <li>0.5 dl ströbröd</li>
                        <li>500 g blandfärs</li>
                        <li>4 msk smör</li>
                        <li>0.5 st gurka</li>
                        <li>250 g broccoli</li>
                        <li>1 st kålrabbi</li>
                        <li>1 msk olivolja</li>
                        <li>0.5 msk vitvinsvinäger</li>
                        <li>1 msk majsstärkelse</li>
                        <li>0.5 msk kinesisk soja</li>
                        <li>1.5 dl mjölk</li>
                        <li>2 krm vitpeppar</li>
                    </ul>
                     </h4>
            <div style={{backgroundColor: "Green", padding: 1, borderRightStyle: "solid", borderRightWidth: 2}}>
     
        <p> 1. Sätt ugnen på 75°.<br/>
            2. Koka upp vatten med salt i kastrullen. Skala och skär potatisen i 2 cm stora bitar och koka mjuk, 10-15 min. Häll av vattnet.<br/>
            3. Finhacka rödlöken. Blanda vispgrädde med ströbröd i en bunke. Lägg sedan ner löken med blandfärs, salt och svartpeppar i bunken.<br/>
            4. Smält smör i en panna. Forma ca 16 köttbullar och lägg ner i pannan allt eftersom. Stek köttbullarna runt om ca 10 min på medelhög värme, tills de är genomstekta. Ställ sedan köttbullarna in i ugnen.<br/>
            5. Tärna gurkan. Skär broccolin i små bitar och buketter. Skala och grovriv kålrabbi. Blanda grönsakerna i skålen med olivolja, vitvinsvinäger, salt och svartpeppar.<br/>
            6. Strö majsstärkelse i en panna och vispa ner vispgrädde, vatten, kinesisk soja och svartpeppar. Låt puttra ca 4 min på medelvärme.<br/>
            7. Mosa ihop den kokta potatisen med en potatisstöt. Tillsätt smör, mjölk, salt och vitpeppar.<br/>
            8. Servera köttbullarna med potatismoset, såsen och salladen.<br/></p></div>
        <p>
        Tips! Du kan även använda en elvisp för att göra potatismoset. Vispa inte mer än nödvändigt då moset annars kan bli klistrigt.
        </p>
            <a
               style={{backgroundColor:"yellow"}} href="https://www.youtube.com/watch?v=MrG0iAYipQM&pp=ygUea8O2dHRidWxsYXIgbWVkIHBvdGF0aXNtb3MgaWNh">Så gör du perfekta köttbullar</a><br/><br/>
            <a style={{backgroundColor:"yellow"}} href="https://www.youtube.com/watch?v=t8iggLCDJY0&pp=ygUea8O2dHRidWxsYXIgbWVkIHBvdGF0aXNtb3MgaWNh">Så gör du den perfekta potatismosen</a><br/><br/><br/>

        </div>



    )
}

export default Description


