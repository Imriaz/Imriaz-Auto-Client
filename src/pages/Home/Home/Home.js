import React from 'react';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import ShowReviews from '../ShowReviews/ShowReviews';
import Blog from '../Blog/Blog';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ShowReviews></ShowReviews>
            <Blog />
            <Footer></Footer>
        </div>

    );
};

export default Home;