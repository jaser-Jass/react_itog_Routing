import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import SortBySize from './SortBySize';
import  { useState } from 'react';

const Product = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState('All');
    const [message, setMessage] = useState('');
    const handleSizeChange = (newSize) => {
    console.log(`New size selected: ${newSize}`);
    setSelectedSize(newSize);
      };
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, selectedSize }));
                setMessage('Товар добавлен в корзину!'); // устанавливаем сообщение
        setTimeout(() => {
            setMessage(''); // очищаем сообщение через 3 секунды
        }, 3000);
    };

    return (
        <div className='item'>
                     {message && <div className="notification">{message}</div>} {/* Уведомление */}
              <div className='image-container'>    
            <img src={'./img/' + product.img}/>
             <button className='button'  onClick={handleAddToCart}><svg width="32" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="my-svg" d="M26.2 29a2.477 2.477 0 1 1 .2 0h-.2ZM6.752 26.32a2.68 2.68 0 1 1 5.364 0 2.68 2.68 0 0 1-5.366 0h.002Zm3.8-5.634a1.184 1.184 0 0 1-1.145-.867L4.574 2.364H1.18A1.182 1.182 0 0 1 1.18 0h4.28a1.183 1.183 0 0 1 1.145.868l4.833 17.455h13.178L29 8.275H14.4a1.183 1.183 0 1 1 0-2.365h16.413a1.178 1.178 0 0 1 .986.533 1.191 1.191 0 0 1 .1 1.122l-5.405 12.412a1.185 1.185 0 0 1-1.084.709H10.552Z" fill="black"/></svg>Add to cart</button></div>
         
            <div className='itemdesc'>
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <p>Price: {product.price}$</p>
            <p>Size:  <SortBySize onChange={handleSizeChange}/></p>
           
           
        </div>
        </div>
    );
};

export default Product;