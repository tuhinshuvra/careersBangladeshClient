import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const PracticePurpose = () => {
    const [users, setUsers] = useState({});

    const handleAddUser = (event) => {
        event.preventDefault();
        // console.log("User List :", users)
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Data Added Successfully.');
                    event.target.reset();
                }
                // console.log(data)
            })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newUsers = { ...users }
        newUsers[field] = value;
        setUsers(newUsers);
    }




    return (
        <div className=' col-4 mx-auto'>
            <form onSubmit={handleAddUser} className=' d-flex flex-column'>
                <input onChange={handleInputBlur} type="text" name='name' id='name' placeholder='Input Name' required />
                <input onChange={handleInputBlur} type="email" name='email' id='email' placeholder='Input Email' required />
                <input onChange={handleInputBlur} type="text" name='phone' id='phone' placeholder='Input Phone' />
                <button className='custom_btn' type="submit">Add User</button>
            </form>
        </div>
    );
};

export default PracticePurpose;