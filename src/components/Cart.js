import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import { AiOutlineClose } from "react-icons/ai"
import AddShippingAdress from './AddShippingAdress';

const Cart = () => {
  
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
          <div class="top-head">
        <h2 class="top-head__heading">SHOPPING CART</h2></div>
            <div className='products'>
            <div class="productDescription ">
      
            {items.map((item) => (
              <div className='purchasesCardProduct' key={item.id}>
              
                    <img src={'./img/' + item.img}/>
                    <div className='descCart'>
                    <h4  className="productDescriptionText">{item.title}</h4>
                    <p className="productDescriptionText">Цена: ${item.price}</p>
                    <p className="productDescriptionText">Размер: {item.selectedSize}</p>
                    <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                    /></div>
                    <AiOutlineClose onClick={() => handleRemove(item.id)} className='delete-icon'/>
                
               
                </div>
            ))}
            </div>
             <AddShippingAdress/>
            </div>
           
            <h3>Итого: ${totalPrice}</h3>
           
        </div>
    );
};


export default Cart;