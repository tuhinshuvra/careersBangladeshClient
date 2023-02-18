import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const EmployerList = (userType) => {
    const [users, setUsers] = useState([]);

    const [isEmployer, setIsEmployer] = useState(false);

    useEffect(() => {
        if (userType) {
            fetch(`http://localhost:5000/users/${userType}`)
                .then(response => response.json())
                .then(data => {
                    console.log("AllEmployer:", data);
                    // setIsEmployer(data.isEmployer)
                    // setIsEmployerLoading(false)
                })
        }
    }, [userType])

    // return [isEmployer, isEmployerLoading]


    return (
        <div>
            <h2 className='text-center  fw-bold  my-4'>All User</h2>
        </div>
    );
};

export default EmployerList;