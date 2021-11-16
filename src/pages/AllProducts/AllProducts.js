import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import AllProduct from '../AllProduct/AllProduct';
import Footer from '../Home/Shared/Footer/Footer';
import Navigation from '../Home/Shared/Navigation/Navigation';
import '../Products/Products.css';

<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://warm-hollows-05894.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <>
            <Navigation />
            <div>
                <h2 className='text-primary mt-5'>Our Products</h2>
            </div>
            <div className='products-container' id='products'>
                {
                    products.map(item => <AllProduct
                        key={item._id}
                        item={item}
                    ></AllProduct>
                    )
                }
            </div>
            <Footer />
        </>
    );
};

export default AllProducts;