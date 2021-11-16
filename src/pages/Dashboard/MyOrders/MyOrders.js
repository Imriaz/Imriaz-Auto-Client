import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://warm-hollows-05894.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [user?.email]);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`https://warm-hollows-05894.herokuapp.com/deleteOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingOrders = myOrders?.filter(myOrder => myOrder._id !== id);
                        setMyOrders(remainingOrders);
                    }
                });
            console.log(id);
        }
    };

    return (
        <div className='myOrder-section'>
            <h1 className='text-info'>Manage My Orders</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Order No</th>
                        <th>Name</th>
                        <th>Products Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {myOrders?.map((allOrder, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{allOrder?.name}</td>
                            <td>{allOrder?.Name}</td>
                            <td>{allOrder?.price}</td>
                            <td>{allOrder?.email}</td>
                            <td className='text-warning'>{allOrder?.status}</td>
                            <button onClick={() => handleDelete(allOrder?._id)} className="btn bg-danger p-2 m-1">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default MyOrders;