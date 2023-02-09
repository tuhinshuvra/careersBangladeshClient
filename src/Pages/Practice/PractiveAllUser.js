import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const PractiveAllUser = () => {
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
        <div className="mt-4">
            {
                users.map(user =>
                    <p className=" mx-auto" key={user._id}>

                        Name : {user.name},Email : {user.email}, Phone: {user.phone}

                        <Link to={`/update/${user._id}`}>
                            <button className=' fw-bold btn-sm btn btn-primary mx-1'
                                onClick={() => handleUserUpdate(user._id)}
                            >Update</button>
                        </Link>

                        <button className=' fw-bold text-danger'
                            onClick={() => handleDelete(user)}
                        > X</button>
                    </p>
                )}
        </div>
    );
};

export default PractiveAllUser;