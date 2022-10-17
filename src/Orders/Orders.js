import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Review from '../Review/Review';
import { removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const { products, storedCart } = useLoaderData();
    const [cart, setCart] = useState(storedCart);
    const handleRemove = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <Review key={product.id} product={product} handleRemove={handleRemove}></Review>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;