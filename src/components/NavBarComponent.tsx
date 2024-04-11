// Kristian & Alexander
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import useRecipeState from "../State/indexState";
import { Link } from "react-router-dom";
import { Recipe } from "../data/Recipes";
import { MutableRefObject, useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import './Test/NavBarTestStyle.css'

interface CartItem {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

function NavBarComponent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const cart = useRecipeState((state) => state.cart);
  const removeFromCart = useRecipeState((state) => state.removeFromCart);
  const addToCart = useRecipeState((state) => state.addToCart);
  const handleIncreaseCart = useRecipeState((state) => state.handleIncreaseCart);
  const handleDecreaseCart = useRecipeState((state) => state.handleDecreaseCart);
  const clearCart = useRecipeState((state) => state.clearCart)
  const navRef: MutableRefObject<HTMLDivElement | null> = useRef(null);


  const showNavBar = () => {
    navRef.current?.classList.toggle("responsive_nav")
  }


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
  };


  const increaseQuantity = (recipeId: string) => {
    console.log(recipeId)
    console.log("tstINc", cart)
    handleIncreaseCart(recipeId);
  }


  const decreaseQuantity = (recipeId: string) => {
    console.log(recipeId)
    console.log("tst", cart)
    handleDecreaseCart(recipeId);
  }


  const totalPieces = cart.length;
  const totalPrice = cart.length > 0 ? cart.map((cartItem) => cartItem.price).reduce((total, price) => total + price, 0) : 0;


  return (
    <header className="flex">
      <div className="py-1">
        <Link to="/">
          <img src="Images/logo1.jpg" alt="Logo" className="h-10 absolute xl:block sm:hidden" />
        </Link>
      </div>
      <nav className="flex-grow bg-white xl:px-4 xl:py-2 xl:pb-4 xl:m-0 2xl:m-0 " ref={navRef}>
        <ul className="xl:flex xl:w-full 2xl:flex 2xl:w-full sm:mt-10 list-none 2xl:p-0 2xl:m-0 items-center sm:pl-10 xl:pl-4">
          <li className="sm:pt-10 2xl:pt-0 xl:pt-0 ">
            <Link
              to="/"
              className="xl:px-5 xl:py-2 2xl:px-5 2xl:py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500"
            >
              Home
            </Link>
          </li>
          <li className="sm:pt-5 2xl:pt-0 xl:pt-0">
            <Link
              to="/recipe"
              className="xl:px-5 xl:py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500"
            >
              Categories
            </Link>
          </li>
          <li className="sm:pt-5 2xl:pt-0 xl:pt-0">
            <Link
              to="/weeklytips"
              className="xl:px-5 xl:py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500"
            >
              Weekly Tips
            </Link>
          </li>
          <li className="sm:pt-5 2xl:pt-0 xl:pt-0">
            <Link
              to="/cocktails"
              className="xl:px-5 xl:py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500"
            >
              Cocktails
            </Link>
          </li>
          <li className="sm:pt-5 2xl:pt-0 xl:pt-0">
            <Link
              to="/about"
              className="xl:px-5 xl:py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500"
            >
              About us
            </Link>
          </li>
          <li className="xl:ml-auto 2xl:ml-auto sm:pt-5 2xl:pt-0 xl:pt-0">
            <Link
              to="/add"
              className="xl:px-5 xl:py-2 2xl:px-5 2xl:py-2 2xl:bg-green-400 xl:bg-green-400 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:bg-green-600 rounded-lg shadow mr-7"
            >
              Add recipe
            </Link>
          </li>
          <li className="sm:pt-5 2xl:pt-0 xl:pt-0">
            {" "}
            <button
              onClick={handleCartToggle}
              className="text-2xl relative flex items-center justify-center w-12 h-12"
            >
              <TiShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </li>
        </ul>
        <button className="nav-btn nav-clos-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

      {isCartOpen && (
        <div className="fixed top-0 right-0 h-full bg-gray-100 w-1/3 shadow-lg z-50 opacity-100 border rounded overflow-hidden">
          <button
            onClick={closeCart}
            className="text-2xl text-white absolute right-2 p-2 hover:shadow-md hover:bg-gray-300"
          >
            <IoCloseSharp />
          </button>
          {!isOrderConfirmed ? (
            <>
              <div className="p-4 bg-green-800 border rounded">
                <h2 className="text-xl font-semibold text-white p-4 text-center">Shopping Cart</h2>
              </div>
              <div className="px-2 overflow-y-auto" style={{ maxHeight: 'calc(100% - 200px)' }}>
                <div>

                  <div>
                    {Object.values<CartItem>(
                      cart.reduce(
                        (acc: { [key: string]: CartItem }, recipe) => {
                          if (acc[recipe._id]) {
                            acc[recipe._id].quantity += 1;
                          } else {
                            acc[recipe._id] = { ...recipe, quantity: 1 };
                          }
                          return acc;
                        },
                        {}
                      )
                    ).map((item: CartItem, index) => (
                      <div key={index} className="flex items-center my-2">
                        <div className="w-20 h-20">
                          <img src={item.imageUrl} className="w-full h-full object-cover" alt={item.title} />
                        </div>
                        <div className="flex-grow pl-4">
                          <p className="text-red-400 text-sm font-bold">{item.title}</p>
                          <div className="flex items-baseline">
                            <p className="text-black text-sm font-bold">
                              {item.price * item.quantity} kr
                            </p>
                            <p className="text-black text-sm ml-4" style={{ minWidth: '3rem' }}>
                              {item.quantity} pcs
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => decreaseQuantity(item._id)}
                            className="bg-red-500 hover:bg-red-700 text-white px-3 h-8 rounded-l-md"
                          >
                            -
                          </button>
                          <button
                            onClick={() => increaseQuantity(item._id)}
                            className="bg-green-500 hover:bg-green-700 text-white px-3 h-8 rounded-r-md"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-200 absolute bottom-0 w-full">
                <div className="flex justify-between items-center font-bold">
                  <span>Total Pieces:</span>
                  <span>{totalPieces}</span>
                </div>
                <div className="flex justify-between items-center font-bold mt-2">
                  <span>Total Price:</span>
                  <span>{totalPrice} kr</span>
                </div>
                <button onClick={clearCart} className="w-full bg-red-500 text-white mt-4 py-2 rounded hover:bg-red-600">Clear Cart</button>
                <button onClick={confirmOrder} className="w-full bg-green-900 text-white mt-2 py-2 rounded hover:bg-green-800">Confirm Order</button>
              </div>
            </>
          ) : (
            <div className="text-center p-4 bg-slate-500">
              <h2 className="text-lg font-semibold">
                Thank you for your order!
              </h2>
              <p>Your order number is #{orderNumber}</p>
            </div>
          )}
        </div>
      )}
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBarComponent;