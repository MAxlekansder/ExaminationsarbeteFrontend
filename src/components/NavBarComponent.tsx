// Kristian
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import useRecipeState from "../State/indexState";
import { Link } from "react-router-dom";



function NavBarComponent() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
    const [orderNumber, setOrderNumber] = useState("");
    const cart = useRecipeState(state => state.cart);
    const removeFromCart = useRecipeState((state) => state.removeFromCart);

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
        if (isOrderConfirmed) {
            setIsOrderConfirmed(false);
        }
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const confirmOrder = () => {
        setIsOrderConfirmed(true);
        setOrderNumber((Math.floor(Math.random() * 900000) + 100000).toString());
        useRecipeState.getState().clearCart();
    }


    return (
        <header className="flex">
            <div className="py-1">
                <a href="/">
                    <img src="./Images/logo1.png" alt="Logo" className="h-10 absolute" />
                </a>
            </div>
            <nav className="flex-grow bg-white px-4 py-2 pb-4">
                <ul className="flex w-full list-none p-0 m-0 items-center sm:pl-10 xl:pl-4">
                    <li><Link to="/" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Home</Link></li>
                    <li><Link to="/recipe" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Categories</Link></li>
                    <li><Link to="/weeklytips" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Weekly Tips</Link></li>
                    <li><Link to="/cocktails" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Cocktails</Link></li>
                    <li><Link to="/about" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">About us</Link></li>
                    <li className="ml-auto"><Link to="/add" className="px-5 py-2 bg-green-400 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:bg-green-600 rounded-lg shadow mr-7">Add recipe</Link></li>
                    <li> <button onClick={handleCartToggle} className="text-2xl relative flex items-center justify-center w-12 h-12">
                        <TiShoppingCart />
                        {cart.length > 0 && (
                            <span className="absolute -right-2 -top-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{cart.length}</span>
                        )}
                    </button>
                    </li>
                </ul>
            </nav>

            {isCartOpen && (
                <div className='fixed top-0 right-0 h-full bg-gray-100 w-1/3 shadow-lg z-50 opacity-100 border rounded'>
                    <button onClick={closeCart} className=" text-2xl text-white absolute right-2 p-2 hover:shadow-md hover:bg-gray-300">
                        <IoCloseSharp />
                    </button>

                    {!isOrderConfirmed ? (
                        <>
                            <div className="p-4 bg-green-800 border rounded">
                                <h2 className='text-xl font-semibold text-white p-4 text-center'>Shopping Cart</h2>
                                <br />

                            </div>
                            <div className="px-2">
                                <div>
                                    {cart.map((recipe, index) => (
                                        <div key={index} className="flex items-center ">

                                            <div className="w-20 h-20 mg">
                                                <img src={recipe.imageUrl} className="w-full h-full object-cover"></img>
                                            </div>
                                            <p className="text-red-400 font-bold px-4">{recipe.title}</p>
                                            <p className="text-black font-bold px-4">{recipe.price} kr</p>
                                            <button
                                                onClick={() => removeFromCart(recipe._id)}
                                                className="ml-4 bg-red-500 hover:bg-red-700 text-white font py-1.5 px-5 rounded-md"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex px-1 py-5">
                            </div>
                            <button onClick={confirmOrder} className="text-xl text-white rounded-lg bg-green-900 p-1 hover:bg-gray-800 focus:outline-none absolute bottom-2 left-5 right-5">Confirm Order</button>
                        </>
                    ) : (
                        <div className="text-center p-4 bg-slate-500">
                            <h2 className="text-lg font-semibold">Thank you for your order!</h2>
                            <p>Your order number is #{orderNumber}</p>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}

export default NavBarComponent;