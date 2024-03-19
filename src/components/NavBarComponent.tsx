// Kristian made this file

import { VscAccount } from "react-icons/vsc";


const NavBarComponent = () => {
    return (
        <header className="flex">
            <div className="py-1">
                <a href="/">
                    <img src="./Images/logo1.png" alt="Logo" className="h-10" />
                </a>
            </div>
            <nav className="flex-grow bg-white rounded-lg px-4 py-2">
                <ul className="flex w-full list-none p-0 m-0 items-center">
                    <li><a href="/" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Hem</a></li>
                    <li><a href="/categories" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Kategorier</a></li>
                    <li><a href="/weeklytips" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Veckans tips</a></li>
                    <li><a href="/about" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Om oss</a></li>
                    <li><a href="/cocktails" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Cocktails</a></li>
                    <li className="ml-auto"><a href="/" className="block relative"><VscAccount className="w-6 h-6 text-black" /></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBarComponent;