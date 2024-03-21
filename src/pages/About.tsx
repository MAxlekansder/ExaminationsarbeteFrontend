//simon

import React from 'react';
import NavBarComponent from '../components/NavBarComponent';
import FooterComponent from '../components/Footer/FooterComponent';


const About: React.FC = () => {
    return (
        <>
        <div className="bg-white">
            <NavBarComponent />
            <div className="container mx-auto py-8">
                <h2 className="text-4xl font-bold mb-4">Vårt företags värderingar</h2>
                <div className="flex flex-wrap -mx-4 mb-4">
                    <div className="w-full md:w-1/3 px-4 mb-4">
                        <div className="bg-white border border-gray-300 p-4 h-full">
                            <strong className="block mb-2">Kvalitet</strong>
                            <p>Vi är engagerade i att leverera en upplevelse av högsta kvalitet, vilket säkerställer den högsta möjliga graden av användarnöjdhet. Vårt team arbetar för att upprätthålla kvalitetsstandarder i
                               alla aspekter av våra produkter och tjänster.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-4">
                        <div className="bg-white border border-gray-300 p-4 h-full">
                            <strong className="block mb-2">Innovation</strong>
                            <p>Vi omfamnar innovation och söker ständigt nya och bättre sätt att förbättra användarupplevelsen. Vår kultur främjar kreativitet och uppmuntrar våra teammedlemmar att tänka utanför ramarna för att
                               lösa komplexa problem.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-4">
                        <div className="bg-white border border-gray-300 p-4 h-full">
                            <strong className="block mb-2">Belåtenhet</strong>
                            <p>Våra användares belåtenhet är kärnan i allt vi gör. Att ge en utmärkt upplevelse för varje kund som använder vår webbplats är vårat huvuduppdrag. Vi strävar efter att överträffa alla förväntningar
                               och ge en exceptionell användarupplevelse.</p>
                        </div>
                    </div>
                </div>
                <h2 className="text-4xl font-bold mb-8 text-center">Om Oss</h2>
                <div className="bg-white border border-gray-300 p-4 mx-auto w-3/4 mb-8">
                    <p>I hjärtat av vår verksamhet finns en djup förståelse för att människor är själva ryggraden i allt vi gör. Vår historia är en väv av individuella berättelser, vars trådar har flätats samman för att skapa den
                       rika mångfald av talanger och idéer som utgör vårt företag. Låt oss ta en närmare titt på de lysande stjärnorna som lyser starkt inom vår organisation: Alexander, Gustav, Kristian, Simon, Sertan och Mehdi.</p>
                    <p>&nbsp;</p>
                    <p>Tillsammans är de inte bara individer utan en sammanhållen enhet, en oövervinnerlig kraft som driver vårt företag mot nya höjder. Deras samarbete och samspel skapar en atmosfär av gemenskap och tillit som
                        genomsyrar hela organisationen. Med deras passion, engagemang och mångfald av talanger står vi rustade att möta alla utmaningar som framtiden kan föra med sig.</p>
                    <p>&nbsp;</p>
                    <p>Tillsammans utgör Alexander, Gustav, Kristian, Simon, Sertan och Mehdi hjärtat och själen i vår organisation. Deras mångfald av talanger, erfarenheter och perspektiv berikar inte bara vårt företag utan
                       också drivkraften bakom vår framgång. Med deras passion, engagemang och hängivenhet är vi redo att möta framtiden med tillförsikt och styrka, redo att fortsätta att göra stora saker tillsammans.</p>
                </div>
                <h2 className="text-4xl font-bold mb-8 text-center">Kontakta oss</h2>
                <div className="bg-white border border-gray-300 p-4 mx-auto w-3/4 mt-8">
                    <p>För frågor eller ytterligare information, vänligen kontakta oss på</p>
                    <ul className="list-disc pl-6">
                        <li>E-post: hjälp@recept.se</li>
                        <li>Telefon: +08-000 000 06</li>
                        <li>Adress: chillington, 7, Stockholm</li>
                        <p>Öppettider, vardagar 10:00 - 16:00 </p>
                    </ul>
                </div>
            </div>
        </div>
        <FooterComponent/>
        </>
    );
};

export default About;