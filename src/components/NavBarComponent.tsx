// Kristian
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";


interface NavBarProps {
    toggleCart: () => void;
}

function NavBarComponent({ }: NavBarProps) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (
        <header className="flex">
            <div className="py-1">
                <a href="/">
                    <img src="./Images/logo1.png" alt="Logo" className="h-10 absolute" />
                </a>
            </div>
            <nav className="flex-grow bg-white px-4 py-2 pb-4">
                <ul className="flex w-full list-none p-0 m-0 items-center sm:pl-10 xl:pl-4">
                    <li><a href="/" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Home</a></li>
                    <li><a href="/recipe" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Categories</a></li>
                    <li><a href="/weeklytips" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Weekly Tips</a></li>
                    <li><a href="/cocktails" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Cocktails</a></li>
                    <li><a href="/about" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">About us</a></li>
                    <li className="ml-auto"><a href="/add" className="px-5 py-2 bg-green-400 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:bg-green-600 rounded-lg shadow mr-7">Add recipe</a></li>
                    <li> <button onClick={handleCartToggle} className="text-2xl">
                        <TiShoppingCart />

                    </button>
                    </li>
                </ul>
            </nav>
            {isCartOpen && (
                <div className='fixed top-0 right-0 h-full bg-gray-100 w-1/4 shadow-lg z-50 opacity-90 border rounded'>
                    <button onClick={closeCart} className=" text-2xl absolute right-2 p-2">
                        <IoCloseSharp />
                    </button>
                    <div className="-p4 mt-2">
                        <h2 className='text-lg font-bold text-gray-600'>Shopping Cart</h2>
                        <br />
                        <p className="text-red-400 font-semibold">Nissan GTR R35</p>
                        <br />
                        <p>Engine: 3.8L V6</p>
                        <p>Power: 562 hp</p>
                        <p>Transmission: 6-speed dual-clutch</p>
                        <p>Made in: Japan</p>
                    </div>
                    <p>Best car ever?: Yes</p>
                </div>
            )}
        </header>
    );
}

export default NavBarComponent;