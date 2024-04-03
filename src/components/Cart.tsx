import React, { useState } from 'react';
import NavBarComponent from './NavBarComponent';
import FooterComponent from './Footer/FooterComponent';

function Cart() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <>
            <NavBarComponent toggleCart={toggleCart} />
            <div className='bg-red-400'>
                <h1 className='text-5xl'>hej</h1>
                <div>hej</div>
                <div>hej</div>
                <div>hej</div>
                <div>hej</div>
                <div>hej</div>
            </div>
            {isCartOpen && (
                <div className='fixed top-0 right-0 h-full bg-white w-1/3 shadow-lg z-50'>
                    {/* content here */}
                    <div className='p-4'>
                        <h2 className='text-lg font-bold'>Shopping Cart</h2>
                        {/* cart items here */}
                    </div>
                </div>
            )}
            <FooterComponent />
        </>
    );
}

export default Cart;
