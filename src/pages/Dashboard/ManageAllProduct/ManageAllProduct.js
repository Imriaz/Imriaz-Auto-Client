import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageAllProduct = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://warm-hollows-05894.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`https://warm-hollows-05894.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingProducts = products?.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
            console.log(id);
        }
    };

    return (
        <div className='myOrder-section'>
            <h1 className='text-info'>Manage My All Product</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Product No</th>
                        <th>Products Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                {products?.map((product, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{product?.Name}</td>
                            <td>{product?.price}</td>
                            <td><img style={{ height: '50px', width: '50px' }} src={product?.img} alt='' /></td>
                            <button onClick={() => handleDelete(product?._id)} className="btn bg-danger p-2 m-1">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllProduct;