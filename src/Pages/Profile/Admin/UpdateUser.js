import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const storedUser = useLoaderData();

    const [user, setUser] = useState(storedUser);
    const navigate = useNavigate();


    const handleUpdateUser = (event) => {
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Updated : ", data)
                if (data.modifiedCount > 0) {
                    toast('User Updated Successfully.');
                    navigate('/dashboard/admin');
                }
            })

    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h4 className=' fw-bold text-center my-4'>Update {storedUser.name} Data </h4>
            <div className=' col-4 mx-auto'>
                <form onSubmit={handleUpdateUser} className='d-flex flex-column'>
                    <input onChange={handleInputChange} type="text" name='name' defaultValue={storedUser.name} id='name' className=' form-control my-1' />
                    <input onChange={handleInputChange} type="email" name='email' defaultValue={storedUser.email} id='email' disabled className=' form-control my-1' />
                    <input onChange={handleInputChange} type="text" name='phone' defaultValue={storedUser.phone} id='phone' className=' form-control my-1' placeholder='Phone no' />
                    <button className='custom_btn my-2' type="submit">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;