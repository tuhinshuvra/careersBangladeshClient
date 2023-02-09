import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(respnse => respnse.json())
            .then(data => setUsers(data))
    }, [])

    const handleDelete = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(respnse => respnse.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast('User Deleted Successfully.')
                }
            });
        // console.log(user._id);
    }

    const handleUserUpdate = (user) => {
        console.log("Selected to Update User : ", user._id)
    }



    return (
        <div>
            <h2 className=' text-center text-2xl font-bold my-10 '>All User</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className=''>
                            <th>SL</th>
                            <th>Name</th>
                            <th>User Type</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.userType}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/dashboardAdmin/userUpdate/${user._id}`}>
                                            <button className=' fw-bold btn-sm btn btn-primary mx-1'
                                                onClick={() => handleUserUpdate(user._id)}
                                            >Update</button>
                                        </Link>

                                        <button className=' fw-bold text-danger'
                                            onClick={() => handleDelete(user)}
                                        > X</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div >
        </div>
    );
};

export default UserList;