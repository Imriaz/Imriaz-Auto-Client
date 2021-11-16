import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import Footer from '../Home/Shared/Footer/Footer';
import Navigation from '../Home/Shared/Navigation/Navigation';
import './Purchase.css'

const Purchase = () => {
    const { productId } = useParams({});
    const [product, setProduct] = useState({});

    const { user } = useFirebase();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch('https://warm-hollows-05894.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                const orderProduct = data.find(singleOrder => singleOrder._id == productId)
                setProduct(orderProduct);
                // reset(orderPackage);
            })
    }, [productId]);

    const onSubmit = data => {
        data.email = user?.email;
        data.status = 'Pending';
        fetch('https://warm-hollows-05894.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (data) {
                    alert('Ordered successfully');
                    reset();
                }
            });
        console.log(data);
    }
    return (
        <>
            <Navigation />
            <div className="review-section">
                <div className="row">
                    <div class="card col-lg-6 col-sm-12 mb-5 mt-5 item-part">
                        <img src={product.img} class="details-image" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-info">{product.Name}</h5>
                            <p class="card-text">{product.description}</p>
                            <h3 class="card-text text-info">${product.price}</h3>
                        </div>
                    </div>

                    {/* Form Start here */}
                    <div className="col-lg-6 col-sm-12">
                        <h1 className="mt-5 text-center text-info">Please Provide your Information for Booking</h1>
                        <div className="login-box w-25 m-auto mt-5">
                            <div className="package-box border border d-flex justify-content-center align-items-center">
                                <div className="login-form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input defaultValue={product?.Name}
                                            {...register("Name", { required: true })}
                                            placeholder="Products Name"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input defaultValue={user?.displayName}
                                            {...register("name", { required: true })}
                                            placeholder="Name"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input defaultValue={user?.email}
                                            {...register("email", { required: true })}
                                            placeholder="Email"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input defaultValue={product?.price}
                                            {...register("price", { required: true })}
                                            placeholder="Price"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("date")}
                                            placeholder="Date"
                                            type="date"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("address", { required: true })}
                                            placeholder="Address"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />
                                        <input
                                            {...register("phone", { required: true })}
                                            placeholder="Phone Number"
                                            className="p-2 m-2 w-100"
                                        />
                                        <br />

                                        {errors.exampleRequired && <span>This field is required</span>}

                                        <input type="submit" value="Confirm Booking" className="btn btn-info w-75" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Purchase;