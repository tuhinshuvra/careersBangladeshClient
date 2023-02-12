import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const UserList = () => {
    // const [users, setUsers] = useState([]);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const respone = await fetch('http://localhost:5000/users');
            const data = respone.json();
            return data;
        }
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(respnse => respnse.json())
    //         .then(data => setUsers(data))
    // }, [])


    const handleMakeAdmin = (email) => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {}
        })
            .then(respnse => respnse.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success('User Make Admin Successfully')
                    refetch();
                }
            })
    }

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
            <h2 className='text-center  fw-bold  my-4'>All User</h2>
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
                                        {user?.role === "admin" ?
                                            <p className=' fw-bolder text-success'>
                                                Admin
                                            </p>
                                            :
                                            <button className=' btn btn-sm btn-info' onClick={() => handleMakeAdmin(user.email)}>Make Admin</button>
                                        }
                                    </td>
                                    <td>
                                        <Link to={`/dashboardAdmin/userUpdate/${user._id}`}>
                                            <button className=' fw-bold btn-sm btn btn-primary mx-1'
                                                onClick={() => handleUserUpdate(user._id)}
                                            >Update</button>
                                        </Link>

                                        <button className=' btn btn-sm  btn-outline-danger'
                                            onClick={() => handleDelete(user)}
                                        >Delete</button>
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