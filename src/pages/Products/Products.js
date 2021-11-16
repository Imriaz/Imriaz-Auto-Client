import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://warm-hollows-05894.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, []);
    return (
        <>
            <div>
                <h2 className='text-primary mt-5'>Our Products</h2>
            </div>
            <div className='products-container' id='products'>
                {
                    products.map(item => <Product
                        key={item._id}
                        item={item}
                    ></Product>
                    )
                }
            </div>
        </>
    );
};

export default Products;