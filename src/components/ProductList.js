
import React from 'react';
import Product from './Product';
import products from '../data/products';


const ProductList = () => {
    return (
        <div className='catalog'>
            {products.map((product) => (
                <Product key={product.id} product={product} />
                
            ))}
           
        </div>
    );
};

export default ProductList;