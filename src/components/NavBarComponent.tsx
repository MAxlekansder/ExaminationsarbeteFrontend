// Kristian
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";


function NavBarComponent() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
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
                <div className='fixed top-0 right-0 h-full bg-gray-100 w-1/3 shadow-lg z-50 opacity-95 border rounded'>
                    <button onClick={closeCart} className=" text-2xl text-white absolute right-2 p-2 hover:shadow-md hover:bg-gray-300">
                        <IoCloseSharp />
                    </button>
                    <div className="p-4 bg-green-800 border-b border-gray-300 border rounded">
                        <h2 className='text-xl font-semibold text-white p-4 text-center'>Shopping Cart</h2>
                        <br />

                    </div>
                    <div className="px-2">
                        <p className="text-red-400 font-semibold">Nissan GTR R35</p>
                        <br />
                        <p>Engine: 3.8L V6</p>
                        <p>Power: 562 hp</p>
                        <p>Transmission: 6-speed dual-clutch</p>
                        <p>Made in: Japan</p>
                    </div>
                    <div className="flex px-1">
                        <button onClick={decrement}
                            className="bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-800 focus:outline-none">
                            -
                        </button>
                        <span className="text-lg font-semibold px-4 py-1 rounded shadow">
                            {count}
                        </span>
                        <button onClick={increment}
                            className="bg-green-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-800 focus:outline-none">
                            +
                        </button>
                    </div>
                    <button className="text-xl text-black rounded-lg bg-green-500 p-1 hover:text-blue-600 absolute bottom-2 left-5 right-5">Confirm Order</button>
                </div>
            )}
        </header>
    );
}

export default NavBarComponent;