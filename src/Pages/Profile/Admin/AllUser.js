import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ConfirmatinModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loader from '../../Shared/Loader/Loader';

const UserList = () => {

    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null)
    }

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const respone = await fetch('http://localhost:5000/users');
                const data = respone.json();
                return data;
            }
            catch (error) {
                console.log(error)
            }
        }
    })


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
                refetch();
            });
        // console.log(user._id);
    }



    if (isLoading) {
        return <Loader></Loader>
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
                                        <Link to={`/dashboard/userUpdate/${user._id}`}>
                                            <button className=' fw-bold btn-sm btn btn-primary mx-1'
                                            // onClick={() => handleUserUpdate(user._id)}
                                            >Update</button>
                                        </Link>

                                        <button onClick={() => setDeletingUser(user)} data-bs-toggle="modal" data-bs-target="#confirmationModal" className=' btn btn-sm  btn-outline-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {
                    deletingUser &&
                    <ConfirmatinModal
                        title={'Are you sure you want to delete the user?'}
                        message={`If you once delete the user ${deletingUser.name} it's can't be recovered.`}
                        closeModal={closeModal}
                        successAction={handleDelete}
                        successButtonName='Delete'
                        modalData={deletingUser}
                    ></ConfirmatinModal>

                }

            </div >
        </div>
    );
};

export default UserList;